import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.displayExperience = this.displayExperience.bind(this);
  }
  displayExperience() {
    return this.props.experience.map((exp) => {
      return (
        <fieldset key={exp.id}>
          <legend>Experience</legend>
          <input
            type="text"
            placeholder="Position"
            value={exp.position}
            onChange={(e) => {
              this.props.handleExperienceInput(e, exp.id);
            }}
            name="position"
          />
          <input
            type="text"
            placeholder="Company"
            value={exp.company}
            onChange={(e) => {
              this.props.handleExperienceInput(e, exp.id);
            }}
            name="company"
          />
          <input
            type="text"
            placeholder="City"
            value={exp.city}
            name="city"
            onChange={(e) => {
              this.props.handleExperienceInput(e, exp.id);
            }}
          />
          <input
            type="text"
            placeholder="From"
            value={exp.from}
            name="from"
            onChange={(e) => {
              this.props.handleExperienceInput(e, exp.id);
            }}
          />
          <input
            type="text"
            placeholder="To"
            value={exp.to}
            name="to"
            onChange={(e) => {
              this.props.handleExperienceInput(e, exp.id);
            }}
          />
        </fieldset>
      );
    });
  }
  render() {
    return <div>{this.displayExperience()}</div>;
  }
}

export default Experience;
