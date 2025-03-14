import React from 'react'
import './Styles/App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Home/>
      <AboutMe/>
    </div>
  )
}

export default App
