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
    const [error, setError] = useState(false)


    const firstNameValue = props.users.state.userData.firstName
    const lastNameValue = props.users.state.userData.lastName
    const telValue = props.users.state.userData.tel
    const emailValue = props.users.state.userData.email

    const emailRGEX = /[ AZ0-9._%+-] + @ [ AZ0 -9.-] + \. [ AZ] {2,}/
    const telRGEX = /^[\s()+-]*([0-9][\s()+-]*){10,20}$/

    // ||!emailValue.test(emailRGEX)||!telValue.test(telRGEX)

    let validateForm = (e) => {
        e.preventDefault()
        if(firstNameValue.length==0||lastNameValue.length==0) {
            // setError((prev) => !prev)
            setError(true)
        } else {
            setError(false)
        }
    }


    async function addNewUser() {
            setUsers(prev => prev + 1)
            props.users.addUser(uuid(), users)
            setError(false)

            await props.data.registerUserToFirebase(props.users.state.usersCount[props.users.state.usersCount.length - 1])
    }

    console.log(error)

    return (
        <div>
            <form onSubmit={validateForm}>
                <div>
                    <InputFirstName props={props.users} error={error} />
                    <InputLastName props={props.users} error={error} />
                </div>
                <InputTel props={props.users} error={error} />
                <InputEmail props={props.users} error={error} />

                <button type='submit' onClick={addNewUser}>Add new user</button>
                {/*<button>Sumbit</button>*/}
            </form>
        </div>
    );
}

export default Add;