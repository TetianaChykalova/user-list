import React, {useContext, useEffect} from 'react';
import s from './FormInputs.module.css'
import {Context} from '../../../App'

function InputGender(props) {
    const {store} = useContext(Context)

    const onChangeValue = (e) => {
        let gender = e.target.value
        store.updateUserGender(gender)
    }

    // useEffect(() => {
    // //     ОБНУЛЕНИЕ, еще не знаю как и какое
    // }, [store.state.usersCount.length])

    return (
        <div onChange={onChangeValue}>
            <input type="radio" value="Male" name="gender" /> Male
            <input type="radio" value="Female" name="gender" /> Female
            <input type="radio" value="Another" name="gender" /> Another
        </div>
    );
}

export default InputGender;
