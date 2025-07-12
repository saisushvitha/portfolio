import Chart from "react-google-charts";
import resumeData from "../resumeData";

const About = () =>{
  
    return(
   
<section id="about">
        <div className="container mt-4 pt-4">
            <h1 className="text-center main-col">About Me</h1>
            <div className="row mt-4">
                <div className="col-lg-4">
                    <img src="images/profilepic.jpg" className= "imageAboutPage" alt=""/>
                </div>
<div className="col-lg-8">
      <p>
          {
               resumeData.aboutme
             }
      </p>

                    <div className="row mt-3 placement">
                    <a href={require("../assets/files/resume.pdf")} download="Sai_Sushvita_Chamarty_Resume"><button>Hire me</button></a>
                    </div>
                </div>
            </div>
            </div>
    </section>

    );
}

export default About;

