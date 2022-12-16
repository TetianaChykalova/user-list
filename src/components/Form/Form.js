import React, {useEffect} from 'react';
import {useState} from "react";
import uuid from 'react-uuid';
import InputFirstName from "./FormInputs/InputFirstName";
import InputTel from "./FormInputs/InputTel";
import InputEmail from "./FormInputs/InputEmail";
import InputLastName from "./FormInputs/InputLastName";
import InputDate from "./FormInputs/InputDate";
import s from './Form.module.css'
import InputGender from "./FormInputs/InputGender";


function Form(props) {

    let count = props.users.state.usersCount
    const [users, setUsers] = useState(1)
    const [error, setError] = useState(false)

    const firstNameValue = props.users.state.userData.firstName
    const lastNameValue = props.users.state.userData.lastName
    const telValue = props.users.state.userData.tel
    const emailValue = props.users.state.userData.email
    const dateValue = props.users.state.userData.birthDay

    const emailRgex = /\S+@\S+\.\S+/
    const telRgex = /^(\+38)0(39|50|63|66|67|68|73|89|9[1-9])[0-9]{7}$/


    const [telResult, setTelResult] = useState(true)
    useEffect(() => {
        setTelResult(telRgex.test(telValue))
    }, [telValue])

    const [emailResult, setEmailResult] = useState(true)
    useEffect(() => {
        setEmailResult(emailRgex.test(emailValue))
    }, [emailValue])


    const handleSubmit = (e) => {
        e.preventDefault()
        if (firstNameValue.length == 0 || lastNameValue.length == 0 || !telResult || !emailResult) {
            setError(true)
        }
    }

    async function addNewUser(e) {
        if (firstNameValue && lastNameValue && telValue && emailResult && dateValue) {

            props.users.addUser(uuid(), users)
            setUsers(prev => prev + 1)
            await props.data.registerUserToFirebase(props.users.state.usersCount[props.users.state.usersCount.length - 1])
            setError(false)
            e.preventDefault()
        }
    }


    return (
        <div className={s.wrapper}>
            <form onSubmit={handleSubmit}>
                <div className={`${s.rows} ${s.div}`}>
                    <InputFirstName props={props.users} error={error}/>
                    <InputLastName props={props.users} error={error}/>
                </div>
                <div className={`${s.rows} ${s.div}`}>
                    <InputTel props={props.users} error={error} telResult={telResult}/>
                    <InputEmail props={props.users} error={error} emailResult={emailResult}/>
                </div>
                <div className={`${s.rows} ${s.div}`}>
                    <InputDate props={props.users} error={error} count={count}/>
                    <InputGender props={props.users} count={count}/>
                </div>

                <button className={s.button} type='submit' onClick={addNewUser}>Add new user</button>
            </form>
        </div>
    );
}

export default Form;