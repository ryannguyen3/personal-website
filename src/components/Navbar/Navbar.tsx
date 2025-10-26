import './Navbar.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#About">About</a></li>
        <li><a href="#projects">Projects/Experiences</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a className="resume-btn" href="/resume.pdf" target="_blank">Resume</a></li>
      </ul>

      <ul className="nav-icons">
        <li><a href="mailto:rqnguyen@umass.edu"><FaEnvelope /></a></li>
        <li><a href="https://github.com/ryannguyen3" target="_blank"><FaGithub /></a></li>
        <li><a href="https://www.linkedin.com/in/ryan-nguyen2/" target="_blank"><FaLinkedin /></a></li>
      </ul>
    </nav>
  )
}

export default Navbar
