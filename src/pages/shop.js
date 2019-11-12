/* import React from "react"
import CourseSale from "../components/_courseSale"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from '../components/header';
const Courses = props => {
  const courses = [
    { name: "Python", price: 33.50, description: "Learn Python in 3 weeks!!" },
    { name: "Java", price: 23.00, description: "Learn Java quick guide!!" },
    { name: "SQL", price: 43.00, description: "Learn SQL by building a blog!!" },
    {
      name: "JavaScript",
      price: 13.0,
      description: "Learn javaScript the OOP way!!",
    },
  ]
    return (
     
        <div>
        <Header></Header>
      <CourseSale title={props.title} courses={courses} />
    </div>
  )
}
Courses.defaultProps = {
  title: "Web Dev Courses",
}

export default Courses
 */

import React from 'react';
import Header from '../components/header'
import Carousel from '../components/shop/_carousel';
import About from '../components/shop_about';
//import Cards from '../components/shop_cards';
import Cards from '../components/shop/cards'

export default () => (
  <div className='container-fluid'>
    <Header />
    <Carousel />
    <About />
   <Cards />
    </div>
);