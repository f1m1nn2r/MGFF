import React from 'react';
import { Link } from 'react-router-dom';

// img
import Logo from '../assets/img/logo.png';

const Header = () => {
    return (
        <header className='at-header'>
            <div className="at-header-inner">
                <div className="logo"><img src={Logo} alt={Logo} /></div>
                <ul className='menu-ul'>
                    <li><Link to='/' className='m-txt-5'>MUSIC</Link></li>
                    <li><Link to='/' className='m-txt-5'>ARTIST</Link></li>
                    <li><Link to='/' className='m-txt-5'>TOUR</Link></li>
                    <li><Link to='/' className='m-txt-5'>MUSIC</Link></li>
                    <li><a className='m-txt-5' href="" target="_blank" rel="noopener noreferrer">SHOP</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;