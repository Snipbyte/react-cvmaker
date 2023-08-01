import React from "react";
import DownloadPdf from "./DownloadPdf";
import "./Template1.css";
const Template1 = (props) => {
  return (
    <>
      <div className="row border m-1 template" id="template1">
        <div className="col-5 col-sm-5 col-md-4 col-lg-4 col-xl-4  bg-dark text-white">
          <h5 className="mt-2" id="namet1">
            {props.uname === "" || props.uname === null
              ? "User Name"
              : props.uname}
          </h5>
          <p>Profession Here</p>
          <hr />
          <h5>
            <b>Professional Info</b>
          </h5>
          <p>Profession Here</p>
          <p>Profession Here</p>
          <p>Profession Here</p>
          <p>Profession Here</p>
          <hr />
          <div className="mb-2">
            <h5>
              <b>Skills</b>
            </h5>
            <p className="mt-2">Skill 1</p>
            <div className="progress">
              <div
                className="progress-bar bg-success progress-bar-1"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="mt-2">Skill 2</p>
            <div className="progress">
              <div
                className="progress-bar bg-info progress-bar-2"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="mt-2">Skill 3</p>
            <div className="progress">
              <div
                className="progress-bar bg-warning progress-bar-3"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="mt-2">Skill 4</p>
            <div className="progress">
              <div
                className="progress-bar bg-success progress-bar-4"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <div className="col-7 col-sm-7 col-md-8 col-lg-8 col-xl-8 ">
          <div className="basic-info m-2">
            <p>
              {" "}
              Or, keep it light and add a border for some added definition to
              the boundaries of your content. Be sure to look under the hood at
              the source HTML here as we've{" "}
            </p>
          </div>

          <div className="experience m-2">
            <h5>Work Experience</h5>
            <hr />
            <div className="mb-2">
              <h6 className="text-center">Experience 1</h6>
              <p>
                Or, keep it light and add a border for some added definition to
                the boundaries of your content. Be sure to look under the hood
                at the source HTML here as we've
              </p>
            </div>
            <div className="mb-2">
              <h6 className="text-center">Experience 2</h6>
              <p>
                Or, keep it light and add a border for some added definition to
                the boundaries of your content. Be sure to look under the hood
                at the source HTML here as we've
              </p>
            </div>
            <div className="mb-2">
              <h6 className="text-center">Experience 3</h6>
              <p>
                Or, keep it light and add a border for some added definition to
                the boundaries of your content. Be sure to look under the hood
                at the source HTML here as we've
              </p>
            </div>
            <div className="mb-2">
              <h6 className="text-center">Experience 4</h6>
              <p>
                Or, keep it light and add a border for some added definition to
                the boundaries of your content. Be sure to look under the hood
                at the source HTML here as we've
              </p>
            </div>
          </div>
        </div>
      </div>

      <DownloadPdf pdfcontent={"template1"}/>
    </>
  );
};

export default Template1;
