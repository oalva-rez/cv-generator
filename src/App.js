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
          position: "",
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
      <div>
        <button
          onClick={() => {
            this.addExperience();
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default App;
