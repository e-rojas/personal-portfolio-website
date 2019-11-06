import React from "react"
import CourseSale from "../components/_courseSale"
import "bootstrap/dist/css/bootstrap.min.css"
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
      <CourseSale title={props.title} courses={courses} />
    </div>
  )
}
Courses.defaultProps = {
  title: "Web Dev Courses",
}

export default Courses
