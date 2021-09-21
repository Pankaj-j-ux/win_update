import React from 'react';
import Slot from './Slot';
import data from './data';

function Nslot(){
    return(
        data.map((val)=>{
            return(
                <Slot
                    a = {val.a}
                    b = {val.b}
                    c = {val.c} 
                />
            );
        })
    );
}

export default Nslot;