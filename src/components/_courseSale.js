import React, { useState } from "react"

const _courseSale = props => {
  const [price, setPrice] = useState(0)

  function sumTotal(addedPrice) {
    setPrice(price + addedPrice)
  }
  const courses = props.courses.map((item, index) => {
    return (
      <Course
        description={item.description}
        name={item.name}
        price={item.price}
        key={index}
        sumTotal={sumTotal}
      />
    )
  })
  return (
    <div  className="container p-5">
          <div style={{ backgroundImage: 'url(https://www.web-indexing.org/wp-content/uploads/2018/04/Online-learning.jpg)',color:'black' }}
              class="jumbotron jumbotron-fluid ">
  <div class="container">
                  <h1 class="display-4">{props.title}</h1>
    <p class="lead">Develop your skills to the next level.</p>
  </div>
</div>
      {courses}
      <span> Total Cart : ${price.toFixed(2)}</span>
    </div>
  )
}

const Course = props => {
  let [active, setActive] = useState(true)

  function handleClickCourse() {
    setActive(!active)
    props.sumTotal(active ? props.price : -props.price)
  }

  return (
    <div>
      <p style={{cursor:'pointer'}}
        className={active ? "alert alert-primary" : "alert alert-danger"}
        onClick={handleClickCourse}
      >
        {" "}
        <b >{props.name}</b> ${props.price.toFixed(2)} <small>{props.description}</small>{" "}
      </p>
    </div>
  )
}

export default _courseSale
