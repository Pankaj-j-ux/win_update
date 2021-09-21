import React from 'react';
import sdata from './sdata';
import Card from './Card';

function Ncard(){
    return(
        sdata.map((val)=>{
            return(
                <Card
                    src = {val.src}
                    title = {val.title}
                    sname = {val.sname}
                    link = {val.link}
                />
            );
        
        })
    );
}

export default Ncard;