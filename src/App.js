import "./App.css";
import React, { Component } from "react";
import { nanoid } from "nanoid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {
        fname: "",
        lname: "",
        photo: "",
        address: "",
        phone: "",
        email: "",
        description: "",
      },
      experience: [
        {
          position: "a",
          company: "",
          city: "",
          from: "",
          to: "",
        },
        {
          position: "b",
          company: "",
          city: "",
          from: "",
          to: "",
        },
        {
          position: "c",
          company: "",
          city: "",
          from: "",
          to: "",
        },
      ],
      education: [
        {
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
  }

  addEducation() {
    this.setState((prev) => {
      return {
        education: [
          ...prev.education,
          {
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
  handleSubmit(e) {
    e.preventDefault();
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

  addExperience() {
    this.setState((prev) => {
      return {
        experience: [
          ...prev.experience,
          {
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
  render() {
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
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Title" />
            <label htmlFor="photo">Photo:</label>
            <input
              name="photo"
              type="file"
              accept="image/png, image/gif, image/jpeg"
              placeholder="Photo"
            />
            <input type="text" placeholder="Address" />
            <input type="tel" placeholder="Phone Number" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Description" />
          </fieldset>
          {/* <Experience /> */}
          <button
            onClick={() => {
              this.deleteExperience();
            }}
          >
            Delete
          </button>
        </form>
      </>
    );
  }
}

export default App;
