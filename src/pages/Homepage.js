import React from "react";
import Template1 from "../components/Template1";
import { Link } from 'react-router-dom';
const Homepage = () => {
  return (
    <div>
     
      <div className="h-100 p-5 bg-light border rounded-3 text-center shadow">
        <h1>CV MAKER</h1>
        <p>
          Or, keep it light and add a border for some added definition to the
          boundaries of your content. Be sure to look under the hood at the
          source HTML here as we've adjusted the alignment and sizing of both
          column's content for equal-height.
        </p>
        <Link  to="/edit_cv"  className="btn btn-outline-dark">Create CV</Link> 

       
      </div>
      <div className="container-fluid m-2 p-3">
        <h1 className="text-center mb-3">Check Out Our Brand New Templates</h1>
        <div className="row ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2">
            <Template1 />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2">
            <Template1 />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2">
            <Template1 />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2">
            <Template1 />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2">
            <Template1 />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2">
            <Template1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
