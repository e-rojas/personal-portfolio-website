import React from 'react';
import "../components/blog.css"
import Header from '../components/header';
const blog = () => {
    return (
        <div className="container-fluid ">
            <Header></Header>
           <div className="row">
               <aside id="lft-blg-aside" className="col-lg-6 vh-100 "></aside>
               <aside id="rgt-blg-aside" className="col-lg-6 ">blog side</aside>
           </div>
        </div>
    );
}

export default blog;
