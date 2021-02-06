import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./layout.css"
import './jumbotron.css'
import './about.css'
import './main.css'

export default ({ children }) => (
  <div className='container-fluid  vh-100 p-0 '>
    {children}
  </div>
)



