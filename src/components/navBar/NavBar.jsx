import React from 'react';
import { NavLink } from 'react-router-dom';

export function NavBar() {
    return (
        <ul className='nav_bar'>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>

            <li>
                <NavLink to="createPostPage">Create Post</NavLink>
            </li>
        </ul>
    );
}

