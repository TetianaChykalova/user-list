import React from 'react';
import {useState} from "react";

function Add(props) {
    let count = props.users.usersCount
    const [users, setUsers] = useState(1)

    // console.log(count)
    // console.log(users)

    function addNewUser() {
        setUsers(prev => prev + 1)
        props.users.changeUserCount(users)
    }

    return (
        <div>
            <button onClick={addNewUser}>Add new user</button>
        </div>
    );
}

export default Add;