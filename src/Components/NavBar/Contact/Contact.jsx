import React from 'react'
import './Contact.css'
import theme_pattern from '../../../assets/theme_pattern.svg'
import mail_icon from '../../../assets/mail_icon.svg'
import call_icon from '../../../assets/call_icon.svg'
import location_icon from '../../../assets/location_icon.svg'
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "469b2e41-6639-4824-9bde-e11a9620a12d");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
    return (
    <div id="contact" className="contact">
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Have a project you'd like to discuss?
                Want to collaborate on something cool?
                </p>
                
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>suhani9620@gmail.com</p>
                        
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /> <p>9993651979</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>Gail Vijaipur , Guna , Madhya Pradesh</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="name">Your Name </label>
                <input type="text"  placeholder='Enter your name' name='name' required />

                <label htmlFor="email">Your Email </label>
                <input type="text"  placeholder='Enter your email' name='email' required />

                <label htmlFor="message"> Write your message here</label>
                <textarea name="message"  rows="10" placeholder='Enter your message' ></textarea>
                <button  type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact