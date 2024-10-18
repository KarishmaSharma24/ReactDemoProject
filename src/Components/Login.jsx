import { Button, Col, Form, Row } from "react-bootstrap";

import axios from "axios";
import React from "react";
import { useState } from "react";


function Login() {
      const [user, setUser] = useState({
            email:"",
            password:"",
      });

      function handleChange(e){
            const { name, value } = e.target;
            setUser({
                  ...user,
                  [name]:value,
            });
      }

      function handleLoginForm(e){
            e.preventDefault();
            
      }     

      return (
            <>
            <h1 className="text-center">Login Form</h1>
                  <Form className="p-5" onSubmit={handleLoginForm}>
                       
                        <Row className="mb-3 ">
                              <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" value={user.email} placeholder="Enter email" onChange={handleChange} />
                              </Form.Group>

                              <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange} />
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