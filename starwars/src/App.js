import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Starwars from './components/Starwars';
import './App.css'; 

const App = () => {

  const [apiCallInfo, setApiCallInfo] = useState([]);
  const [apiCallError, setApiCallError] = useState("");

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log('===>',response.data.results)
        setApiCallInfo(response.data.results);
      })
      .catch(error => {
        setApiCallError("There was an error fetching data from the starwars server:", error.message);
      });
  }, []);

  return (
    <div className="App">   
      <h1 className="Header">React Wars</h1>

      { apiCallInfo.map((individualApiCallInfo) => (
        <Starwars key={individualApiCallInfo} starwarsCharacterInfo={individualApiCallInfo}/>
      ))      
      }

    </div>
  );
}

export default App;
