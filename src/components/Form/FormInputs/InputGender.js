import React, {useContext} from 'react';
import s from './FormInputs.module.css'
import {Context} from '../../../App'

function InputGender(props) {

    const {store} = useContext(Context)

    const onChangeValue = (e) => {
        let gender = e.target.value
        store.updateUserGender(gender)
    }

    const genderRef = React.useRef()

    return (
        <>
            <div>
                <div>
                    <label className={s.label}>
                        User gender* <br/><span>"male" if you choose nothing</span>
                    </label>
                </div>
                <div onChange={onChangeValue} className={s.inputGender} ref={genderRef}>
                    <div>
                        <input type="radio" value="Male" name="gender" defaultChecked={true} /> Male
                    </div>
                    <div>
                        <input type="radio" value="Female" name="gender" /> Female
                    </div>
                    <div>
                        <input type="radio" value="Another" name="gender" /> Another
                    </div>
                </div>
            </div>
        </>
    );
}

export default InputGender;


