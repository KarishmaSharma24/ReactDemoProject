import { useContext, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import { BreadcromContext } from "../hooks/ContextAPI/Breadcrum";




function Contact() {

      const [inputFields, setInputFields] = useState({
            name: "",
            mobile: "",
            email: "",
            password: "",
      });

      const pageName = useContext(BreadcromContext);
      
      const [errors, setErrors] = useState({});
      const [submitting, setSubmitting] = useState(false);

      const handleChange = (e) =>{
            const {name, value} = e.target;
            setInputFields({
                  ...inputFields,
                  [name] : value,
            });
      };

      const validate = () => {
            const newErrors = {};
            if(!inputFields.name) newErrors.name = "Name is required";
            if(!inputFields.mobile) newErrors.mobile = "Mobile is require";
            if(!inputFields.password) newErrors.password = "Password is require";
            if(!inputFields.email) newErrors.email = "Email is required";
            
            console.log(newErrors);
            console.log("newErrors");
            return newErrors;
      };
      
      async function handleForm(e) {
      
            e.preventDefault();
            const validationErrors = validate();
            console.log("hhhh", validationErrors);
            if (Object.keys(validationErrors).length > 0) {
                  alert(Object.values(validationErrors).join('\n'));
                  setErrors(validationErrors);
            } else {
                  setSubmitting(true);
                   try {
            const response = await axios.post('http://localhost:8000/api/contact', inputFields);
            alert("Form submitted successfully!");
        } catch (error) {
            console.error("Error:", error);
            alert("Error submitting form");
        } finally {
            setSubmitting(false);
        }
                  
            }
      }
      
      return (
            <>
                  <h1 className="text-center">Conatct Form {pageName}</h1>
                  <Form className="p-5" onSubmit={handleForm}>
                        <Row className="mb-3">
                              <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" value={inputFields.name} onChange={handleChange} isInvalid={!!errors.name} />
                              </Form.Group>

                              <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Mobile</Form.Label>
                                    <Form.Control type="number" name="mobile" value={inputFields.mobile} onChange={handleChange} isInvalid={!!errors.mobile} />
                              </Form.Group>
                        </Row>
                        <Row className="mb-3 ">
                              <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Enter email" value={inputFields.email} onChange={handleChange} isInvalid={!!errors.email} />
                              </Form.Group>

                              <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Password" value={inputFields.password} onChange={handleChange} isInvalid={!!errors.password} />
                              </Form.Group>
                        </Row>


                        <Button variant="primary" type="submit" disabled={submitting}>
                        {submitting ? "Submitting..." : "Submit"}
                        </Button>
                  </Form>
            </>
      );
}

export default Contact;