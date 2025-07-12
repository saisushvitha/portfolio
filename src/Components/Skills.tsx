import React from "react";
import resumeData from "../resumeData";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h1 className="text-center service-tn">Skills</h1>
        <div className="row">
          {resumeData.skillsDetails.map((skill, index) => (
            <div className="col-lg-4 mt-4" key={index}>
              <div className="card servicesText">
                <div className="card-header">
                  <i className={skill.icon}></i>
                  <h4 className="card-title mt-3">{skill.title}</h4>
                </div>
                <div className="card-body">
                  <p className="card-text mt-3">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
    </section>
  );
};

export default Skills;