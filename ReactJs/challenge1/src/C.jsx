import React, { useContext } from 'react';
import {FirstName} from './App';

function C(){
    
    const n = useContext(FirstName);

    return(
        <>
        <h1>{n.name}</h1>
        </>
    );
}

export default C;

