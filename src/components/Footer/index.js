import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Button from '../forms/Button';

const Footer = (props) => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col sm={4}>
            <Card>
              <Card.Title>DER KUCHENLADEN</Card.Title>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faFacebook} />
                  Facebook
                </li>

                <li>
                  <FontAwesomeIcon icon={faInstagram} />
                  Instagram
                </li>
                <li>
                  <FontAwesomeIcon icon={faHome} />
                  Alexsander str 3 10234 Berlin{' '}
                </li>
                <li>
                  <FontAwesomeIcon icon={faMobile} />
                  030 123456{' '}
                </li>
              </ul>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <Card.Title>OPENING HOURS</Card.Title>
              <ul>
                <li>Monday 10a.m to 8p.m </li>
                <li>Tuesday 10a.m to 8p.m </li>
                <li>Thursday 10a.m to 8p.m </li>
                <li>Friday 10a.m to 8p.m </li>
              </ul>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <Card.Title>ODER REQUEST</Card.Title>
              <span className='callus_now'>
                Please use our online form to request individual tortes and
                cakes. Thank you.{' '}
                <Button>
                  Call Us
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </Button>
              </span>
            </Card>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
