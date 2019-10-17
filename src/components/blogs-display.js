import React from 'react';

import profile from '../images/bg.png'
const blogDisplay = () => {
   
    return (
        <div className="card">
            <div className="row">
                <div className="col-4">
                <img style={{width:150,height:150}} src={profile} className="img-thumbnail" alt="profile"></img>
                    <span>Scheduler</span>
              
              </div>
              <div className="col-8">
               
                <i className="fab fa-react"></i> <i className="fab fa-node"></i>
                <i className="fab fa-js-square"></i>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>
                  Single-page app built on React.js that allows users to book,
                  edit or cancel interviews for each day of the week.
                </p>
              </div>
            </div>
          </div>
    );
}



export default blogDisplay;
