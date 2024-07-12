// create functional component accept two props: 

//import react:
import React from 'react';

//create Greeting function:
function Greet1 ({name , message}) {
    return (
        <div>
            <h1>Hi, {name} </h1>
            <p>{message}</p>
        </div>
    );
};
export default Greet1;


