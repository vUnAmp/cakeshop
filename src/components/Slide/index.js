import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import pic1 from './../../assets/pic4.jpg';
import pic2 from './../../assets/pic2.jpg';
import pic3 from './../../assets/pic3.jpg';

import './styles.scss';

const Slide = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div>
        <img src={pic1} alt='Item slide' />
        <p className='legend' alt='Item slide'>
          We love Cake!
        </p>
      </div>
      <div>
        <img src={pic2} alt='Item slide' />
        <p className='legend'>Make with our love</p>
      </div>
      <div>
        <img src={pic3} alt='Item slide' />
        <p className='legend'>Fresh and Healthy</p>
      </div>
    </Carousel>
  );
};

export default Slide;
