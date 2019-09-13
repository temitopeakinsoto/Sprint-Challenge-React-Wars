import React from "react";
import styles from "styled-components";


const StarShipComponentDiv = styles.div`
    
    font-size: 22px;
    color: white; 
    font-weight: bold; 
    
`


function Starship (props) {
    const { starship } = props;
    return(        
     <StarShipComponentDiv>{starship}</StarShipComponentDiv>  
    
    )
}

export default Starship;