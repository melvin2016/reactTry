import React from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';

function Nav(){
    return (
        <header>
            <nav>
                <ul>
                    <NavLink exact to="/" >Home</NavLink>
                    <NavLink to="/tweets">Tweets</NavLink>
                    <NavLink to="/writeTweets">Write Tweet</NavLink>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;