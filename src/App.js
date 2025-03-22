import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import ProjectsSDG from './pages/projects';
import Mentors from './pages/mentors';
import Collaborators from './pages/collaborators';
import Videos from './pages/videos';
import Gallery from './pages/gallery';
import Contact from './pages/contact';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/sdg-:id" element={<ProjectsSDG />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/collaborators" element={<Collaborators />} />
            <Route path="/media/videos" element={<Videos />} />
            <Route path="/media/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
