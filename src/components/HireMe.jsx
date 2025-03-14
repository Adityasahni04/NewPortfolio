import React from 'react'
import '../Styles/HireMe.css'
const NewComponet = () => {
const linkedin=()=>{
    window.open(
        "https://www.linkedin.com/in/adityasahni04/",
        "_blank"
      );
} 
  return (
    <div className='newcomponet'>
         <div className="hireme">
            <div className="text">
                 <h3>Want to work with me </h3>
                 <p>Always feel Free to Contact & Hire me</p>
                 </div>
            <div className="hirebutton"><button onClick={linkedin}>Hire Me!</button></div>
         </div>
    </div>
  )
}

export default NewComponet
