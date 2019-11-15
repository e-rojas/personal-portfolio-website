import React from 'react'
import InfiniteCarousel from "react-leaf-carousel"
export default function Carousel(props) {
  return (
    <div style={{maxWidth:'1200px'}} className="container-fluid mt-5 ">
          <InfiniteCarousel
          autoCycle={true} 
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
        sidesOpacity={0.5}
        sideSize={0.1}
        slidesToScroll={4}
        slidesToShow={4}
        scrollOnDevice={false}
      >
        {props.posters.map((poster, index) => {
          return (
            <div key={index}>
              <img
                alt={poster.alt}
                src={poster.img}
              />
            </div>
          )
        })}
      </InfiniteCarousel>
    </div>
  )
}
