import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Row } from 'react-bootstrap';

const MainLayout = ({ content }) => {
  return (
    <Row>
      <Header />
      <main>
        {content}
      </main>

      <Footer />
    </Row>
  );
};

export default MainLayout;
