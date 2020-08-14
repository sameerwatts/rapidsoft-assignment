import React from 'react';
import './style.css';
import Button from '../Button';
import logoImg from "../../assets/images/logo.png"

const Nav = (props) => {
    return (
        <div>
            <header className='header'>
                <div className="navbar">
                    <a href="/" className="logo-icon">
                        <img src={logoImg} alt="Watsoo Express Logo" className="logo" />
                    </a>
                    <div className="logout-button-container">
                        <Button btnText='Logout' className='postBotton mr-10 mr-md-20' />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Nav;