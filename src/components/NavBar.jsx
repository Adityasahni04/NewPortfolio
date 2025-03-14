import React, { useState } from 'react'
import '../Styles/NavBar.css'
const NavBar = () => {
const [active, setActive] = useState("Home");
  return (
    <div>
        <div className='Main'>
            <div className='leftdiv'>
                <h2>AdityaSahni</h2>
            </div>
            <div className='rightdiv'>
                <nav>
                    <a href="#" className={active==="Home" ?"active":""} onClick={()=>setActive("Home")}>Home</a>
                    <a href="#" className={active==="About" ?"active":""} onClick={()=>setActive("About")}>About</a>
                    <a href="#" className={active==="Projects" ?"active":""} onClick={()=>setActive("Projects")}>Projects</a>
                    <a href="#"className={active==="Work_With_Me" ?"active":""} onClick={()=>setActive("Work_With_Me")}>Work With Me</a>
                    <a href="#"className={active==="Contact" ?"active":""} onClick={()=>setActive("Contact")}>Contact</a>
                </nav>
            </div>
        </div>
    </div>
  )
}
export default NavBar
