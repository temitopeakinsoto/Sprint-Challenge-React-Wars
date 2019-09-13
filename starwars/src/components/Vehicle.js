import React from "react";
import styles from "styled-components";

const VehicleComponentDiv = styles.div`
   
    font-size: 22px;
    color: white;
    font-weight: bold; 
    
`

function Vehicle (props) {
    const { vehicle } = props;
    return(
        <VehicleComponentDiv>{vehicle}</VehicleComponentDiv>
    )
}

export default Vehicle;