import React, {useEffect} from 'react';
import InputMask from 'react-input-mask';
import s from './FormInputs.module.css'

function InputDate(props) {

    let dateRef = React.createRef()
    let dataItem = props.props.state.userData

    let dateChange = () => {
        let date = dateRef.current.value
        props.props.updateUserBirthDay(date)
    }

    useEffect(() => {
        dateRef.current.value = 'null'
    }, [props.count.length])

    let classInput = props.error&&dataItem.birthDay==null ? s.inputError : s.input

    return (
        <div>
            <label className={s.label} htmlFor="user-date">
                Your birthday:
            </label>
            <span>
                <InputMask
                    className={classInput}
                    mask='99.99.9999'
                    maskchair='_'
                    ref={dateRef}
                    onChange={dateChange}
                    id="user-date"
                />
                {props.error&dataItem.birthDay==null ? <p className={s.errorMes}>This input can't be empty!</p> : ""}
            </span>
        </div>
    );
}

export default InputDate;