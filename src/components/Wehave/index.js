import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './styles.scss';

const Wehave = () => {
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <Card>
            <Card.Img
              variant='top'
              src='https://images.unsplash.com/photo-1467630144534-da2b634ce269?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
            />
            <Card.Body>
              <Card.Title> CAKES & TORTES</Card.Title>
              <Card.Text>
                If you love fruit, then may we recommend our cakes and tortes
                with all sorts of fruits. One of many popular items is our
                strawberry torte, but there are many other exotic and more
                classic variations awaiting you. From a mixed fruit torte,
                papaya, persimmon, or even a rice pudding torte – bon appétit!s
              </Card.Text>
              <Button variant='primary'>Oder Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>
            <Card.Img
              variant='top'
              src='https://images.unsplash.com/photo-1467630144534-da2b634ce269?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
            />
            <Card.Body>
              <Card.Title>CAKES & TORTES</Card.Title>
              <Card.Text>
                If you love fruit, then may we recommend our cakes and tortes
                with all sorts of fruits. One of many popular items is our
                strawberry torte, but there are many other exotic and more
                classic variations awaiting you. From a mixed fruit torte,
                papaya, persimmon, or even a rice pudding torte – bon appétit!.
              </Card.Text>
              <Button variant='primary'>Oder Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>
            <Card.Img
              variant='top'
              src='https://images.unsplash.com/photo-1467630144534-da2b634ce269?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
            />
            <Card.Body>
              <Card.Title>CAKES & TORTES</Card.Title>
              <Card.Text>
                If you love fruit, then may we recommend our cakes and tortes
                with all sorts of fruits. One of many popular items is our
                strawberry torte, but there are many other exotic and more
                classic variations awaiting you. From a mixed fruit torte,
                papaya, persimmon, or even a rice pudding torte – bon appétit!
              </Card.Text>
              <Button variant='primary'>Oder Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Wehave;
