import React from 'react'
import {Link} from 'react-router-dom';
import './header.style.scss'
import {ReactComponent as Logo } from "../../assets/crown.svg"
const Header = () => (
    <div className="header">
        <Link className='logo-container' to='/'>
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shops">
                SHOPS
            </Link>
            <Link className="option" to="/shops">
                Contact
            </Link>
        </div>
    </div>
)

export default Header