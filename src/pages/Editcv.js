import React, { useState } from "react";
import Template1 from "../components/Template1";
import Template2 from "../components/Template2";
import './Editcv.css';
const Editcv = () => {
  //to store form values
  const [userdata, setuserdata] = useState({
    uname: "",
    uemail: "",
    unumber: "",
    uaddress: "",
    ufb: "",
    uinsta: "",
    ugithub: "",
    uobj: "",
    uexp: "",
    uqualification: "",
  });

  //for inputs
  let name, value;
  const handleInputs = (event) => {
    name = event.target.name;
    value = event.target.value;
    setuserdata({ ...userdata, [name]: value });
  };
  //when generate cv button is clicked
  const generateCv = (event) => {
    event.preventDefault();
  
    
  };
  
  // for dynamic experience field
  const addNewExperience = (event) => {
    event.preventDefault();
    let newNode = document.createElement("textarea");

    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
  };
  // for dynamic education field
  const addNewQualification = (event) => {
    event.preventDefault();
    let newNode = document.createElement("textarea");

    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);

    let weOb = document.getElementById("uq");
    let weAddButtonOb = document.getElementById("uqAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
  };

  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center">Cv Maker</h1>
      <form>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <h3 className="mt-2 mb-2 text-center">Personal Information</h3>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                name="uname"
                className="form-control"
                id="username"
                placeholder="Enter here"
                value={userdata.uname}
                onChange={handleInputs}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                name="uemail"
                className="form-control"
                id="useremail"
                placeholder="Enter here"
                value={userdata.uemail}
                onChange={handleInputs}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="usercontact" className="form-label">
                Your Contact
              </label>
              <input
                type="number"
                name="unumber"
                className="form-control"
                id="usercontact"
                placeholder="Enter here"
                value={userdata.unumber}
                onChange={handleInputs}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="useraddress" className="form-label">
                Your Address
              </label>
              <textarea
                name="uaddress"
                className="form-control"
                id="useraddress"
                rows="3"
                value={userdata.uaddress}
                onChange={handleInputs}
              ></textarea>
            </div>
            <p className="text-secondary">Important Links</p>
            <div className="mb-3">
              <label htmlFor="userfb" className="form-label">
                Facebook
              </label>
              <input
                type="text"
                name="ufb"
                className="form-control"
                id="userfb"
                placeholder="Enter here"
                value={userdata.ufb}
                onChange={handleInputs}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userinsta" className="form-label">
                Instagram
              </label>
              <input
                type="text"
                name="uinsta"
                className="form-control"
                id="userinsta"
                placeholder="Enter here"
                value={userdata.uinsta}
                onChange={handleInputs}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="usergit" className="form-label">
                Github
              </label>
              <input
                type="text"
                name="ugithub"
                className="form-control"
                id="usergit"
                placeholder="Enter here"
                value={userdata.ugithub}
                onChange={handleInputs}
              />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <h3 className="mt-2 mb-2 text-center">Professional Information</h3>
            <div className="mb-3">
              <label htmlFor="userobj" className="form-label">
                Objective
              </label>
              <textarea
                name="uobj"
                className="form-control"
                id="userobj"
                rows="3"
                value={userdata.uobj}
                onChange={handleInputs}
              ></textarea>
            </div>
            <div className="mb-3" id="we">
              <label htmlFor="userwork" className="form-label">
                Work Experience
              </label>
              <textarea
                className="form-control weField"
                id="userwork"
                rows="3"
                name="uexp"
                value={userdata.uexp}
                onChange={handleInputs}
              ></textarea>

              <div className="text-center mb-3 mt-2" id="weAddButton">
                <button
                  onClick={addNewExperience}
                  className="btn btn-outline-dark "
                >
                  <i className="fa-solid fa-circle-plus"></i> Add More
                </button>
              </div>
            </div>

            <div className="mb-3" id="uq">
              <label htmlFor="userqualification" className="form-label">
                Qualifications
              </label>
              <textarea
                className="form-control"
                id="userqualification"
                name="uqualification"
                rows="3"
                value={userdata.uqualification}
                onChange={handleInputs}
              ></textarea>
              <div className="text-center mb-3 mt-2" id="uqAddButton">
                <button
                  onClick={addNewQualification}
                  className="btn btn-outline-dark mb-3"
                >
                  <i className="fa-solid fa-circle-plus"></i> Add More
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <button
            onClick={generateCv}
            type="submit"
            className="btn btn-dark mt-3"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="fa-solid fa-file-export"></i> Generate Cv
          </button>
          {/* for modal  */}

          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Resume Viewer
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <h1 className="text-center" >Choose the template</h1>
                  
                 <Template1  uname={userdata.uname}   />
                <Template2  uname={userdata.uname} />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    data-bs-dismiss="modal"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Editcv;
