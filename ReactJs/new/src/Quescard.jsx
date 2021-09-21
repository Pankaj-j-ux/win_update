import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Down from '@material-ui/icons/KeyboardArrowDownRounded';
import Up from '@material-ui/icons/ExpandLessRounded';

function Quescard({ques,ans}){
    const [show, upshow] = useState(false);

    const changesign = () =>{
        upshow(!show);
    }
   
    return (  
     
        <div className='row my-2 py-2'>
            <div className='qsec d-flex flex-row bg-dark text-light rounded-pill'>
                <IconButton onClick={changesign} style={{ color: 'white' }}>
                    {show ? <Up/> : <Down/>}
                </IconButton>
                <div className='ques pt-2 fs-5'>{ques}</div>
            </div>
            { show && <div className='asec d-flex flex-row ps-5 py-2 bg-light mt-1 rounded-pill'>
                <div className='ans fs-5'>{ans}</div>
            </div>}
            <hr className='w-25 mx-auto mt-4 '/>
        </div>
    );




    
    // return (
    //     Data.map((curr)=>{
    //         return (
    //             <>
    //             <div className='row'>
    //                 <div className='qsec'>
    //                     <div className='ques'>{curr.ques}</div>
    //                 </div>
    //                 <div className='asec'>
    //                     <div className='ans'>{curr.ans}</div>
    //                 </div>
    //             </div>
    //             </>
    //         );
    //     })
    // );
    

}

export default Quescard;