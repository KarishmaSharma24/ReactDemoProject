import { Button, Col, Form, Row } from "react-bootstrap";

import axios from "axios";
import React from "react";
import { useState } from "react";


function Login() {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

    

      function handleLoginForm(e){
            e.preventDefault();
            const loginData = {
                  email,
                  password,
            }
            console.log("lgoin");
            console.log(loginData);
            
      }     

      return (
            <>
            <h1 className="text-center">Login Form</h1>
                  <Form className="p-5" onSubmit={handleLoginForm}>
                       
                        <Row className="mb-3 ">
                              <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" value={user.email} placeholder="Enter email" onChange={(e)=>{e.target.value}} />
                              </Form.Group>

                              <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" value={user.password} placeholder="Password" onChange={(e)=>{e.target.value}} />
                              </Form.Group>
                        </Row>


                        <Button variant="primary" type="submit" >
                              Login
                        </Button>
                  </Form>
            </>
      );
}

export default Login;