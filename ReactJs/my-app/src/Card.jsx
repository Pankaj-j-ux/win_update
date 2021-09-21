import { tsPropertySignature } from '@babel/types';
import React from 'react';


function Card(props){
    return(
        <>
        <div className="card">
            <img
              className="card_img" 
              src={props.src} 
              alt="Caard Img"
            />
            <div className="card_info">
                <div className="title">{props.title}</div>
                <hr/>
                <div className="sname">{props.sname}</div>
                <a href={props.link} target="_blank" className="button">
                    <button>Watch NOW</button>
                </a>
            </div>

        </div>
        </>
    );
}

export default Card;