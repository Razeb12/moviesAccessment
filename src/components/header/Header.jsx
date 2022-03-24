import React, { useRef} from 'react';
import { NavLink } from "react-router-dom";


import './header.scss';

import logo from '../../assets/Logo.png';



const Header = () => {

  
    const headerRef = useRef(null);

  

   

    return (
        <div ref={headerRef} className="header shrink">
            <div className="header__wrap container">
                <div className="logo">
                   <NavLink to="/">
                   <img src={logo} alt="logo" />
                   </NavLink>
                
                </div>
               
            </div>
        </div>
    );
}

export default Header;
