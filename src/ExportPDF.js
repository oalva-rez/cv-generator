import React, { Component } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import emptyAvatar from "./empty-avatar.png";
import exampleImg from "./example-img.jpg";

export default class ExportPDF extends Component {
  printDocument() {
    const input = document.getElementById("cv-letter");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("download.pdf");
    });
  }

  render() {
    const { personalInfo, experience, education } = this.props.data;
    let photo;
    if (personalInfo.fname === "Andrea") {
      photo = "example";
    } else if (personalInfo.photo === "") {
      photo = "empty";
    } else if (!personalInfo.fname === "Andrea" && !personalInfo.photo === "") {
      photo = "filled";
    }
    console.log(photo);
    return (
      <div className="resume-export">
        <div className="mb5"></div>
        <div
          id="cv-letter"
          className="mt4"
          style={{
            backgroundColor: "#f5f5f5",
            width: "210mm",
            minHeight: "297mm",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <header>
            <h1>
              {personalInfo.fname} {personalInfo.lname}
            </h1>
            <h2>{personalInfo.title}</h2>
          </header>
          <section className="main-container">
            <div className="desc">
              <h3>Description</h3>
              <p>{personalInfo.description}</p>
            </div>
            <div className="experience">
              <h3>Experience</h3>
              {experience.map((exp) => {
                return (
                  <div className="job" key={exp.id}>
                    <h4>
                      {exp.from} - {exp.to}
                    </h4>
                    <h4>{exp.position}</h4>
                    <p>
                      {exp.company} {exp.city}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="education">
              <h3>Education</h3>
              {education.map((edu) => {
                return (
                  <div className="edu" key={edu.id}>
                    <h4>
                      {edu.from} - {edu.to}
                    </h4>
                    <h4>
                      {edu.university} {edu.city}
                    </h4>
                    <p>Degree: {edu.degree}</p>
                    <p>Subject: {edu.subject}</p>
                  </div>
                );
              })}
            </div>
          </section>
          <aside className="personal-details">
            {photo === "example" && <img src={exampleImg} alt="example" />}
            {photo === "empty" && <img src={emptyAvatar} alt="empty avatar" />}
            {photo === "filled" && <img src={personalInfo.photo} alt="user" />}

            <h3>Personal Details</h3>
            <h4>Address</h4>
            <p>{personalInfo.address}</p>
            <h4>Phone Number</h4>
            <p>{personalInfo.phone}</p>
            <h4>Email</h4>
            <p>{personalInfo.email}</p>
          </aside>
        </div>
        <button
          onClick={() => {
            this.printDocument();
          }}
        >
          Download PDF
        </button>
      </div>
    );
  }
}
