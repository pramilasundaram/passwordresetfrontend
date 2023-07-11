import React, { useContext, useState } from 'react'
import "./Login.css";
import {Button,Card,CardBody,Form,CardTitle,FormGroup,Input,Label,CardText,CardLink} from 'reactstrap';
import { ToastContainer,toast } from "react-toastify";
import { loginfunction } from '../../services/Apis';
import {useNavigate} from "react-router-dom"
import { addData, linkData, updateData, userData } from '../../Provider';
import Alert from 'react-bootstrap/Alert';
export default function Login() {
    const nav=useNavigate();
    const {setIsAuthenticated,setUser}=useContext(userData)

    const [form, setForm] = useState({
        email: "",
        password: "" 
    });
    const handlechange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        console.log(form)
        const { email, password} = form;
         if (email === "") {
          toast.error("email is required")
        } else if (password === "") {
          toast.error("password is required")
        } else {          
          const response = await loginfunction(form);
          console.log(response)
          if(response.status===200){   
            console.log(response.data.message)        
            setIsAuthenticated (true)
            setUser(response.data)   
            setForm({...form,
              email: "",
              password: "",
            })           
            nav("/home")  

          }
          else{
            toast.error(response.data.error)
          }
        }
      }
      const { useradd, setUseradd } = useContext(addData);
      const { updateadd, setUpdateadd } = useContext(updateData);
      const { linkadd, setLinkadd } = useContext(linkData);
    return ( 
      <div>  
      {useradd ? <Alert variant="success" onClose={() => setUseradd("")} dismissible> user successfully added!!</Alert> : ""}
      {updateadd ? <Alert variant="success" onClose={() => setUpdateadd("")} dismissible> password updated!!</Alert> : ""}     
      {linkadd ? <Alert variant="success" onClose={() => setLinkadd("")} dismissible> Please check your email inbox for a link to complete the reset!!</Alert> : ""}     
      <div className='container' style={{ width: "50%" }}>
            <Card
            body
            className="text-center"
            style={{top:"10vh"}}
            >
            <CardTitle tag="h2">
              LOGIN
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
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                  value={form.password}
                  onChange={handlechange}
                />
                <Label for="examplePassword">
                  Password
                </Label>
              </FormGroup>
              {' '}
              <Button color="dark">
                Submit
              </Button>
            </Form>
          </CardBody>
            <CardText>
              Forgot password ?<CardLink href="/forgotpassword"> Reset Password </CardLink>
            </CardText>  
        </Card>
        <ToastContainer position="top-center" />
        </div>
        </div> 
    )
}
