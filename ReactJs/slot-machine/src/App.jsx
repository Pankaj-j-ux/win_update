import React from 'react';
import Slot from './Slot';

const App = () =>{
    return(
        <>
            <header>
                <h1 className="heading"> &#127920; Welcome to the Slot-Machine Game &#127920; </h1>
            </header>
            <section className="slots">
                             
                <Slot
                    a = "&#128512;"
                    b = "&#128512;"
                    c = "&#128512;"
                />
                <Slot
                    a = "&#128512;"
                    b = "&#127911;"
                    c = "&#128512;"
                />
                <Slot
                    a = "&#127911;"
                    b = "&#127911;"
                    c = "&#127911;"
                /> 
            </section>
        </>
    );
}

export default App;