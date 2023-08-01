import React from "react";
import jsPDF from "jspdf";

const DownloadPdf = (props) => {
  const generatePdf = () => {
    let content = props.pdfcontent; // to get the id of resume templates

    let doc = new jsPDF("p", "pt", "a2");
    doc.html(document.querySelector("#" + content), {
      callback: function (pdf) {
        pdf.save("mypdf.pdf");
      },
    });
  };

  return (
    <div className="d-flex justify-content-end mb-3 mt-3 ">
      <button type="button" onClick={generatePdf} className="btn btn-dark">
        <i className="fa-solid fa-download"></i> Download Resume
      </button>
    </div>
  );
};

export default DownloadPdf;
