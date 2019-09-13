import React from "react";
import styles from "styled-components";


const FilmComponentDiv = styles.div`
    
    font-size: 22px;
    color: white; 
    font-weight: bold; 
    
`


function Film (props) {
    const { film } = props;
    return(    
        <FilmComponentDiv>{film} </FilmComponentDiv>   
        //  <p></p>
    
    )
}

export default Film;