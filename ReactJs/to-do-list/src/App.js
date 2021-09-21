import React, { useState } from 'react';
import './index.css';
import Item from './Item';

function App() {
  const [value, changeval] = useState("");
  const [item, uplist ] = useState([]);

  const changefun = (E) => {
    changeval(E.target.value);
  }

  const disfun = () =>{
    uplist((pre)=>{
      return [ ...pre, value  ];
    });
    changeval("");
  }


  return (
    <>
    <div className = "main_div">
      <div className = "center_div">
        <br/>
        <h1 className="heading">ToDo List</h1>
        <br/> 
        <input className="type" type="text" placeholder="Add Itmes" name="inpbox" onChange={changefun} value = {value} />
        <button onClick = {disfun} className="btn">+</button>
        <div className="list_contianer">
          <ol className = "list">
            <Item
              arr = {item}
            />
          </ol>
        </div>  
      </div>
    </div>
    </>
  );
}

export default App;
