import React from 'react';

function NavBar() {
    return (
        <div className="nav-bar">
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/about">About</a>
            <a className="nav-link" href="/new-post-form">New Post Form</a>
            <a className="nav-link" href="/History">History</a>
        </div>
    );
}

export default NavBar;
