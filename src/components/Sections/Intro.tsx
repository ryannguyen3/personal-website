import './Sections.css'
import profilePic from '../../assets/apple-ai.gif' // <-- path to your image

function Intro() {
  return (
    <section id="intro" className="section intro-section">
      <div className="content">
        <h1>Hi! I'm Ryan Nguyen</h1>
        <p>Welcome to my page! </p>
        <p>*Find a pic of urself before finalizing plz*</p>
        <img src={profilePic} alt="Ryan Nguyen" className="profile-img" />
      </div>
    </section>
  )
}

export default Intro
