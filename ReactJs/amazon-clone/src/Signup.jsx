import React,{useEffect, useState} from "react";
import { connectAdvanced, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import acom from './Inside-img/acom.png';
import { signUp } from "./actions/index";

const Signup = () => {
    
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(()=>{
        const signupForm = document.getElementById("signup-form");
        signupForm.addEventListener('submit',(E)=>{
            E.preventDefault();
        });
    },[]);


    const[signupData, upSignupData] = useState({
        History : history,
        Name : "",
        Email : "",
        Password : "",
        CPassword : ""
    });

    const dataUpdateSet2 = (E) => {
        const{name,value} = E.target;
        upSignupData((pre)=>{
            return({
                ...pre,
                [name]: value
            });
        });

    }

    return(
        <>
        <div className="signup mt-4 p-2">
            <div className="signup-logo text-center">
                <img src={acom} alt="login-logo" style={{width:"200px"}}/>
            </div>
            <div className="signup-section mx-auto my-4 p-4" style={{border:"rgb(204, 204, 204) solid 1px", width:"400px", borderRadius:"5px"}} >
                <h3 style={{fontFamily: "'Quicksand', sans-serif", fontWeight:"900"}}>Create account</h3>            
                <form id="signup-form">
                    <div className="mb-3">
                        <label className="form-label fw-bolder">Your name</label>
                        <input className="form-control form-control-sm" type="text" name="Name" value={signupData.Name} onChange={dataUpdateSet2}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bolder">Email address</label>
                        <input type="email" className="form-control form-control-sm"  name="Email" value={signupData.Email} onChange={dataUpdateSet2}/>
                    
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bolder">Password</label>
                        <input type="password" className="form-control form-control-sm" placeholder="At least 6 character" name="Password" value={signupData.Password} onChange={dataUpdateSet2}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bolder">Password again</label>
                        <input type="password" className="form-control form-control-sm"  name="CPassword" value={signupData.CPassword} onChange={dataUpdateSet2}/>
                    </div>
                    <button type="submit" id="btn-login" className="btn btn-sm w-100" style={{backgroundColor:"#f7b157", border:"solid 1px black"}} onClick={()=>dispatch(signUp(signupData))}>Create your Amazon account</button>
                    <div className="form-text mt-3">By continuing, you agree to Amazon's <span className="text-info">Conditions of Use</span> and <span className="text-info">Privacy Notice</span>.</div>
                </form>
                <hr className="w-75 mx-auto"/>
                <div className="form-text mt-3">Already have as account? <NavLink style={{textDecoration:"none"}} to="/login">Sign in -</NavLink></div>
            </div>            
        </div>
        </>
    );
}

export default Signup;