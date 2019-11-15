import React from 'react'
import InfiniteCarousel from "react-leaf-carousel"
export default function Carousel(props) {
  return (
    <div style={{maxWidth:'1200px'}} className="container-fluid mt-5 ">
    <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
  >
    <div>
      <img
        alt=''
        src="https://haintheme.com/demo/html/bustter/images/uploads/mv-item1.jpg"
      />
    </div>
    <div>
      <img
        alt=''
        src="https://haintheme.com/demo/html/bustter/images/uploads/mv-item1.jpg"
      />
    </div>
    <div>
      <img
        alt=''
        src="https://haintheme.com/demo/html/bustter/images/uploads/mv-item1.jpg"
      />
    </div>
    <div>
      <img
        alt=''
        src="https://haintheme.com/demo/html/bustter/images/uploads/mv-item1.jpg"
      />
    </div>
   
  </InfiniteCarousel>
    </div>
  )
}
