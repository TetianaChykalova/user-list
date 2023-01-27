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
        dateRef.current.value = 'null'
    }, [store.state.usersCount.length])

    const d = '[0-3]'
    const D = d === '3' ? '[0-1]' : '[1-9]'
    const m = '[0-1]'
    const M = m === '0' ? '[1-9]' : '[0-2]'
    const y = '[1-2]'
    const Y = '[0-9]'

    const formatCharsMask = {
        'd': d,
        'D': D,

        'm': m,
        'M': M,

        'y': y,
        'Y': Y,
    }

    let classInput = props.error&&dataItem.birthDay==null ? s.inputError : s.input

    return (
        <div>
            <label className={s.label} htmlFor="user-date">
                User birthday
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
                {props.error&&dataItem.birthDay==null ? <p className={s.errorMes}>This input can't be empty!</p> : ""}
            </span>
        </div>
    );
}

export default InputDate;