import { useEffect, useState } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";


function ProductDetail() {
      const { id } = useParams();

      const [productDetail, setProductDetail] = useState(null);
      const [cartCount , setCartCount] = useState(0);

      useEffect(() => {
            fetch(`https://dummyjson.com/products/${id}`)
                  .then((res) => res.json())
                  .then((data) => setProductDetail(data)) 
                  .catch((error) => {
                        console.log(error);

                  });
      }, [id]);

      if (!productDetail) {
            return <p>Product not found</p>;
      }
      return <>
            <Container>
                  <h1>Product Detail</h1>
                  <Row className='m-5'>
                        <Col md={6}>
                              <Card.Img variant="top" src={productDetail.thumbnail} alt={productDetail.title} />
                        </Col>
                        <Col md={6}>
                              <Card style={{ width: '25rem' }}>

                                    <Card.Body>
                                          <Card.Title>{productDetail.title}</Card.Title>
                                          <Card.Text>{productDetail.description}</Card.Text>
                                          <h5>Price: ${productDetail.price}</h5>
                                          <h6>Category: {productDetail.category}</h6>
                                          <h6>Brand: {productDetail.brand}</h6>
                                          <h6>Rating: {productDetail.rating}</h6>
                                          <h6>
                                                Stock Status:{" "}
                                                <Badge bg={productDetail.availabilityStatus === "Low Stock" ? "danger" : "success"}>
                                                      {productDetail.availabilityStatus}
                                                </Badge>
                                          </h6>
                                          <h6>Warranty: {productDetail.warrantyInformation}</h6>
                                          <h6>Shipping: {productDetail.shippingInformation}</h6>

                                          <Button variant="primary" className="m-2" onClick={()=>{setCartCount(cartCount+1)}}>Add to cart <span>{ cartCount }</span></Button>
                                          <Button variant="primary" className="m-2">Buy Now</Button>
                                    </Card.Body>
                              </Card>
                        </Col>
                  </Row>
            </Container>
      </>
}

export default ProductDetail;