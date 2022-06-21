import React from "react";

export default function Experience(props) {
  return props.experience.map((exp) => {
    return (
      <fieldset key={exp.id}>
        <legend>Experience</legend>
        <input
          type="text"
          placeholder="Position"
          value={exp.position}
          onChange={(e) => {
            props.handleExperienceInput(e, exp.id);
          }}
          name="position"
        />
        <input
          type="text"
          placeholder="Company"
          value={exp.company}
          onChange={(e) => {
            props.handleExperienceInput(e, exp.id);
          }}
          name="company"
        />
        <input
          type="text"
          placeholder="City"
          value={exp.city}
          name="city"
          onChange={(e) => {
            props.handleExperienceInput(e, exp.id);
          }}
        />
        <input
          type="text"
          placeholder="From"
          value={exp.from}
          name="from"
          onChange={(e) => {
            props.handleExperienceInput(e, exp.id);
          }}
        />
        <input
          type="text"
          placeholder="To"
          value={exp.to}
          name="to"
          onChange={(e) => {
            props.handleExperienceInput(e, exp.id);
          }}
        />
      </fieldset>
    );
  });
}
