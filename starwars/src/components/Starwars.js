import React from "react";
import Biodata from "./Biodata";
import styles from "styled-components";

  
const ComponentsContainer = styles.div`
    display: flex;
    flex-direction: column;    
    margin: 5px auto;
    padding: 5px 0;
    border: 2px solid gray;
    background-color: black;
    opacity: 0.4;
    width: 600px;
    height: 500px;
`

function Starwars(props) {

    const { starwarsCharacterInfo } = props;

    return (
        <ComponentsContainer>            
            <Biodata starwarsActorBiodata={starwarsCharacterInfo}/>                        
        </ComponentsContainer>        
    )
}

export default Starwars;