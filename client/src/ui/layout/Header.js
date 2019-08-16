import React from 'react';
import { NavLink } from "react-router-dom";
import GoogleAuth from "../widgets/GoogleAuth";

const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <NavLink to='/vidus/fechuser' className="item">My VidUs</NavLink>
            <div className="right menu">
                <NavLink to='/' activeClassName="" className='item'>All VidUs</NavLink>
            </div>
            <GoogleAuth/>
        </div>);
}

export default Header; 