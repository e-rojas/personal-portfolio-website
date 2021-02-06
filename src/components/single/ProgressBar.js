import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ProgressBar({ icon, color ,speed}) {
  
  return (
    <div className="row ">
      <div style={{ fontSize: "22px" }} className="col-2 ">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="col-10 d-flex flex-column justify-content-center ">
        <div className="progress  " style={{ height: 10 }}>
          <div
            className={`progress-bar ${color ? color : "bg-secondary"} `}
            role="progressbar"
            style={{ height: 10, width: speed }}
            aria-valuenow={30}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>
    </div>
  )
}

/*  <div>
      <span>{title} </span>
      <i class={`fab ${icon}`}></i>
      <div className="progress mt-3" style={{ height: 10 }}>
        <div
          className="progress-bar bg-secondary"
          role="progressbar"
          style={{ height: 10, width: "80%" }}
          aria-valuenow={0}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div> */
