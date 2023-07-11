import React, {  useContext, useState } from 'react'
import "./Passwordreset.css";
import { Button,Card,CardBody,Form,CardTitle,FormGroup,Input,Label } from 'reactstrap';
import { ToastContainer,toast } from "react-toastify";
import { passwordresetfunction } from '../../services/Apis';
import {useNavigate,useParams} from "react-router-dom";
import { updateData } from '../../Provider';

export default function Login() {
 
  const {setUpdateadd}=useContext(updateData)
    const nav=useNavigate();
    const {id,token}=useParams();
    const [form, setForm] = useState({
        email: "",
        confirmpassword: "" 
    });
    const handlechange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        console.log(form)
        const { email, confirmpassword} = form;
         if (email === "") {
          toast.error("email is required")
        } else if (confirmpassword === "") {
          toast.error("confirmpassword is required")
        } else {  
          console.log(id,token)        
          const response = await passwordresetfunction(form,id,token);
          console.log(response)
          if(response.status===200){             
            setUpdateadd(response.data.message)
            setForm({...form,
              email: "",
              confirmpassword: ""
            })
            nav("/")        
          }
          else{
            toast.error(response.data.error)
          }
        }
      }
    return (        
          <div className='container' style={{ width: "50%" }}>
            <Card
            body
            className="text-center"
            style={{top:"10vh"}}
            >
                <CardTitle tag="h5">
                RESET PASSWORD
                </CardTitle>
                <CardBody>
                  <Form onSubmit={handlesubmit}>
                    <FormGroup floating>
                      <Input
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        value={form.email}
                          onChange={handlechange}
                        />
                        <Label for="exampleEmail">
                          Email
                        </Label>
                      </FormGroup>
                      {' '}

                      <FormGroup floating>
                        <Input
                          id="confirmpassword"
                          name="confirmpassword"
                          placeholder="confirmpassword"
                          type="password"
                          value={form.confirmpassword}
                          onChange={handlechange}
                        />
                        <Label for="examplePassword">
                        Confirmpassword
                        </Label>
                      </FormGroup>
                      {' '}

                      <Button color="dark">
                        Reset
                      </Button>
                  </Form>
                </CardBody>
            </Card>
            <ToastContainer position="top-center" />
          </div>  
        )
}
