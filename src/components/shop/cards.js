import React, { useState } from "react"

export default function Cards() {
  const [price, setPrice] = useState(0)

  function sumTotal(addedPrice) {
    setPrice(price + addedPrice)
  }

  const cardsInfo = [
    {
      name: "Bottle Cage",
      price: 22.0,
      img:
        "https://livedemo00.template-help.com/wt_prod-22072/images/product-1-109x175.png",
    },
    {
      name: "Mount Carrier",
      price: 15.0,
      img:
        "https://livedemo00.template-help.com/wt_prod-22072/images/product-2-168x175.png",
    },
    {
      name: "Commuter Carrier",
      price: 32.0,
      img:
        "https://livedemo00.template-help.com/wt_prod-22072/images/product-3-208x175.png",
    },
    {
      name: "Bycycle Bag",
      price: 17.99,
      img:
        "https://livedemo00.template-help.com/wt_prod-22072/images/product-4-130x175.png",
    },
    {
      name: "Gloves",
      price: 54.99,
      img:
        "https://livedemo00.template-help.com/wt_prod-22072/images/product-5-220x175.png",
    },
    {
      name: "Bike Helmet",
      price: 31.0,
      img:
        "https://livedemo00.template-help.com/wt_prod-22072/images/product-6-179x175.png",
    },
  ]

  return (
    <div className="text-center">
      <h4 className={price !== 0 ? "text-danger" : "text-dark"}>
        Cart Total: ${price.toFixed(2)}{" "}
      </h4>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          maxWidth: "1600px",
          margin: "auto",
        }}
      >
        {cardsInfo.map((element, index) => {
          return (
            <Card
              sumTotal={sumTotal}
              name={element.name}
              key={index}
              price={element.price}
              image={element.img}
            />
          )
        })}
      </div>
    </div>
  )
}

const Card = props => {
  let [active, setActive] = useState(true)
  const handleClickCard = () => {
    setActive(!active)
    props.sumTotal(active ? props.price : -props.price)
  }

  return (
    <div
      className={
        active ? " card alert alert-info" : " card alert alert-secondary"
      }
      onClick={handleClickCard}
      style={{
        flexGrow: "3",
        flexBasis: "23rem",
        color: "black",
        cursor: "pointer",
      }}
    >
      <div className="row">
        <div className="col-4">
          <img
            style={{ width: "100px", height: "100px" }}
            className="img-thumbnail"
            alt="product"
            src={props.image}
          />
        </div>
        <div className="col-8">
          <h5>{props.name}</h5>
          <span className="font-weight-bolder">${props.price.toFixed(2)}</span>
        </div>
      </div>
      <div className="row">
        <div className="col mt-3">
          <p>
            Single-page app built on React.js that allows users to book, edit or
            cancel interviews for each day of the week.
          </p>
        </div>
      </div>
    </div>
  )
}
