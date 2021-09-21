import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Log from './Log';
import Cart from './Cart';
import Order from './Order';
import Prime from './Prime';
import Signup from "./Signup";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <>
    <Header/>
    <div className="pt-5">
    <Switch>
      <Route exact path='/' component={()=><Home/>}/>
      <Route path='/login' component={()=><Log/>}/>
      <Route path='/orders&returns' component={()=><Order/>}/>
      <Route path='/prime' component={()=><Prime/>}/>
      <Route path='/cart' component={()=><Cart/>}/>
      <Route path='/signup' component={()=><Signup/>}/>
    </Switch>
    </div>
    
    
    </>
  );
}

export default App;
