
import About from './About';
import ContactUs from './ContactUs';

import Headers from './Headers';

import Education from './Education';
import Works from './Works';
import Skills from './Skills';
import Certifications from './Certifications';




const SinglePage = () => {

return (
    <div className="App">
    <Headers/>
    <About/>
    <Skills/>
    <Certifications/>
    <Education />
    <Works/>
     <ContactUs/> 
  </div>

);
}
export default SinglePage;