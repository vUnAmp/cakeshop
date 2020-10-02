import React from 'react';
import Howto from '../../components/Howto';
import Slide from '../../components/Slide';
import Wehave from '../../components/Wehave';
import Directory from './../../components/Directory';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import './styles.scss';

const Homepage = (props) => {
  return (
    <section className='homepage'>
      <Slide />
      <h3 className='section_title'>Our Special Everyday</h3>
      <Wehave />

      <Container>
        <h3 className='section_title'>What we do</h3>
        <p className='section_desc'>
          Along with the abovementioned selections of cakes and tortes, we also
          always have small and large to-go cakes (diameter starting at 18 cm)
          available that you can take with you immediately – for instance our
          birthday cakes for women, men and children. There are also fresh
          croissants, cheesecakes, meringues, cream puffs, homemade biscuits,
          fruit spreads, macaroons, more savory alternatives including muffins
          (bacon/cheese) and quiche and much, much more. Stop by and enjoy! Do
          you want a tiny cake to take to work or the park? Our cupcakes are
          always fresh and come with a variety of fillings and decorations –
          naturally all made by hand and baked to our own recipes.
        </p>
        <Row>
          <Col sm={6} className='section_left'></Col>
          <Col sm={6} className='section_right'>
            <h1>CAKE DESIGN</h1>
            <span>
              Customized cakes? No problem! We can design your cake to match the
              style, batter and filling you desire. Find out more!
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={6} className='section_right section_right2'>
            <h1>BAKERY</h1>
            <span>
              We bake exclusively using our own recipes and pay attention to
              every last detail. Take a look behind the scenes!
            </span>
          </Col>
          <Col sm={6} className='section_left section_left2'></Col>
        </Row>
      </Container>

      <h3 className='section_title'>CUPCAKES</h3>
      <p className='section_desc'>
        Do you want a tiny cake to take to work or the park? Our cupcakes are
        always fresh and come with a variety of fillings and decorations –
        naturally all made by hand and baked to our own recipes.
      </p>

      <Howto />
      {/* <Directory /> */}
    </section>
  );
};

export default Homepage;
