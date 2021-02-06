import React from "react"
import './jumbotron.css'

export default () => {
  return (
    <section className="jumbotron p-0 m-0">
      <div className="container d-flex flex-column justify-content-center">
        <h4 className="">Hi, I'm Edgar Rojas</h4>
        <p>
          A web developer based out of Canada. Through constant learning and
          creation, I produce aesthetic software to the highest standard. I’m
          largely framework agnostic currently in love with React, due to the
          ability for me to create native applications for IOS and Android.
          <br />
          <blockquote className="blockquote mt-4">
            <p className="mb-0 ">
              <em>
                The greatest thing is when you do put your heart and soul into
                something over an extended period of time, and it is worth it.
              </em>
            </p>
            <footer className="blockquote-footer">
              <cite title="Source Title">Steve Jobs</cite>
            </footer>
          </blockquote>
          <a
            role="button"
            href="path_to_file"
            download="proposed_file_name"
            className="btn hvr-shutter-in-horizontal "
          >
            Resume
          </a>
        </p>
      </div>
    </section>
  )
}
