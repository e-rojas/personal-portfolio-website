import React from "react"
import Carousel from "react-bootstrap/Carousel"
import Button from "react-bootstrap/Button"
const _carousel = () => {
  const info = [
    {
      alt: "first slide",
      source:
        "https://livedemo00.template-help.com/wt_prod-22072/images/slide-1.jpg",
      title: "Cycler-Parts",
      subTitle: "Wide variety of parts",
      buttonMsg: "SHOP NOW",
    },
    {
      alt: "first slide",
      source:
        "https://livedemo00.template-help.com/wt_prod-22072/images/slide-2.jpg",
      title: "Best Prices",
      subTitle: "30% Discount.",
      buttonMsg: "SHOP NOW",
    },
    {
      alt: "first slide",
      source:
        "https://livedemo00.template-help.com/wt_prod-22072/images/slide-3.jpg",
      title: "Free Shipping",
      subTitle: "30 days warranty.",
      buttonMsg: "SHOP NOW",
    },
  ]
  return (
    <Carousel style={{marginTop:'70px'}}>
      {info.map((element, index) => {
        return (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={element.source}
              alt={element.alt}
            />
            <Carousel.Caption className="text-left mb-5">
              <h3> {element.title} </h3>
              <p> {element.subTitle} </p>
              <Button className="text-dark" variant="warning">
                {" "}
                {element.buttonMsg}
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
      })
    </Carousel>
  )
}

export default _carousel
