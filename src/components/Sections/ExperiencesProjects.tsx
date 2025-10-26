import './Sections.css'
// import { FaGithub, FaGlobe, FaCode } from 'react-icons/fa' // optional icon placeholders

function ExperiencesProjects() {
  return (
    <section id="projects" className="section projects-section">
      <h2>Projects & Experience</h2>

      <div className="projects-grid">

        {/* 🌐 Personal Portfolio Website */}
        <div className="project-card fade-in">
          {/* <FaGlobe className="project-icon" /> */}
          <h3>Personal Portfolio Website</h3>
          <p className="tech">React · TypeScript · Vite · CSS</p>
          <p>
            Designed and developed a responsive personal portfolio website using React and Vite.
            Implemented reusable components for a clean structure, optimized for accessibility, 
            and deployed via GitHub Pages to showcase my projects and experience.
          </p>
        </div>

        {/* 🧠 RemoteRide Project */}
        <div className="project-card fade-in">
          {/* <FaCar className="project-icon" /> */}
          <h3>RemoteRide</h3>
          <p className="tech">ESP32 · C++ · HTML · CSS · JavaScript</p>
          <p>
            Collaborated in a team of 3 to build a battery-powered toy car controlled via ESP32
            with a custom web interface for real-time motor and servo control. Implemented live tracking
            and finger-based movement control for an interactive driving experience.
          </p>
        </div>

        {/* 💻 UKart Project */}
        <div className="project-card fade-in">
          {/* <FaShoppingCart className="project-icon" /> */}
          <h3>UKart</h3>
          <p className="tech">Node.js · Express.js · SQLite · Sequelize · CSS</p>
          <p>
            Led a team of 6 to develop a full-stack marketplace platform for college students to
            securely buy, sell, and exchange goods. Designed database models with Sequelize and implemented
            item listings, user profiles, and verification features.
          </p>
        </div>

        {/* 🏎️ F1 Nab Project */}
        <div className="project-card fade-in">
          {/* <FaRobot className="project-icon" /> */}
          <h3>F1 Nab</h3>
          <p className="tech">Python · React · Node.js · Pinecone · RAG · SQLite · Flask</p>
          <p>
            Built a web app embedding F1 TV streams with a real-time chat assistant that explains race
            strategy, terminology, and updates. Integrated Ergast API data, Pinecone embeddings, and Gemini API
            for fast, context-aware insights.
          </p>
        </div>

        {/* 🎮 Mafia Project */}
        <div className="project-card fade-in">
          {/* <FaGamepad className="project-icon" /> */}
          <h3>Mafia</h3>
          <p className="tech">Python · Jupyter Notebook · OpenAI API</p>
          <p>
            Collaborated in a team of 3 to create an AI-driven Mafia game with OpenAI’s language models.
            Implemented RESTful API calls enabling dynamic, real-time storytelling and adaptive player interactions.
          </p>
        </div>

        {/* 🏫 UMass TA Experience */}
        <div className="project-card fade-in">
          {/* <FaChalkboardTeacher className="project-icon" /> */}
          <h3>Undergraduate Course Assistant & CS Tutor</h3>
          <p className="tech">C · Unix/Linux · Pedagogy · Algorithms</p>
          <p>
            Assisted 670+ students across multiple courses, holding office hours, leading workshops,
            and helping students grasp core concepts in C programming and algorithms. Designed learning sessions
            to simplify complex technical material.
          </p>
        </div>

        {/* 🏪 Gamestop Experience */}
        <div className="project-card fade-in">
          {/* <FaStore className="project-icon" /> */}
          <h3>Gamestop — Retail Keyholder</h3>
          <p className="tech">Customer Service · Operations · Inventory</p>
          <p>
            Managed daily store operations, processing 150+ weekly transactions and ensuring precise
            cash handling. Audited inventory across 15 aisles weekly, identifying and resolving stock
            discrepancies within 24 hours.
          </p>
        </div>

      </div>
    </section>
  )
}

export default ExperiencesProjects
