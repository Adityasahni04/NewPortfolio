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
            <h3>Let’s Work Together!</h3>
            <p>Interested in collaborating? Reach out, and let’s build something great!</p>
                 </div>
            <div className="hirebutton"><button onClick={linkedin}>Connect Now!</button></div>
         </div>
    </div>
  )
}

export default NewComponet
