import React, { useContext, useState } from 'react'
import "./Register.css";
import { Button,Card,CardBody,Form,CardTitle,FormGroup,Input,Label } from 'reactstrap';
import { ToastContainer,toast } from "react-toastify";
import { registerfunction } from '../../services/Apis';
import {useNavigate} from "react-router-dom"
import { addData } from '../../Provider';

export default function Register() {
  const {setUseradd}=useContext(addData)
    const nav=useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: "",
        name: ""
    });
    const handlechange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        console.log(form)
        const { email, password,name} = form;
        if (name === "") {
          toast.error("fullname is required")
        } else if (email === "") {
          toast.error("email is required")
        } else if (!email.includes("@")) {
          toast.error("enter valid email")
        } else if (password === "") {
          toast.error("password is required")
        } else if (password.length < 5) {
          toast.error("password too short should be of atleast 5 character")
        } else {
          
          const response = await registerfunction(form);
          console.log(response)
          if(response.status===200){                       
            setUseradd(response.data.message)
            setForm({...form,
              email: "",
              name: "",
              password: "",
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
            <CardTitle tag="h2">
             REGISTER/SIGN UP
            </CardTitle>
            <CardBody>
            <Form onSubmit={handlesubmit}>
            <FormGroup floating>
      <Input
        id="name"
        name="name"
        placeholder="Enter fullname"
        type="text"
        value={form.name}
        onChange={handlechange}
      />
      <Label for="exampleEmail">
        Full Name
      </Label>
    </FormGroup>
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
  </Card>
  <ToastContainer position="top-center" />
   </div>        
    )
  
}
