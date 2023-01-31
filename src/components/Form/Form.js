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

import {Context} from "../../App";
import {useContext} from "react";
import InputJob from "./FormInputs/InputJob";

function Form(props) {

    const {store, data} = useContext(Context)

    const [users, setUsers] = useState(1)
    const [error, setError] = useState(false)

    const firstNameValue = store.state.userData.firstName
    const lastNameValue = store.state.userData.lastName
    const telValue = store.state.userData.tel
    const emailValue = store.state.userData.email
    const dateValue = store.state.userData.birthDay
    const genderValue = store.state.userData.gender

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
        if (firstNameValue.length === 0 || lastNameValue.length === 0 || !telResult || !emailResult) {
            setError(true)
        }
    }

    async function addNewUser(e) {
        if (firstNameValue && lastNameValue && telValue && emailResult && dateValue && genderValue) {

            store.addUser(uuid(), users)
            setUsers(prev => prev + 1)
            await data.registerUserToFirebase(store.state.usersCount[store.state.usersCount.length - 1])
            setError(false)
            e.preventDefault()
        }
    }


    return (
        <div className={s.wrapper}>
            <form onSubmit={handleSubmit}>
                <div className={`${s.rows} ${s.div}`}>
                    <InputFirstName error={error}/>
                    <InputLastName error={error}/>
                </div>
                <div className={`${s.rows} ${s.div}`}>
                    <InputTel error={error} telResult={telResult}/>
                    <InputEmail error={error} emailResult={emailResult}/>
                </div>
                <div className={`${s.rows} ${s.div}`}>
                    <InputDate error={error}/>
                    <InputJob/>
                </div>
                <div className={`${s.rows} ${s.div}`}>
                    <InputGender error={error} />
                </div>

                <button className={s.button} type='submit' onClick={addNewUser}>Add new user</button>
            </form>
        </div>
    );
}

export default Form;