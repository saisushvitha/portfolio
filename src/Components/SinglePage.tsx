import React from 'react';
import resumeData from '../resumeData';
import About from './About';
import ContactUs from './ContactUs';
import Footers from './Footers';
import Headers from './Headers';
import Resume from './Education';
import Education from './Education';
import Works from './Works';
import Skills from './Skills';
import Testimonials from './Testimonials';



const SinglePage = () => {

return (
    <div className="App">
    <Headers/>
    <About resumeData = {resumeData}/>
    <Skills></Skills>
    <Education resumeData = {resumeData} />
    <Works></Works>
     {/* <Testimonials></Testimonials>    */}
     <ContactUs/> 
    {/* <Footers/>  */}
  </div>

);
}
export default SinglePage;