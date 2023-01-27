import React from 'react';
import s from './UserText.module.css'

function WithoutUsers(props) {
    return (
        <div className={s.wrapper}>
            <p>Sorry, you haven't created any users yet...</p>
            <p>Fill out the form above</p>
            <div>
                <img src="/img/sad-smile.png" alt=""/>
            </div>
        </div>
    );
}

export default WithoutUsers;