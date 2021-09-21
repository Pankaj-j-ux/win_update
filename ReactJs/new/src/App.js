import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Quescard from './Quescard';
import Data from './Data';

function App() {

  return (
    <>
    <div className='container w-50 text-center border border-secondary px-5 py-3 rounded-3 my-5'>
      <h1 className='text-light'>Interview Question</h1>
      <hr className='w-50 mx-auto fs-2'/>
      {
        Data.map((curr)=>{
          return(
            <Quescard
              key = {curr.id} {...curr}
            />
          );
        })
      }
    </div>   
    </>
  );

  // return (
  //   <>

  //   <div className='container'>
  //     <div className='row'><h1>Interview Question</h1></div>
  //     <Quescard/>    
  //   </div>

  //   </>
  // );
}

export default App;
