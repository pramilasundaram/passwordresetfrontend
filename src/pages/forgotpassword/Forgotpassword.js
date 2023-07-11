import React, { useContext, useState } from 'react';
import "./Forgotpassword.css";
import { Button, Card, CardBody, Form, CardTitle, FormGroup, Input, Label, CardSubtitle } from 'reactstrap';
import { ToastContainer, toast } from "react-toastify";
import { forgotpasswordfunction } from '../../services/Apis';
import { useNavigate } from "react-router-dom"
import { linkData } from '../../Provider';
export default function Forgotpassword() {
    const {setLinkadd}=useContext(linkData)
    const nav = useNavigate();
    const [form, setForm] = useState({
        email: ""
    });
    const handlechange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        console.log(form)
        const { email } = form;
        if (email === "") {
            toast.error("email is required")
        }else {
            const response = await forgotpasswordfunction(form);
            console.log(response)           
            if (response.status === 200) {               
                setLinkadd(response.data.message)
                setForm({  email: ""})
                nav("/")                 
            }else {
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
                       FORGOT PASSWORD
                    </CardTitle>
                    <CardSubtitle tag="p">
                        Lost your Password ? Please enter your email address you will receive a link to create a new Password via email
                    </CardSubtitle>
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
                            <Button color="dark">
                                Send
                            </Button>
                        </Form>
                    </CardBody>
                </Card>
                <ToastContainer position="top-center" />
            </div>    
        )
    }
