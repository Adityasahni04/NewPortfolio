import React from 'react'
import './Styles/App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Why_work_with_me from './components/Why_work_with_me'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Home/>
      <AboutMe/>
      <Why_work_with_me/>
    </div>
  )
}

export default App
