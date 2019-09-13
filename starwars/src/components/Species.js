import React from "react";
import styles from "styled-components";


const SpeciesComponentDiv = styles.div`
   
    font-size: 22px;
    color: white; 
    font-weight: bold; 
    
`

function Species (props) {
    const { eachSpecies } = props;
    return(        
         <SpeciesComponentDiv>{eachSpecies}</SpeciesComponentDiv>  
    )
}

export default Species;