import React, { useState } from 'react'
import '../Styles/ContactMe.css'
const ContactMe = () => {
  const [name,setname] = useState('');
  const [email,setemail] = useState('');
  const [message,setmessage] = useState('');

  const handleSubmission=(e)=>{
    e.preventDefault();
    console.log(name+email+message);
    setname('');
    setemail('');
    setmessage('');
  }

  return (
    <div>
      <h2 className='heading'>Get in Touch</h2>
       <div className="contactme">
        <div className="socials">
            <div className='head'>
                <h2>Let's Talk</h2>
            </div>
             <div className="middle">
             Have a project in mind or want to discuss a potential collaboration? Feel free to reach out.
             </div>
             <div className="tail">
             <p><i className="fas fa-envelope"></i>  sahniaditya951@gmail.com</p>
             <p><i className="fab fa-github"></i>  github.com/Adityasahni04</p>
             </div>
        </div>
        <div className="contactform">
            <form onSubmit={handleSubmission}>
              <label htmlFor="Name">Name</label>
              <input type="text"  value={name} onChange={(e)=>{
                setname(e.target.value)
              }}name="name" id="input" placeholder='Your Name'/>
              <label htmlFor="Email">Email</label>
              <input type="text" value={email} onChange={(e)=>{
                setemail(e.target.value)
              }}name="email" id="input" placeholder='Your Email'/>
              <label htmlFor="Message">Message</label>
              <textarea id="w3review"  value={message} onChange={(e)=>{
                setmessage(e.target.value)
              }}name="w3review" rows="4" cols="50" placeholder='Your Message'></textarea>
              <button type='submit'>Send Message</button>
            </form>
        </div>
       </div>
    </div>
  )
}

export default ContactMe
