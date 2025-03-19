import React from 'react'
import '../Styles/Home.css'
const Home = () => {
  return (
    <div className='home'>
    <div className="content">
       <h2>Hi!</h2>
       <div className="Introduction">
       <h1>I am</h1>
       <h1>Aditya Sahni</h1>
       </div>
      <div className="Roles">
      <p>Web Developer</p>
       <p>UI Designer</p>
       <p>Freelancer</p>
      </div>
      {/* <div className="buttons-home"> */}
      <button className='button' onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
       View My Works
      </button>
      {/* <button className='button' onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
       DownLoad CV
      </button> */}
      {/* </div> */}
     
    </div>
      

    </div>
  )
}

export default Home
