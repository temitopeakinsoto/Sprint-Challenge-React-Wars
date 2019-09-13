import React from "react";
import styles from "styled-components";

const BiodataComponentDiv = styles.div`
    display: flex;
    flex-direction: column;
    font-size: 30px;
    width: 100%;
    color: white; 
        
`


function Biodata (props) {
    const { starwarsActorBiodata } = props;
    return(        
        <BiodataComponentDiv>
            <h1>{starwarsActorBiodata.name}</h1>
            <p>{`HEIGHT: ${starwarsActorBiodata.height}cm`}</p>
            <p>{`WEIGHT: ${starwarsActorBiodata.mass}Kg`}</p>
            <p>{`BIRTH YEAR: ${starwarsActorBiodata["birth_year"]}`}</p>
            <p>{`EYE COLOR: ${starwarsActorBiodata["eye_color"]}`}</p>
        </BiodataComponentDiv>    
    )
}

export default Biodata;