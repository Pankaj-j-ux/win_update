import React, { useState } from 'react';

function App() {

  const [fullname,upname] = useState({
    fname : "",
    sname : ""
  });

  const [dis, updis] = useState("");
  

  const upvalue = (event) => {
    var name = event.target.name;
    console.log(event.target.name);
    upname((pre) =>{
      if( name === "fname"){
        return {
          fname : event.target.value,
          sname : pre.sname
        } 
      } else {
        return {
          fname : pre.fname,
          sname : event.target.value
        }
      }
    });
  }

  let onSubmit = (e) => {
    e.preventDefault();
    updis(fullname.fname + " " + fullname.sname);
  }
  
  // const [time, uptime] = useState(new Date().toLocaleTimeString());
  
  // const updateTime = () => {
  //   uptime(new Date().toLocaleTimeString());
  // }
  
  // setInterval(updateTime,1000);
  
  return (
    <>
    <form>
      <h1>HELLO {dis}</h1>
      <input type="text" id="field" placeholder="ENTER FIRST NAME ..." name="fname" value={fullname.fname} onChange={upvalue}/><br/>
      <input type="text" id="field1" placeholder="ENTER LAST NAME ..." name="sname" value={fullname.sname} onChange={upvalue}/><br/>
      <button type="submit" onClick={onSubmit} >CLICK ME</button>
    </form>
    </>
  );
}

export default App;
 