import React from "react"
import portrait from "../images/portrait.png"

export default () => {
  return (
    <section className="about">
      <div className="row">
        <div className="col text-center">
          <h4 className="font-weight-bold">ABOUT</h4>
        </div>
      </div>
      <div className="row p-3">
        <div className="col cntr about-img-col">
          <img src={portrait} alt="portrait" />
        </div>
        <div className="col cntr  about-details-col">
          <div>
            <h4 className="font-weight-bold details">Personal Details</h4>
            <span className="pers-details">
              I’m Edgar Rojas. Creative art director turned web developer. After
              working many years in the beauty industry my passion for
              creativity comes into the world of web development. Learning
              Javascript to create small animation on web pages was my first
              step into web development. Being part of a group to develop a
              project is the key to success on how we can come togehter with
              code and create the most innovative sites based out of imagination
              and creativity. I am always keen on learning new technologies as
              well as getting to know other incredible developers around the
              world. Thanks for visiting my site and drop me a line or two via
              email to chat about coding. Cheers!{" "}
            </span>
            <br />
            <span className="font-weight-bolder">Edgar Rojas</span>
            <table className="table mt-3 text-center">
              <tbody>
                <tr>
                  <td>
                    <a href="mailto:contact@test.com">
                      <i className="far fa-envelope"></i>
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://github.com/javascript01fan?tab=repositories"
                      rel="noopener noreferrer"
                    target="_blank"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </td>
                  <td>
                    <i className="fab fa-linkedin-in"></i>
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              className="btn btn-danger"
              type="button"
              data-toggle="modal"
              data-target=".bd-example-modal-xl"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
