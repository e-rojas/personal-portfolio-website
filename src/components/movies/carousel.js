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
      }}
      className="container-fluid mt-5 "
    >
      <Carousel style={{ width: "400px" }}>
        {props.posters.map((element, index) => {
          return (
            <Carousel.Item key={index}>
              <img
                style={{ width: "400px" }}
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
