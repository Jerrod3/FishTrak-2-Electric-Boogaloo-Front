import logo from './logo.svg';
import './App.css';
import { async } from 'q';
import React from 'react';
import { Link } from "react-router-dom"
import Box from '@mui/material/Box'
import { Container } from '@mui/system';





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
    <div>
    <Container maxWidth='sm'>
      <h1>Hello</h1>
      <h1>Waddup</h1>
      <h2>E</h2>
    </Container>
    <div>
      <Container>
        <nav>
          <Link to="/Fishermen">Check out the fishermen!</Link>
          <Link to="/Lures">See what lures have been used!</Link>
          <Link to="/Species">Check out the fishermen!</Link>
          <Link to="/CaughtFish">Check out the fishermen!</Link>
          <Link to="/WaterBodies">Check out the fishermen!</Link>
        </nav>
      </Container>
    </div>
    </div>
  );
}
