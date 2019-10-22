import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeLink = { color : 'red' };

    return (
        <div className='jumbotron'>
            <NavLink to='/' activeStyle={activeLink} exact > Home</NavLink> {'   '}
            <NavLink to='/about' activeStyle={activeLink} > About</NavLink>
        </div>
    )
}

export default Header;