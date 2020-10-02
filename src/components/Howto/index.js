import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './styles.scss';

const Howto = () => {
  return (
    <Container>
      <Row>
        <Col sm={3}>
          <Card>
            <Card.Img src='https://www.derkuchenladen.de/wp-content/uploads/2018/10/baiser-kuchen-cafe-berlin.jpg' />
          </Card>
        </Col>
        <Col sm={3}>
          <Card>
            <Card.Img src='https://www.derkuchenladen.de/wp-content/uploads/2018/10/cupcakes-berlin-order-bestellen.jpg' />
          </Card>
        </Col>
        <Col sm={3}>
          <Card>
            <Card.Img src='https://www.derkuchenladen.de/wp-content/uploads/2018/10/cupcakes-berlin-shop.jpg' />
          </Card>
        </Col>
        <Col sm={3}>
          <Card>
            <Card.Img src='https://www.derkuchenladen.de/wp-content/uploads/2018/10/cupcakes-shop-berlin-west.jpg' />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Howto;
