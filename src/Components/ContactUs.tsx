import emailjs from 'emailjs-com';
import { SMTPClient } from "smtp-client";
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from "react-dom";
export interface FormData {
  name : string;
  email : string;
  message : string
}
const ContactUs = () => {
 
  let [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });  
  const handleChange = (event :any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked || event.target.value,
      [event.target.email]: event.target.checked || event.target.value,
      [event.target.message]: event.target.checked || event.target.value,
    });
  };

  
  const form = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted: ', formData);
    const currentForm = form.current;
    if (currentForm == null) return;
     emailjs.sendForm('service_ammjtut','template_bfmjiqt',currentForm,'yfjff5lOPPAO5RaWz').then(res => {console.log(res);}).catch(err => console.log(err));
  };


    return(
        <section id="contact">

        <h1 className="section-header">Contact Me</h1>
      
        <div className="contact-wrapper">
      
      
          <form ref={form} id="contact-form" className="form-horizontal" role="form" onSubmit={event => handleSubmit(event)} >
          {/* method="post" */}
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" id="name" placeholder="NAME" name="name"  value={formData.name}
              onChange={handleChange} required/>
              </div>
            </div>
      
            <div className="form-group">
              <div className="col-sm-12">
                <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" value={formData.email}
              onChange={handleChange} required/>
              </div>
            </div>
      
            <textarea className="form-control sizes"   rows={10} placeholder="MESSAGE" id="message" name="message" value={formData.message}
              onChange={handleChange} required></textarea>
      
            <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND" >
              <div className="alt-send-button">
                <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
              </div>
              {/* onClick={event => handleClick(event)} */}
            </button>
      
          </form>
      
       
      
          <div className="direct-contact-container">
      
            <ul className="contact-list">
              <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Halifax, Nova Scotia</span></i></li>
      
              <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-902-338-0784" title="Give me a call">(902) 338-0784</a></span></i></li>
      
              <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:saisushvitha@gmail.com" title="Send me an email">saisushvitha@gmail.com</a></span></i></li>
      
            </ul>
      
            <hr/>
           
      
            <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
      
          </div>
      
        </div>
      
      </section>
  
  
    )
}
export default ContactUs;