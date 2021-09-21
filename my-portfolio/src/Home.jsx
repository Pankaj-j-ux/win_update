import React, { useEffect } from 'react';
import MyPic from './Image/port.png';
import { useState } from 'react';
import TypedJS from 'typed-react-component';

let props = {
    
    typings: ['DEVELOPER', 'DESIGNER', 'CREATOR'],
    loop: true,
    typeSpeed: 300,
    backTypeSpeed : 100,
    delay: 1500,
    startDelay: 200,
    blinkerCharacter : "|",
    blinkerDelay : 300
};

const Home = () =>{
    
    // const [wordIndex,setWordIndex] = useState(0);
    // const [isDelete,setIsDelete] = useState(false);
    // const [txt,setTxt] = useState('');

    // const typeWriter = function(txtElement, words, wait=3000) {
        
    //     let wordIndex = 0;
    //     let isDelete = false;
    //     let txt = '';
    //     let w = parseInt(wait,10);


    //     const current = (wordIndex) % (words.length);
    //     let fullTxt = words[current];
                
    //     if(isDelete){
    //         txt= fullTxt.substring(0,txt.length - 1);        
    //     }else{
    //         txt = fullTxt.substring(0,txt.length + 1);
    //     }
        
    //     txtElement.innerHTML = txt;
        
        
    //     setTimeout(()=>typeWriter(txtElement,words,wait),1000);
    // }    
    
    // function init() {
               
    //     const txtElement = document.getElementById('text-type');
        
    //     const words = [];
    //     const word1 = txtElement.getAttribute('data-word1');
    //     const word2 = txtElement.getAttribute('data-word2');
    //     const word3 = txtElement.getAttribute('data-word3');
    //     words.push(word1);
    //     words.push(word
    
    
    return(
        <>
       
        <div className='d-flex'>
        
            <div className="me-auto mt-5 pt-5 ms-3">
                <p className="fw-bolder mb-2 fs-4" style={{fontFamily: "'Encode Sans SC', sans-serif"}}>HEY ! THERE</p>
                <h2 className="fw-bold fs-2" style={{fontFamily: "'Fredericka the Great', 'cursive'"}}>I AM <span className="text-danger">PANKAJ SHARMA</span></h2>
                <p className="fw-bolder fs-1 mb-2" style={{fontFamily: "'Encode Sans SC', sans-serif"}}>A <spam id="text-type" className="text-type fs-1 fw-bold text-secondary  px-2" style={{fontFamily: "'Fredericka the Great', 'cursive'"}}  data-wait="3000" data-word1="DEVELOPER" data-word2="DESIGNER" data-word3="CREATOR"><TypedJS {...props} /></spam></p>
                <h2 className="fw-bold fs-1 pb-3 border-bottom border-danger border-3" style={{fontFamily: "'Fredericka the Great', 'cursive'"}}>Welcome To My World . . .</h2>
                <p className="fw-bolder mb-2" style={{fontFamily: "'Encode Sans SC', sans-serif"}}>I Believe in Learning by Doing</p>
                 
            </div>
            <div className="">
               <img src={MyPic} style={{height:'508px'}} alt="my-pic" />
            </div>
            </div>
        </>
    );
}

export default Home;