import React, {useContext} from 'react';
import s from './FormInputs.module.css'
import {Context} from '../../../App'

function InputEmail(props) {
    const {store} = useContext(Context)

    let emailRef = React.createRef()
    let dataItem = store.state.userData

    let emailChanged = () => {
        let email = emailRef.current.value
        store.updateUserEmail(email)
    }

    let classInput = props.error&&dataItem.email.length==0||props.error&&dataItem.email.length>0&&!props.emailResult ? s.inputError : s.input

    return (
        <div>
            <label className={s.label} htmlFor="user-email">User Email</label>
            <span>
                <input
                    className={classInput}
                    ref={emailRef}
                    type="email"
                    id="user-tel"
                    value={dataItem.email}
                    onChange={emailChanged}
                />
                {props.error&&dataItem.email.length==0?<p className={s.errorMes}>This input can't be empty!</p>:""}
                {props.error&&dataItem.email.length>0&&!props.emailResult?<p className={s.errorMes}>Email is invalid</p>:""}
            </span>
        </div>
    );
}

export default InputEmail;