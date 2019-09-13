import React from "react";
import styles from "styled-components";

const BiodataComponentDiv = styles.div`
    display: flex;
    flex-direction: column;
    font-size: 30px; 
    color: white;       
`


function Biodata (props) {
    const { biodata } = props;
    return(        
        <BiodataComponentDiv>{biodata}</BiodataComponentDiv>    
    )
}

export default Biodata;