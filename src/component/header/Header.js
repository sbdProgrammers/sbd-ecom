import React from 'react';
import './header.css';

import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <div className="app-container">
                <h3> Total Product - 90 </h3>
                <div className="logo">
                    <img src={logo} alt={logo}/>
                </div>
                <h3> Add Product - 3 </h3>
            </div>
        </div>
    );
};

export default Header;