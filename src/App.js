import './App.css';
import { Routes, Route } from 'react-router-dom'
import Me from './components/me/me'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'
import Sidenav from './components/sidenav/sidenav'
import Skills from './components/skills/skills'


function App() {
  return (
    <>
      <div className="flex flex-row bg-gray-800 text-white">
        <div className="w-2/12">
          <Sidenav/>
          <p>Ola</p>
        </div>
        <div className="w-10/12 bg-image bg-cover">
          <div className="h-screen bg-fixed bg-center bg-black bg-opacity-70">
            <Routes>
              <Route path="/" element={<Me />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="skills" element={<Skills />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
