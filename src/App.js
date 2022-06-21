import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./Resume.css";
import { nanoid } from "nanoid";
import Experience from "./Experience";
import Education from "./Education";
import ExportPDF from "./ExportPDF";
import exampleImg from "./example-img.jpg";

export default function App() {
  const persInfoInit = {
    fname: "",
    lname: "",
    title: "",
    photo: "",
    address: "",
    phone: "",
    email: "",
    description: "",
  };
  const [personalInfo, setPersonalInfo] = useState(persInfoInit);

  const expInit = [
    {
      id: nanoid(),
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    },
  ];
  const [experience, setExperience] = useState(expInit);

  const eduInit = [
    {
      id: nanoid(),
      university: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    },
  ];
  const [education, setEducation] = useState(eduInit);

  function addEducation() {
    setEducation((prev) => {
      return [
        ...prev,
        {
          id: nanoid(),
          university: "",
          city: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
        },
      ];
    });
  }
  function addExperience() {
    setExperience((prev) => {
      return [
        ...prev,
        {
          id: nanoid(),
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
        },
      ];
    });
  }

  function deleteExperience() {
    setExperience((prev) => {
      return prev.slice(0, -1);
    });
  }
  function deleteEducation() {
    setEducation((prev) => {
      return prev.slice(0, -1);
    });
  }

  function handleExperienceInput(e, id) {
    setExperience((prev) => {
      return prev.map((exp) => {
        return exp.id === id
          ? { ...exp, [e.target.name]: e.target.value }
          : { ...exp };
      });
    });
  }
  function handleEducationInput(e, id) {
    setEducation((prev) => {
      return prev.map((edu) => {
        return edu.id === id
          ? { ...edu, [e.target.name]: e.target.value }
          : { ...edu };
      });
    });
  }
  function handlePersonalInfoInput(e) {
    setPersonalInfo((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }
  function handleFileInput(e) {
    setPersonalInfo((prev) => {
      const objectURL = URL.createObjectURL(e.target.files[0]);
      return {
        ...prev,
        [e.target.name]: objectURL,
      };
    });
  }

  function clearForm() {
    setPersonalInfo(persInfoInit);
    setExperience(expInit);
    setEducation(eduInit);
  }
  function exampleForm() {
    setPersonalInfo({
      fname: "Andrea",
      lname: "Lizarraga",
      title: "Paralegal",
      photo: { exampleImg },
      address: "30 Hidden Drive",
      phone: "(858)555-5555",
      email: "andrealiz@email.com",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusamus nulla libero odit maxime a temporibus nemo. Expedita iste vero perspiciatis iusto. Eum, rerum necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusamus nulla libero odit maxime a temporibus nemo. Expedita iste vero perspiciatis iusto. Eum, rerum necessitatibus.",
    });
    setExperience([
      {
        id: nanoid(),
        position: "Paralegal",
        company: "Mittens Law Firm",
        city: "San Francisco",
        from: "2015",
        to: "Present",
      },
      {
        id: nanoid(),
        position: "Law Clerk",
        company: "Ritz Law",
        city: "San Francisco",
        from: "2012",
        to: "2015",
      },
      {
        id: nanoid(),
        position: "Secretary",
        company: "Shelby Finance Group",
        city: "San Diego",
        from: "2009",
        to: "2012",
      },
      {
        id: nanoid(),
        position: "Student Resource Manager",
        company: "Manchester High School",
        city: "San Diego",
        from: "2009",
        to: "2012",
      },
    ]);
    setEducation([
      {
        id: nanoid(),
        university: "Harvard University",
        city: "Cambridge, MA",
        degree: "Bachelors of Science",
        subject: "Political Science",
        from: "2012",
        to: "2016",
      },
    ]);
  }
  return (
    <>
      <header className="app--header">
        <h1>CV GENERATOR</h1>
      </header>
      <form
        className="input--container"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <fieldset>
          <legend>Personal Information</legend>
          <input
            type="text"
            placeholder="First Name"
            name="fname"
            onChange={(e) => {
              handlePersonalInfoInput(e);
            }}
            value={personalInfo.fname}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lname"
            onChange={(e) => {
              handlePersonalInfoInput(e);
            }}
            value={personalInfo.lname}
          />
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={(e) => {
              handlePersonalInfoInput(e);
            }}
            value={personalInfo.title}
          />

          <input
            type="text"
            placeholder="Address"
            name="address"
            onChange={(e) => {
              handlePersonalInfoInput(e);
            }}
            value={personalInfo.address}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            name="phone"
            onChange={(e) => {
              handlePersonalInfoInput(e);
            }}
            value={personalInfo.phone}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => {
              handlePersonalInfoInput(e);
            }}
            value={personalInfo.email}
          />
          <textarea
            cols="40"
            rows="8"
            type="text"
            placeholder="Description"
            name="description"
            onChange={(e) => {
              handlePersonalInfoInput(e);
            }}
            value={personalInfo.description}
          />
          <label htmlFor="photo" className="photo-label">
            Upload Photo
          </label>
          <input
            name="photo"
            id="photo"
            type="file"
            accept="image/png, image/gif, image/jpeg"
            placeholder="Photo"
            onChange={(e) => {
              handleFileInput(e);
            }}
          />
        </fieldset>
        <div className="exp--container">
          <Experience
            experience={experience}
            handleExperienceInput={handleExperienceInput}
          />
          <button
            onClick={() => {
              addExperience();
            }}
          >
            Add Experience
          </button>
          <button
            onClick={() => {
              deleteExperience();
            }}
          >
            Delete Experience
          </button>
        </div>
        <div className="edu--container">
          <Education
            education={education}
            handleEducationInput={handleEducationInput}
          />
          <button
            onClick={() => {
              addEducation();
            }}
          >
            Add Education
          </button>
          <button
            onClick={() => {
              deleteEducation();
            }}
          >
            Delete Education
          </button>
        </div>
      </form>
      <ExportPDF
        personalInfo={personalInfo}
        experience={experience}
        education={education}
      />
      <div className="actions">
        <button
          onClick={() => {
            exampleForm();
          }}
        >
          Show Example
        </button>
        <button
          onClick={() => {
            clearForm();
          }}
        >
          Reset
        </button>
      </div>
      <footer>Copyright &copy; 2022 Ozkar Alvarez GIT</footer>
    </>
  );
}
