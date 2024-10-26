import { Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import React from "react";
import { useState } from "react";


function Login() {

      const [user, setUser] = useState({
            email: "",
            password: "",
      });

      const [errors, setErrors] = useState({});
      const [generalError, setGeneralError] = useState("");

      const validateErrors = (inputFields) => {
            let errors = {};
            if (!user.email) {
                  errors.email = "Email is required";
            }
            if (!user.password) {
                  errors.password = "Password is required";
            }
            return errors;
      }

      function handleChange(e) {
            e.preventDefault();
            const { name, value } = e.target;
            setUser(() => ({
                  ...user,
                  [name]: value,
            }));
            setErrors(validateErrors({ ...user, [name]: value }));
      }

      function handleSubmit(e) {
            e.preventDefault();
            const validationErrors = validateErrors(user);
            setErrors(validationErrors);

            if (Object.keys(validationErrors).length > 0) {
                  alert(Object.values(validationErrors).join('\n'));
            } else {
                  axios.post('http://localhost:8000/api/login', user)
                        .then(response => {
                              setGeneralError("");
                              console.log(response);
                              alert("Login successful");
                        })
                        .catch(error => {
                              setGeneralError("");
                              setGeneralError("Invalid credentials"+error.error)    ;
                              console.error("Error:", error);
                              alert("Error logging in");
                        });
            }     
      }
     

      return (
            <>
            <h1 className="text-center">Login Form</h1>
            {generalError ? <span className="error text-danger">{generalError}</span> : null}
                  <Form className="p-5" onSubmit={handleSubmit}>
                        <Row className="mb-3 ">
                              <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" onChange={handleChange} isInvalid={!!errors.email} placeholder="Enter email"  />
                              </Form.Group>

                              <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" onChange={handleChange} placeholder="Password" isInvalid={!!errors.email} />
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