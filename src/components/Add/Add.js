import React from 'react';
import {useState} from "react";
import Form from "./Form";

function Add(props) {
    // console.log(props.users.addUser)

    let count = props.users.state.usersCount
    const [users, setUsers] = useState(1)

    // console.log(count)
    // console.log(users)

    function addNewUser() {
        setUsers(prev => prev + 1)
        // props.users.changeUserCount(users)
        props.users.addUser(users)
    }

    return (
        <div>
            <Form data={props}/>
            <button onClick={addNewUser}>Add new user</button>
        </div>
    );
}

export default Add;