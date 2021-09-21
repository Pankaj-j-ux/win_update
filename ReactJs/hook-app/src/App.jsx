import React, { useState } from 'react';

function App(){
    
    const [time, upDate] = useState(new Date().toLocaleTimeString());
    
    const getTime = () =>{
        upDate(new Date().toLocaleTimeString());
    }

    return(
        <>
        <div className="container">
            <h1 className="time">{time}</h1>
            <button className="btn" onClick={getTime}>GET THE CURRENT TIME</button>
        </div>
        </>
    );
}

export default App;