import React, {useContext} from 'react';
import s from './FormInputs.module.css'
import {Context} from '../../../App'

function InputGender(props) {
    console.log(props.error)

    const {store} = useContext(Context)

    const onChangeValue = (e) => {
        let gender = e.target.value
        store.updateUserGender(gender)
    }

    return (
        <>
            <div onChange={onChangeValue} className={s.inputGender}>
                <div>
                    <p className={s.label}>
                        User gender
                    </p>
                </div>
                <div>
                    <input type="radio" value="Male" name="gender" defaultChecked /> Male
                </div>
                <div>
                    <input type="radio" value="Female" name="gender" /> Female
                </div>
                <div>
                    <input type="radio" value="Another" name="gender" /> Another
                </div>
            </div>
        </>
    );
}

export default InputGender;
