import React, {useEffect} from 'react';
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
    //
    // const emailRGEX = /[ AZ0-9._%+-] + @ [ AZ0 -9.-] + \. [ AZ] {2,}/
    // const telRGEX = /^[\s()+-]*([0-9][\s()+-]*){10,20}$/       //   /^(\+91[-\s]?)?[0]?(91)?[789]\d{9}$/
    //                  /^\+380\d{3}\d{2}\d{2}\d{2}$/       /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/
    //                  /^(\+38|8)?0[0-9]{9}$/              /^(\+38)?0(39|50|63|66|67|68|73|89|9[1-9])[0-9]{7}$/
    //                  маскированній ввод

    useEffect(() => {
        if(firstNameValue&&lastNameValue&&telValue&&emailValue) {
            setError(false)
            console.log(error)
        }
    }, [firstNameValue, lastNameValue, telValue, emailValue])


    // ||!emailRGEX.test(emailValue)||!telRGEX.test(telValue)   &&emailValue&&telValue

    const handleSubmit = (e) => {
        e.preventDefault()
        if(firstNameValue.length==0||lastNameValue.length==0) {
            setError(true)
            console.log(error)
        }
    }


    async function addNewUser(e) {
        // e.preventDefault()
        if(firstNameValue&&lastNameValue&&emailValue&&telValue) {
            // setError(false)

            props.users.addUser(uuid(), users)
            setUsers(prev => prev + 1)

            await props.data.registerUserToFirebase(props.users.state.usersCount[props.users.state.usersCount.length - 1])

            setError(false)
            console.log(error)

        } else {
            e.preventDefault()
            setError(true)
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <InputFirstName props={props.users} error={error} />
                    <InputLastName props={props.users} error={error} />
                </div>
                <InputTel props={props.users} error={error} />
                <InputEmail props={props.users} error={error} />

                <button type='submit' onClick={addNewUser}>Add new user</button>
            </form>
        </div>
    );
}

export default Add;