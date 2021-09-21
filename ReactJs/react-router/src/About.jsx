import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Pagea from './Pagea';
import Pageb from './Pageb';
import Pagec from './Pagec';

const About = () =>{

    return(
        <>
        <h1 id='apna'>THIS IS ABOUT PAGE</h1>
        <Link to='/About/page1'>page1</Link>
        <Link to='/About/page2'>page2</Link>
        <Link to='/About/page3'>page3</Link>
        <Switch>
            <Route path='/About/page1' component={Pagea}/>
            <Route path='/About/page2' component={Pageb}/> 
            <Route path='/About/page3' component={Pagec}/>
        </Switch>
        </>
    );
}

export default About;