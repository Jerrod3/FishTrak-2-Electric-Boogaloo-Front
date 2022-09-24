import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import  Fishermen  from './Pages/Fishermen';
import Lures from './Pages/Lures';
import WaterBodies from './Pages/WaterBodies';
import Species from './Pages/Species';
import CaughtFish from './Pages/CaughtFish';
import {render} from "react-dom"


const rootElement  = document.getElementById('root');
render(
<BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
      <Route path='Fishermen' element={<Fishermen />} />
      <Route path='Lures' element={<Lures />} />
      <Route path='WaterBodies' element={<WaterBodies />} />
      <Route path='Species' element={<Species />} />
      <Route path='CaughtFish' element={<CaughtFish />} />
  </Routes>
  <App />
</BrowserRouter>,
rootElement
);

