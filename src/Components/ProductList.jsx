import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function ProductList() {

      const [apiData, setApiData] = useState([]);

      useEffect(() => {
            fetch('https://dummyjson.com/products')
                  .then((res) => res.json())
                  .then((data) => setApiData(data.products))
                  .catch((error) => {
                        console.log(error);

                  });
      }, [])



      return <>
            <div className="container mt-5">
                  <h1>Product List</h1>
                  <Row>
                        {
                              apiData.length > 0 ? apiData.map((currData) => (

                                    <Col md={4} key={currData.id} className="mb-4">
                                          <Card style={{ width: '100%' }}>
                                                <Card.Img variant="top" src={currData.thumbnail} alt={currData.title} />
                                                <Card.Body>
                                                      <Card.Title>{currData.title}</Card.Title>
                                                      <Card.Text>
                                                            {currData.description}
                                                      </Card.Text>
                                                      <Button variant="primary" >
                                                            <Link to={`/product/${currData.id}`} className='text-white'>Details</Link>
                                                      </Button>
                                                </Card.Body>
                                          </Card>
                                    </Col>

                              )) : <p>Loading...</p>
                        } </Row></div>
      </>
}

export default ProductList;