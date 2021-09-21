import React from "react";
import { useSelector } from "react-redux";
import Login from "./Login";
import Logout from "./Logout";

const Log = () =>{

    const state = useSelector((myStore)=>myStore.login);

    return(
        <>
        {state.Switcher ? <Logout/> : <Login/>}
        </>
    );
}

export default Log;