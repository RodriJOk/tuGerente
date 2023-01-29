import React from 'react';
import tuGerente from '../images/tuGerente.png';

function Header() {
    return (
        <header className="App-header">
            <img src={tuGerente} className="App-logo" alt="logo" />
        </header>
    );
}

export default Header;