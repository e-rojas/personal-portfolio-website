import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


export default function Shop_about() {
  const sections = [
    {
      number: "01",
      title: "SADDLES",
      subtitle:
        "A vital part of any bike, handlebars are available in all their diversity at Cyclert online shop.",
    },
    {
      number: "02",
      title: "HANDLEBARS",
      subtitle:
        "Our store is ready to offer you the best saddle selection of all shapes and types for your bike.",
    },
    {
      number: "03",
      title: "RIMS & WHEELS",
      subtitle:
        "Feel free to explore an extensive range of wheels, rims & tires for your bike at our store.",
    },
    {
      number: "04",
      title: "FRAMES",
      subtitle:
        "Need a reliable and durable frame for your bike? Our store managers will be ready to help you.",
    },
  ]

  const columns = sections.map((element, index) => {
    return (
      <Section
        key={index}
        number={element.number}
        title={element.title}
        subtitle={element.subtitle}
      />
    )
  })

  return (
    <div>
      <Row className='p-5'>{columns}</Row>
    </div>
  )
}

const Section = props => {
  return (
    <Col
      className="alert alert-light m-0 d-flex flex-column align-self-center  p-5 "
      lg={6}
    >
      <span style={{ fontSize: 60 }}>{props.number}</span>
      <h1 className="text-dark"> {props.title}</h1>
      <span>{props.subtitle}</span>
      <span
        style={{ border: "1px solid grey", marginTop: 30, marginBottom: 30 }}
      />
    </Col>
  )
}
