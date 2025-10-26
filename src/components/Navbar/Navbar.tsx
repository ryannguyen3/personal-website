import './Navbar.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects/Experiences</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a
            href="/My Resume 2025.docx.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
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
