import React from "react";
import Film from "./Film";
import Species from "./Species"
import Vehicle from "./Vehicle";
import Starship from "./Starship";
import Biodata from "./Biodata";


function Starwars(props) {
    const { details } = props;
    return (
        <div>
            <Biodata />
            <Film />
            <Species />  
            <Vehicle />
            <Starship />          

        </div>
        
    )
}

export default Starwars;