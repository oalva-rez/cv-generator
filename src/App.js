import "./App.css";
import React, { Component } from "react";
import { nanoid } from "nanoid";
import Experience from "./Experience";
import Education from "./Education";
import ExportPDF from "./ExportPDF";
import exampleImg from "./example-img.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.init = {
      personalInfo: {
        fname: "",
        lname: "",
        title: "",
        photo: "",
        address: "",
        phone: "",
        email: "",
        description: "",
      },
      experience: [
        {
          id: nanoid(),
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
        },
      ],
      education: [
        {
          id: nanoid(),
          university: "",
          city: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
        },
      ],
    };
    this.example = {
      personalInfo: {
        fname: "Andrea",
        lname: "Lizarraga",
        title: "Paralegal",
        photo: { exampleImg },
        address: "30 Hidden Drive",
        phone: "(858)555-5555",
        email: "andrealiz@email.com",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusamus nulla libero odit maxime a temporibus nemo. Expedita iste vero perspiciatis iusto. Eum, rerum necessitatibus.",
      },
      experience: [
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
      ],
      education: [
        {
          id: nanoid(),
          university: "Harvard University",
          city: "Cambridge, MA",
          degree: "Bachelors of Science",
          subject: "Political Science",
          from: "2012",
          to: "2016",
        },
      ],
    };
    this.state = this.init;

    this.addEducation = this.addEducation.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.handleExperienceInput = this.handleExperienceInput.bind(this);
    this.handleEducationInput = this.handleEducationInput.bind(this);
    this.handlePersonalInfoInput = this.handlePersonalInfoInput.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
    this.exampleForm = this.exampleForm.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  addEducation() {
    this.setState((prev) => {
      return {
        education: [
          ...prev.education,
          {
            id: nanoid(),
            university: "",
            city: "",
            degree: "",
            subject: "",
            from: "",
            to: "",
          },
        ],
      };
    });
  }
  addExperience() {
    this.setState((prev) => {
      return {
        experience: [
          ...prev.experience,
          {
            id: nanoid(),
            position: "",
            company: "",
            city: "",
            from: "",
            to: "",
          },
        ],
      };
    });
  }
  deleteExperience() {
    this.setState({
      experience: this.state.experience.slice(0, -1),
    });
  }
  deleteEducation() {
    this.setState({
      education: this.state.education.slice(0, -1),
    });
  }
  handleExperienceInput(e, id) {
    this.setState((prev) => {
      const newArr = prev.experience.map((exp) => {
        return exp.id === id
          ? { ...exp, [e.target.name]: e.target.value }
          : { ...exp };
      });
      return { experience: newArr };
    });
  }
  handleEducationInput(e, id) {
    this.setState((prev) => {
      const newArr = prev.education.map((edu) => {
        return edu.id === id
          ? { ...edu, [e.target.name]: e.target.value }
          : { ...edu };
      });
      return { education: newArr };
    });
  }
  handlePersonalInfoInput(e) {
    this.setState((prev) => {
      return {
        personalInfo: {
          ...prev.personalInfo,
          [e.target.name]: e.target.value,
        },
      };
    });
  }
  handleFileInput(e) {
    this.setState((prev) => {
      const objectURL = URL.createObjectURL(e.target.files[0]);
      return {
        personalInfo: {
          ...prev.personalInfo,
          [e.target.name]: objectURL,
        },
      };
    });
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  clearForm() {
    this.setState(this.init);
  }
  exampleForm() {
    this.setState(this.example);
  }
  render() {
    const { experience, education } = this.state;
    console.log("rendered", this.state.personalInfo);
    return (
      <>
        <header>
          <h1>CV GENERATOR</h1>
        </header>
        <form
          className="input--container"
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <fieldset>
            <legend>Personal Information</legend>
            <input
              type="text"
              placeholder="First Name"
              name="fname"
              onChange={(e) => {
                this.handlePersonalInfoInput(e);
              }}
              value={this.state.personalInfo.fname}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lname"
              onChange={(e) => {
                this.handlePersonalInfoInput(e);
              }}
              value={this.state.personalInfo.lname}
            />
            <input
              type="text"
              placeholder="Title"
              name="title"
              onChange={(e) => {
                this.handlePersonalInfoInput(e);
              }}
              value={this.state.personalInfo.title}
            />
            <label htmlFor="photo">Photo:</label>
            <input
              name="photo"
              type="file"
              accept="image/png, image/gif, image/jpeg"
              placeholder="Photo"
              onChange={(e) => {
                this.handleFileInput(e);
              }}
            />
            <input
              type="text"
              placeholder="Address"
              name="address"
              onChange={(e) => {
                this.handlePersonalInfoInput(e);
              }}
              value={this.state.personalInfo.address}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              onChange={(e) => {
                this.handlePersonalInfoInput(e);
              }}
              value={this.state.personalInfo.phone}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => {
                this.handlePersonalInfoInput(e);
              }}
              value={this.state.personalInfo.email}
            />
            <input
              type="text"
              placeholder="Description"
              name="description"
              onChange={(e) => {
                this.handlePersonalInfoInput(e);
              }}
              value={this.state.personalInfo.description}
            />
          </fieldset>
          <Experience
            experience={experience}
            handleExperienceInput={this.handleExperienceInput}
          />
          <button
            onClick={() => {
              this.addExperience();
            }}
          >
            Add Experience
          </button>
          <button
            onClick={() => {
              this.deleteExperience();
            }}
          >
            Delete Experience
          </button>
          <Education
            education={education}
            handleEducationInput={this.handleEducationInput}
          />
          <button
            onClick={() => {
              this.addEducation();
            }}
          >
            Add Education
          </button>
          <button
            onClick={() => {
              this.deleteEducation();
            }}
          >
            Delete Education
          </button>
        </form>
        <ExportPDF data={this.state} />
        <div className="actions">
          <button
            onClick={() => {
              this.exampleForm();
            }}
          >
            Show Example
          </button>
          <button
            onClick={() => {
              this.clearForm();
            }}
          >
            Reset
          </button>
        </div>
        <footer>Copyright &copy; 2022 Ozkar Alvarez GIT</footer>
      </>
    );
  }
}

export default App;
