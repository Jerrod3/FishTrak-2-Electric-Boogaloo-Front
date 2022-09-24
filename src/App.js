import logo from './logo.svg';
import './App.css';
import { async } from 'q';
import React from 'react';
import { Link } from "react-router-dom"





//const axios = require('axios').default;


export default function App() {

/** const addFisherman = async () => {
  const res = await axios({
    method: 'post',
    url: 'http://fishtrakapi.lucasjensen.me/fish',
    data: {
      first: 'Fred',
      last: 'Flintstone',
      email: 'TacoMan@Burrito.com'
    }
  })
  console.log('hi');
        
};

const getFisherman = async () => {
  const res = await axios({
    method: 'get',
    url: 'http://fishtrakapi.lucasjensen.me/fishermen/',
  })
  console.log(res);
};
**/ 
  return (
    <main>
      <h1>Waddup</h1>
      <nav>
        <Link to="/Fishermen">Check out the fishermen!</Link>
        <Link to="/Lures">See what lures have been used!</Link>
        <Link to="/Species">Check out the fishermen!</Link>
        <Link to="/CaughtFish">Check out the fishermen!</Link>
        <Link to="/WaterBodies">Check out the fishermen!</Link>
      </nav>
    </main>
  );
}
