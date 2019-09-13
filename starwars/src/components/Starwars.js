import React from "react";
import Film from "./Film";
import Species from "./Species"
import Vehicle from "./Vehicle";
import Starship from "./Starship";
import Biodata from "./Biodata";
import styles from "styled-components";

const FilmComponentDiv = styles.div`
    height: 100px;
    width: 100px;
    background-color: red;
`


function Starwars(props) {
    const { films, species, vehicles, starships } = props;
    return (
        <div>
            <div>
                <Biodata />
            </div>
            <FilmComponentDiv>
                <Film />
            </FilmComponentDiv>
            <div>
                <Species />
            </div>
            <div>
                <Vehicle />
            </div>  
            <div>
                <Starship /> 
            </div>
        </div>
        
    )
}

export default Starwars;