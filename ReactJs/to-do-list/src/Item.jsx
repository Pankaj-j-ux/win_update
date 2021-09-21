import React from 'react';

const Item = (props) => {
    return (
        props.arr.map((val)=>{
            return (
                <>
                    <li className="item"><span className="del">X</span>{val}</li>
                </>
            );
        }) 
    
    );
     
}


export default Item