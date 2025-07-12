import React from "react";
import resumeData from "../resumeData"; // Assuming workDetails is exported from resumeData

const Works = () => {
  return (
    <section id="work">
      <div className="row work-timeline">
        <div className="col-twelve work-header">
          <h2 className="headers">Work Experience</h2>
        </div>

        <div className="col">
          <div className="timeline-wrap">
            {resumeData.workDetails.map((work, index) => (
              <div className="timeline-block" key={index}>
                <div className="timeline-ico">
                  <i className="fa fa-briefcase"></i>
                </div>

                <div className="timeline-header">
                  <h3>{work.title}</h3>
                  <p>{work.date}</p>
                </div>

                <div className="timeline-content">
                  <h4>
                    <a
                      href={work.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {work.company}
                    </a>
                  </h4>
                  <p>{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;