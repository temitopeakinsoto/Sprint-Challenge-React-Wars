import React from "react";
import Film from "./Film";
import Species from "./Species"


function Starwars(props) {
    const { details } = props;
    return (
        <div>
            <div><span>Name: </span> "tope"</div>
            <Film />
            <Species />            

        </div>
        
    )
}

export default Starwars;