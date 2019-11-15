import React from "react"
import Carousel from "react-bootstrap/Carousel"

export default function carousel(props) {
  return (
    <div
      style={{
        maxWidth: "1200px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: "400px",
        padding: "10px",
        backgroundImage:
          "url(https://haintheme.com/demo/html/bustter/images/uploads/slider-bg.jpg)",
        alignItems: "center",
      }}
      className="container-fluid mt-5 bg-warning"
    >
      <Carousel style={{ width: "200px", height: "300px" }}>
        {props.posters.map((element, index) => {
          return (
            <Carousel.Item key={index}>
              <img
                style={{ width: "200px", height: "300px" }}
                className="d-block "
                src={element.img}
                alt=""
              />
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}
