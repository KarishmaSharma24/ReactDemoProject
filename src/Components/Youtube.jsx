import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';


function Youtube() {
      return <>
            <Container fluid>
                  <h1>Youtube Page</h1>
                  <Row>
                        {/* Video Player */}
                        <Col md={8}>
                              {/* <VideoPlayer /> */}
                        </Col>

                        {/* Suggested Videos */}
                        <Col md={4}>
                              <h4>Suggested Videos</h4>
                              {/* <VideoList /> */}
                        </Col>
                  </Row>
            </Container>
      </>
}

export default Youtube;