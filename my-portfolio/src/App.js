import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Blog from "./Blog";

function App() {

  return (
    <>
      <Header/>    
      
      <div className="container">
        <Switch>
          <Route exact path="/" component={()=><Home/>} />
          <Route  path="/About" component={About} />
          <Route  path="/Contact" component={Contact} />
          <Route  path="/Blog" component={Blog} />
        </Switch>
      </div>
    </>  
  );
}

export default App;
