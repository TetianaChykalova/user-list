import React from 'react';
import s from './Header.module.css'

function Header(props) {
    return (
        <header className={s.header}>
            <h1>
                User List
            </h1>
        </header>
    );
}

export default Header;