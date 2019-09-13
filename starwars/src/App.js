import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Starwars from './components/Starwars';
import './App.css'; 

const App = () => {

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [apiCallInfo, setApiCallInfo] = useState([]);
  const [error, setApiCallError] = useState("");
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/?format=json")
      .then(response => {
        setApiCallInfo(response.data.results);
      })
      .catch(error => {
        setApiCallError("There was an error fetching data from the starwars server:", error.message);
      });
  }, []);


  return (
    <div className="App">   
      <h1 className="Header">React Wars</h1>
      {apiCallInfo.map((individualApiCallInfo) => (
        <Starwars peopleItem={individualApiCallInfo}/>
      ))
      
      }
    </div>
  );
}

export default App;
