import React from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import {Route, Switch, Link} from 'react-router-dom';

function App(){
    return(
        <>

        <Link to='/'>Home</Link>
        <Link to='/About'>About Us</Link>
        <Link to='/Contact'>Contact Us</Link>

        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/About' component={About}/>
            <Route path='/Contact' component={Contact}/>
        </Switch>






        {/* <About/ >
        <Contact/> */}
        </>
    );
}

export default App;