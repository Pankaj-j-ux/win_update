import React, { createContext } from 'react';
import './index.css';
import A from './A';

const FirstName = React.createContext();

function App(){

    const obj = {
       obj1 : {
        name : 'pankaj',
        age : 20
       },
       obj2 : {
        name : 'Taashi',
        age : 19
       }  
    }

    return(
        <FirstName.Provider value={obj.obj2}>
            <A/>
        </FirstName.Provider>
    );    
}

export default App;
export {FirstName};
