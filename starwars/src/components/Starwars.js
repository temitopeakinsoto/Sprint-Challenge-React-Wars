import React from "react";
import Film from "./Film";
import Species from "./Species"
import Vehicle from "./Vehicle";
import Starship from "./Starship";


function Starwars(props) {
    const { details } = props;
    return (
        <div>
            <div><span>Name: </span> "tope"</div>
            <Film />
            <Species />  
            <Vehicle />
            <Starship />          

        </div>
        
    )
}

export default Starwars;