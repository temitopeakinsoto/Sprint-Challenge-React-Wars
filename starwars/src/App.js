import React from 'react';
import axios from 'axios';
import Starwars from './components/Starwars';
import './App.css'; 

const App = () => {

  axios.get('https://swapi.co/api/people')
  .then((response) => {
    console.log('this response', response.data)
  })
  .catch()
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">   
      <h1 className="Header">React Wars</h1>
      <Starwars />
    </div>
  );
}

export default App;
