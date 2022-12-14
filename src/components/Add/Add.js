import React from 'react';
import {useState} from "react";
import uuid from 'react-uuid';
import InputFirstName from "./FormInputs/InputFirstName";
import InputTel from "./FormInputs/InputTel";
import InputEmail from "./FormInputs/InputEmail";
import InputLastName from "./FormInputs/InputLastName";

function Add(props) {
    // console.log(props)

    let count = props.users.state.usersCount
    const [users, setUsers] = useState(1)


    // console.log(document.querySelector('#user-name'))

    // let nameInput = document.querySelector('#user-name') -> for blur
    // let telInput = document.querySelector('#user-tel')   -> for blur


    async function addNewUser() {
        setUsers(prev => prev + 1)
        props.users.addUser(uuid())

        await props.data.registerUserToFirebase(props.users.state.usersCount[props.users.state.usersCount.length - 1])
    }

    return (
        <div>
            <form>
                <div>
                    <InputFirstName props={props.users} />
                    <InputLastName props={props.users} />
                </div>
                <InputTel props={props.users} />
                <InputEmail props={props.users} />

                <button type='submit' onClick={addNewUser}>Add new user</button>
            </form>
        </div>
    );
}

export default Add;