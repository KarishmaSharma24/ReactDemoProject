
import { Button, Col, Form, Row } from "react-bootstrap";

import axios from "axios";
import React from "react";
import { useState } from "react";


function Register() {
      const [user, setUser] = useState({
            name: "",
            mobile: "",
            email: "",
            password: "",
      });

      function handleChange(e) {
            const { name, value } = e.target;
            setUser({
                  ...user,
                  [name]: value,
            });
      }

      function handleRegForm(e) {
            e.preventDefault();

            axios
                  .post('http://localhost:8000/api/register', user)
                  .then((response) => {

                        alert("Form submitted successfully!");
                        console.log(response.data);

                  })
                  .catch((error) => {
                        if (error.response && error.response.status === 400) {
                              console.error("Error:", error.response.data.message);  // Access error response message correctly
                              alert("Error submitting form: " + error.response.data.message);  // Show error message to the user
                        } else {
                              console.error("Error:", error.message);
                              alert("Error  form: " + error.message);  // Show generic error message
                        }

                  });



      }
      return (
            <>
                  <h1 className="text-center">Register Form</h1>
                  <Form className="p-5" onSubmit={handleRegForm}>
                        <Row className="mb-3">
                              <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" value={user.name} onChange={handleChange} />
                              </Form.Group>

                              <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Mobile</Form.Label>
                                    <Form.Control type="number" name="mobile" value={user.mobile} onChange={handleChange} />
                              </Form.Group>
                        </Row>
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
                              Register
                        </Button>
                  </Form>
            </>
      );
}

export default Register;