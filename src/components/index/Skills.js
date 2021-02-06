import React from "react"
import "./skills.css"
import ProgressBar from "../single/ProgressBar"
import CardImage from "../../images/wedesign.png"
import {
  faFigma,
  faBootstrap,
  faSass,
  faReact,
} from "@fortawesome/free-brands-svg-icons"
export default function Skills() {
  return (
    <div className="container-fluid skills-section ">
      <div className="row   justify-content-center h-100">
        <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
          <div className="card  text-white">
            <img className="card-img" src={CardImage} alt="Card image" />
            <div className="card-img-overlay"></div>
          </div>
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
          <h4 className="font-weight-bold details ">Tools of the trade</h4>
          <p>
            This are some of the tools I daily use to create user interfaces /
            web applications.
          </p>
          {[
            { icon: faFigma, color: "clr-1" },
            { icon: faBootstrap, color: "clr-2" },
            { icon: faSass, color: "clr-1" },
            { icon: faReact, color: "clr-2" },
          ].map((bar, index) => (
            <ProgressBar key={index} {...bar} />
          ))}
        </div>
      </div>
    </div>
  )
}
