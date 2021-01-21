import React from 'react';
import { Link } from 'react-router-dom';

export default function MyNav() {
    return (
        <header>
            <h1 style={{ textDecoration: 'underline' }}>গরিবের IMDb 🎥</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/aboutme'>About Me</Link>
            </nav>
            <hr />
        </header>
    );
}
