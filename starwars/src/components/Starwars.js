import React from "react";
import Film from "./Film";
import Species from "./Species"
import Vehicle from "./Vehicle";
import Starship from "./Starship";
import Biodata from "./Biodata";
import styles from "styled-components";

  
const ComponentsContainer = styles.div`
    display: flex;
    flex-direction: column;    
    margin: 5px auto;
    border: 2px solid gray;
    background-color: black;
    opacity: 0.4;
    margin-bottom;
    width: 400px;
    height: 150px;

`
function Starwars(props) {
    const { peopleItem } = props;
    return (
        <ComponentsContainer>            
            <Biodata biodata={peopleItem.name}/>
            <Film film={peopleItem.films[0]}/>           
            <Species eachSpecies={peopleItem.species[0]}/>          
            <Vehicle vehicle={peopleItem.starships[0]} />
            <Starship starship={peopleItem.starships[0]} />             
        </ComponentsContainer>
        
    )
}

export default Starwars;