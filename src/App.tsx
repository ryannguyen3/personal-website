import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/Sections/About'
import ExperiencesProjects from './components/Sections/ExperiencesProjects'
import Intro from './components/Sections/Intro'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Intro></Intro>
        <About></About>
        <ExperiencesProjects></ExperiencesProjects>
      </main>
    </div>
  )
}

export default App
