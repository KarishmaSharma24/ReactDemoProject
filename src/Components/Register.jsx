
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
      const [errors, setErrors] = useState({});

      const [generalError, setGeneralError] = useState("");

      const validateErrors = (inputFields) => {
            let errors = {};
            if(!user.name){
                  errors.name = "Name is required";
            }
            if(!user.mobile){
                  errors.mobile = "Mobile is required";
            }
            if(user.mobile.length < 10){
                  errors.mobile = "Mobile number should be 10 digits";
            }
            if(!user.email){
                  errors.email = "Email is required";
            }
            
            if(!user.password){
                  errors.password = "Password is required";
            }
            if(user.password.length < 6){
                  errors.password = "Password should be atleast 6 characters";
            }
            return errors;
      }

      function handleChange(e) {
            e.preventDefault();
            const { name, value } = e.target;
            setUser(()=>({
                  ...user,
                  [name]: value,
            }));
            setErrors(validateErrors({...user, [name]: value}));
            
      }

      function handleRegForm(e) {
            e.preventDefault();
            const validationErrors = validateErrors(user);
            setErrors(validationErrors);

            if(Object.keys(validationErrors).length > 0){
                  console.log("validationErrors", validationErrors);
                  
                  alert("Please fill all the required fields correctly.");
                  return;
            }
            axios
                  .post('http://localhost:8000/api/register', user)
                  .then((response) => {
                        
                              
                        alert("Form submitted successfully!");
                        console.log(response.data);

                  })
                  .catch((error) => {
                        if (error.response && error.response.status === 400) {
                              console.error("Error:", error.response.data.message); 
                              setGeneralError(error.response.data.message.email);
                              alert("Error submitting form: " + error.response.data.message);  // Show error message to the user
                        } else {
                              console.error("Error:", error.message);
                              setGeneralError(error.message);
                              alert("Error  form: " + error.message);  // Show generic error message
                        }

                  });



      }
      return (
            <>
                  <h1 className="text-center">Register Form</h1>
                  {generalError ? <span className="error text-danger">{generalError}</span> : null}
                  <Form className="p-5" onSubmit={handleRegForm}>
                        <Row className="mb-3">
                              <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" value={user.name} onChange={handleChange} />
                                    {errors.name ? <span className="error text-danger">{errors.name}</span> : null}
                              </Form.Group>

                              <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Mobile</Form.Label>
                                    <Form.Control type="number" name="mobile" value={user.mobile} onChange={handleChange} />
                                    {errors.mobile ? <span className="error text-danger">{errors.mobile}</span> : null}
                              </Form.Group>
                        </Row>
                        <Row className="mb-3 ">
                              <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" value={user.email} placeholder="Enter email" onChange={handleChange} />
                                    {errors.email ? <span className="error text-danger">{errors.email}</span> : null}
                              </Form.Group>

                              <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange} />
                                    {errors.password ? <span className="error text-danger">{errors.password}</span> : null}
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