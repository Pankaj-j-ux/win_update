import React, { useState } from "react";
import acom from "./Inside-img/acom.png";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "./actions/index";
import { NavLink ,useHistory} from "react-router-dom";
import { useEffect } from "react";

const Login = () => {

    const history = useHistory();
    const dispatch = useDispatch();
  
    useEffect(()=>{
        const loginForm = document.getElementById("login-form");
        loginForm.addEventListener('submit',(E)=>{
            E.preventDefault();
        });
    },[]);

    const[loginData, upLoginData] = useState({
        History : history,
        Email : "",
        Password : "",
        Switcher : false
    });

    const dataUpdateSet1 = (E) =>{

        const {name,value} = E.target;
        upLoginData((pre)=>{
            return({
                ...pre,
                [name]:value
            });
        });
    }

        
    return(
        <>
        
        <div className="login mt-4 p-2">
            <div className="login-logo text-center">
                <img src={acom} alt="login-logo" style={{width:"200px"}}/>
            </div>
            <div className="login-section mx-auto my-4 p-4" style={{border:"rgb(204, 204, 204) solid 1px", width:"400px", borderRadius:"5px"}} >
                <h3 style={{fontFamily: "'Quicksand', sans-serif", fontWeight:"900"}}>Sign-In</h3>            
                <form id="login-form">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label fw-bolder">Email address</label>
                        <input type="email" className="form-control form-control-sm"  name="Email" value={loginData.Email} onChange={dataUpdateSet1}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label fw-bolder">Password</label>
                        <input type="password" className="form-control form-control-sm" name="Password" value={loginData.Password} onChange={dataUpdateSet1}/>
                    </div>
                    <button type="submit" id="btn-login" className="btn btn-sm w-100" style={{backgroundColor:"#f7b157", border:"solid 1px black"}} onClick={()=>dispatch(logIn(loginData))}>Log In</button>
                    <div id="emailHelp" className="form-text mt-3">By continuing, you agree to Amazon's <span className="text-info">Conditions of Use</span> and <span className="text-info">Privacy Notice</span>.</div>
                </form>
            </div>
            <div className=" signup-section text-center mx-auto mb-4" style={{color:"grey",width:"400px"}}>
                <hr className="w-50 mx-auto"/> <p>New to Amazon?</p> <hr className="w-50 mx-auto"/>
                <NavLink exact className="signup-nav my-2 mx-2 px-2" activeClassName="active-link" to="/signup">
                    <div className="inner-signup-nav">
                        <button className="btn w-100 btn-sm " style={{backgroundColor:"rgb(204, 204, 204)", border:"solid 1px black"}} >Create your Amazon account</button>
                    </div>
                </NavLink>
            </div>
        </div>
        </>
    );
}

export default Login;