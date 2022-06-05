import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import video from "../src/assets/videos/video.mov";
=======
import { motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import video from '../src/assets/videos/video.mp4'
>>>>>>> refs/remotes/origin/main

import Experiencia from "./components/Experiencia/Experiencia";
function App() {
  return (
    <>
<<<<<<< HEAD
      <video src={video} className="videoHome " loop autoPlay muted />
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-me" element={<Experiencia />} />
          </Routes>
        </header>
      </div>
=======
     <video src={video} className="videoHome blur" loop autoPlay muted/>
    <div className="App">
      
      <header className="App-header">
     
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-me" element={<Experiencia />} />
      </Routes>
       
      </header>

    </div>
>>>>>>> refs/remotes/origin/main
    </>
  );
}

export default App;
