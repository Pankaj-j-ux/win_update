import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
    return(
        <>
        <h1>THIS IS HOME PAGE</h1>
        <Link to='/About'>ABOUT US </Link>
        </>
    );
}

export default Home;