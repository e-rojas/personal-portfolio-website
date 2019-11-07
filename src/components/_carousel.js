import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
const _carousel = () => {
    return (
            
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://livedemo00.template-help.com/wt_prod-22072/images/slide-1.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="text-left mb-5" >
      <h3>Cycler-Parts</h3>
      <p>Wide variety of parts.</p>
      <Button className='text-dark' variant="warning">SHOP NOW</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://livedemo00.template-help.com/wt_prod-22072/images/slide-3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption   className="text-left mb-5" >
      <h3>Best Prices!!</h3>
      <p>30% on first purchase.</p>
      <Button className='text-dark' variant="warning">SHOP NOW</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://livedemo00.template-help.com/wt_prod-22072/images/slide-2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption  className="text-left mb-5" >
      <h3>Free Shipping</h3>
      <p>Fast parts delivery.</p>
      <Button className='text-dark' variant="warning">SHOP NOW</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      
    );
}

export default _carousel;
