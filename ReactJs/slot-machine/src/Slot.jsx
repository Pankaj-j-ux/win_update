import React from 'react';

function Slot(props){
    
    if((props.a == props.b) && (props.b == props.c)){
        var msg = "THIS IS MATCHING.";
    }else {
        var msg = "THIS ISN'T MATCHING.";
    }

    return(
        <>
        <div>
            <h1>{props.a} {props.b} {props.c}</h1>
            <div>{msg}</div>
            <hr/>
        </div>
        </>
    );
}

export default Slot