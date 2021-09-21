import React from "react";
import Account from '@material-ui/icons/AccountCircle';
import acom from './Inside-img/acom.png';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Check from '@material-ui/icons/DoneAllRounded';
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";
import { logOut } from "./actions/index";


const Logout=()=>{
    const dispatch = useDispatch();
    const state = useSelector((myStore)=>myStore.login);

    return(
        <>
        <div className="logout mt-4 p-2">
            <div className="logout-logo text-center">
                <img src={acom} alt="login-logo" style={{width:"200px"}}/>
            </div>
            <div className="login-section mx-auto my-4 p-4" style={{border:"rgb(204, 204, 204) solid 1px", width:"400px", borderRadius:"5px"}} >
                <h3 style={{fontFamily: "'Quicksand', sans-serif", fontWeight:"900"}}>Switch accounts</h3>   
                <hr/> 
                <div className="Active-user">
                    <Account style={{fontSize: 60}} className="me-4 text-secondary"/>
                    <span className="text-secondary"> 
                    {state.Switcher ? state.Email : "Guest"}
                    </span>
                    <Check className="ms-4 text-secondary" style={{fontSize: 40}}/>
                    <Button className="fw-bolder mt-2 text-primary" variant="outlined" onClick={()=>dispatch(logOut())}>Sign Out</Button>
                    <hr/>
                </div>        
            </div>
       
        </div>
        </>
    );
}


export default Logout;