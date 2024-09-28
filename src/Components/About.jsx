
import { Col, Image, Row, Table } from 'react-bootstrap';
import logo from '../logo.svg';
import React, { useContext } from 'react';
import { BreadcromContext } from '../hooks/ContextAPI/Breadcrum';


function About() {
  const user = [
    { id: 1, name: 'karishma', age: 26 },
    { id: 2, name: 'kavita', age: 24 },
    { id: 3, name: 'Marina', age: 23 },
    { id: 4, name: 'Mariyam', age: 22 },
  ];

  const pageName = useContext(BreadcromContext);

  return (
    <>
      <Row >
        <h1 className='text-center'>This is About Page {pageName} </h1>
        <Col >
          <Image src={logo} rounded height={300} />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quibusdam, accusantium animi voluptatum labore repudiandae placeat voluptatibus veritatis ea quia odit, alias odio delectus rem cupiditate nesciunt facere molestiae similique.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quos repudiandae sit voluptatem, qui iste nisi quidem, corrupti cumque, voluptatum velit ducimus ipsum? Molestiae explicabo eligendi temporibus impedit, beatae nam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quibusdam dolor fugit nesciunt eum officia molestias qui beatae assumenda, soluta harum expedita explicabo aliquid, quis sed. Iusto quos necessitatibus doloribus.
          </p>
        </Col>

      </Row>
      <Row>
        <Table striped bordered hover className='text-center'>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>

            {user.map((item, index) => (
              
              
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>

    </>
  );
}

export default About;