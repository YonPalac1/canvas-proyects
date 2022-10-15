import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Circle from './pages/circlesOnClick/Circle';
import Particles from './pages/particles/Particles';
import Circlesonmouse from './pages/circlesOnMouse/CirclesOnMouse';
import Fire from './pages/fire/Fire';
import MoveBurbles from './pages/moveBurbless/MoveBurbles';
import Pixels from './pages/Pixels/Pixels';
import NavBar from './commons/NavBar';

const App = () => {

  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path="/" element={<Particles />}></Route>
        <Route path="/Circle" element={<Circle />}></Route>
        <Route path="/Circlesonmouse" element={<Circlesonmouse />}></Route>
        <Route path="/Fire" element={<Fire />}></Route>
        <Route path="/MoveBurbles" element={<MoveBurbles />}></Route>
        <Route path="/Pixels" element={<Pixels />}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
