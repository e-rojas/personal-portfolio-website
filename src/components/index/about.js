import React from "react"
import portrait from "../../images/profile.png"
import "./about.css"
export default () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row"></div>
        <div className="row pt-5 pb-5">
          <div className="col-sm-4 mt-2 mb-2">
            <img src={portrait} alt="portrait" className="img-fluid rounded" />
          </div>
          <div className="col-sm-8 mt-2 mb-2 pt-4 pb-4 d-flex flex-column justify-content-start   ">
            <h4 className="font-weight-bold details ">About Me</h4>
            <span className="text-muted about">
              Creative art director turned web developer. After working many
              years in the fashion industry my passion for creativity shifted
              into the world of web development. Learning Javascript to create
              small animation on web pages was my first step into web
              development. Being part of a group to develop a project is the key
              to success on how we can come togehter with code and create the
              most innovative sites based out of imagination and creativity. I
              am always keen on learning new technologies as well as getting to
              know other incredible developers around the world. Thanks for
              visiting my site and drop me a line or two via email to chat about
              coding. Cheers!{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
