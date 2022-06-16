import "./App.css";
import React, { Component } from "react";
import { nanoid } from "nanoid";
import Experience from "./Experience";
import Education from "./Education";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.addEducation = this.addEducation.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.handleExperienceInput = this.handleExperienceInput.bind(this);
    this.handleEducationInput = this.handleEducationInput.bind(this);
    this.handlePersonalInfoInput = this.handlePersonalInfoInput.bind(this);
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
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { experience, education } = this.state;
    console.log(this.state.personalInfo);
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
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lname"
              onChange={(e) => {
                this.handlePersonalInfoInput(e);
              }}
            />
            <input
              type="text"
              placeholder="Title"
              name="title"
              onChange={(e) => {
                this.handlePersonalInfoInput(e);
              }}
            />
            <label htmlFor="photo">Photo:</label>
            <input
              name="photo"
              type="file"
              accept="image/png, image/gif, image/jpeg"
              placeholder="Photo"
            />
            <input
              type="text"
              placeholder="Address"
              name="address"
              onChange={(e) => {
                this.handlePersonalInfoInput(e);
              }}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              onChange={(e) => {
                this.handlePersonalInfoInput(e);
              }}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => {
                this.handlePersonalInfoInput(e);
              }}
            />
            <input
              type="text"
              placeholder="Description"
              name="description"
              onChange={(e) => {
                this.handlePersonalInfoInput(e);
              }}
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
      </>
    );
  }
}

export default App;
