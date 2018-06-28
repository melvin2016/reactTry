import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav(){
    return (
        <header>
            <nav>
                <ul>
                    <NavLink to="/home" >Home</NavLink>
                    <NavLink to="/tweets">Tweets</NavLink>
                    <NavLink to="/writeTweets">Write Tweet</NavLink>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;