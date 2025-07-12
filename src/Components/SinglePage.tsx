
import About from './About';
import ContactUs from './ContactUs';

import Headers from './Headers';

import Education from './Education';
import Works from './Works';
import Skills from './Skills';




const SinglePage = () => {

return (
    <div className="App">
    <Headers/>
    <About/>
    <Skills/>
    <Education />
    <Works/>
     <ContactUs/> 
  </div>

);
}
export default SinglePage;