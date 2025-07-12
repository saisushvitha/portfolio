import React from "react";
import resumeData from "../resumeData";

const Headers = () => {
return (
  <React.Fragment>
  <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#!" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
               <li><a className="smoothscroll" href="#skills">Skills</a></li>
             <li><a className="smoothscroll" href="#education">Education</a></li>
               <li><a className="smoothscroll" href="#work">Work Experience</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline blinking-cursor">I am {resumeData.name}.</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am a {resumeData.role}.{resumeData.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank" rel="noreferrer" title={item.name}><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  } 
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
  </React.Fragment> 
);
}

export default Headers;

