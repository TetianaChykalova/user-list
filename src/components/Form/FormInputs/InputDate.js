import React, {useEffect, useContext} from 'react';
import InputMask from 'react-input-mask';
import s from './FormInputs.module.css'
import {Context} from '../../../App'

function InputDate(props) {
    const {store} = useContext(Context)

    let dateRef = React.createRef()
    let dataItem = store.state.userData

    let dateChange = () => {
        let date = dateRef.current.value
        store.updateUserBirthDay(date)
    }

    useEffect(() => {
        dateRef.current.value = ''
    }, [store.state.usersCount.length])

    const formatCharsMask = {
        'd': /[0-3]/,
        'D': /[1-9]/,
        'm': /[0-1]/,
        'M': /[0-9]/,
        'y': /[1-2]/,
        'Y': /[0-9]/,
    }

    let classInput = props.error&&dataItem.birthDay.length===0 ? s.inputError : s.input

    return (
        <div>
            <label className={s.label} htmlFor="user-date">
                User birthday*
            </label>
            <span>
                <InputMask
                    className={classInput}
                    mask='dD-mM-yYYY'
                    formatChars={formatCharsMask}
                    maskchair='_'
                    ref={dateRef}
                    onChange={dateChange}
                    id="user-date"
                    placeholder='dd-mm-yyyy'
                />
                {props.error&&dataItem.birthDay.length===0 ? <p className={s.errorMes}>This input can't be empty!</p> : ""}
            </span>
        </div>
    );
}

export default InputDate;