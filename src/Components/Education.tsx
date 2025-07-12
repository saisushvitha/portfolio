import React from "react";
import resumeData from "../resumeData";

const Education = () => {
  return (
    <section id="education">
      <div className="row education-timeline">
        <div className="col-twelve education-header">
          <h2 className="headers">Education</h2>
        </div>

        <div className="col">
          <div className="timeline-wrap">
            {resumeData.educationDetails.map((education, index) => (
              <div className="timeline-block" key={index}>
                <div className="timeline-ico">
                  <i className="fa fa-graduation-cap"></i>
                </div>

                <div className="timeline-header">
                  <h3>{education.degree}</h3>
                  <p>{education.date}</p>
                </div>

                <div className="timeline-content">
                  <h4>
                    <a
                      href={education.institutionLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {education.institution}
                    </a>
                  </h4>
                  <p>{education.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;