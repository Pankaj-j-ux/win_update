import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Logo from './Inside-img/amazon_logo_white.png';
import CartIcon from '@material-ui/icons/ShoppingCart';
import { NavLink } from "react-router-dom";
import { useSelector} from "react-redux";


const Header = () => {
    const myState = useSelector((myStore)=>myStore.updateCart);

    return(
        <>
        <div className="main-header container-fluid d-flex" style={{backgroundColor : "#131921", position:"fixed", zIndex:"9"}}>
           
            <NavLink to="/">
                <img src={Logo} alt="MAIN_LOGO" className="px-2 py-2" style={{width : "130px"}}/>
            </NavLink>
          
            
            <div className="ms-auto search-bar" style={{width : "60%"}}>
                <form  className="d-flex" style={{width : '100%', height:"100%"}}>
                    <input className="nav-search my-2 px-2 " type="text" name="Search"  autoComplete="off"/>
                    <button className="nav-search-btn my-2 border-0" type="submit" name="Search-button"><i className="fa fa-search"></i></button>
                </form>
            </div>
            
            <div className="navigation d-flex">
                <NavLink exact className="login-nav my-2 mx-2 px-2" activeClassName="active-link" to="/login">
                    <div className="inner-login-nav">
                        <div className="" style={{fontSize:"11px", fontWeight:"500"}}>Hello, <span>Guest</span></div>
                        <div className="" style={{fontSize:"14px", fontWeight:"700"}}>Log In</div>
                    </div>
                </NavLink>
                <NavLink exact className="order-nav my-2 mx-2 px-2" activeClassName="active-link" to="/orders&returns">
                    <div className="inner-order-nav">
                        <div className="" style={{fontSize:"11px", fontWeight:"500"}}>Returns</div>
                        <div className="" style={{fontSize:"14px", fontWeight:"700"}}>& Orders</div>
                    </div>
                   
                </NavLink>
                <NavLink exact className="prime-nav my-2 mx-2 px-2" activeClassName="active-link" to="/prime">
                    <div className="inner-prime-nav">
                        <div className="" style={{fontSize:"11px", fontWeight:"500"}} >Your</div>
                        <div className="" style={{fontSize:"14px", fontWeight:"700"}}>Prime</div>
                    </div>
                </NavLink>
                <NavLink exact className="cart-nav my-2 mx-2 px-2" activeClassName="active-link" to="/cart">
                    <div className="inner-prime-nav d-flex">
                        <CartIcon fontSize="large" className="" />
                        <div>
                            <div style={{fontSize:"12px", fontWeight:"900", color:"#e79325"}}>{myState.length}</div>
                            <div style={{fontSize:"13px", fontWeight:"700"}}>Cart</div>
                        </div>
                    </div>
                </NavLink>

            </div>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            {/* <nav className="text-white d-flex ms-auto" style={{fontFamily: "'Noto Sans JP', sans-serif"}}>
                <Link to="/login/">
                <div className="log-in-nav my-2 mx-4 ">
                    <div className="" style={{fontSize:"11px", fontWeight:"300"}}>Hello <span>Guest</span></div>
                    <div className=""style={{fontSize:"14px", fontWeight:"700"}}>Log In</div>
                </div>
                </Link>
                <Link to="/return&order/">
                <div className="order-nav my-2 mx-4">
                    <div className="" style={{fontSize:"11px", fontWeight:"300"}}>Returns</div>
                    <div className="" style={{fontSize:"14px", fontWeight:"700"}}>& Orders</div>
                </div>
                </Link>
                <Link to="/prime/">
                <div className="prime-nav my-2 mx-4 ">
                    <div className="" style={{fontSize:"11px", fontWeight:"300"}} >Your</div>
                    <div className="" style={{fontSize:"14px", fontWeight:"700"}}>Prime</div>
                </div>
                </Link>               
                <Link to="/cart/">
                <div className="cart-nav d-flex my-2 mx-4">
                    <CartIcon fontSize="large" className="" /><div style={{fontSize:"20px", fontWeight:"700"}}>0</div>
                </div>
               </Link>
            </nav> */}
        </div> 

        </>
    );
}

export default Header;