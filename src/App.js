import './App.css'
import React from 'react';
import Nav from './components/Nav';
import Info from './components/Info';
import Home from './components/Home';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { BrowserRouter , Route , Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="info" element={<Info />} />
        </Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
