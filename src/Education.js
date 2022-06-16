import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
    this.displayEducation = this.displayEducation.bind(this);
  }
  displayEducation() {
    return this.props.education.map((edu) => {
      return (
        <fieldset key={edu.id}>
          <legend>Education</legend>
          <input
            type="text"
            placeholder="University"
            value={edu.university}
            onChange={(e) => {
              this.props.handleEducationInput(e, edu.id);
            }}
            name="university"
          />
          <input
            type="text"
            placeholder="City"
            value={edu.city}
            onChange={(e) => {
              this.props.handleEducationInput(e, edu.id);
            }}
            name="city"
          />
          <input
            type="text"
            placeholder="Degree"
            value={edu.degree}
            name="degree"
            onChange={(e) => {
              this.props.handleEducationInput(e, edu.id);
            }}
          />
          <input
            type="text"
            placeholder="Subject"
            value={edu.subject}
            name="subject"
            onChange={(e) => {
              this.props.handleEducationInput(e, edu.id);
            }}
          />
          <input
            type="text"
            placeholder="From"
            value={edu.from}
            name="from"
            onChange={(e) => {
              this.props.handleEducationInput(e, edu.id);
            }}
          />
          <input
            type="text"
            placeholder="To"
            value={edu.to}
            name="to"
            onChange={(e) => {
              this.props.handleEducationInput(e, edu.id);
            }}
          />
        </fieldset>
      );
    });
  }
  render() {
    return <div>{this.displayEducation()}</div>;
  }
}

export default Education;
