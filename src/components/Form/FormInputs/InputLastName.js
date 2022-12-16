import React from 'react';
import s from './FormInputs.module.css'

function InputLastName(props) {
    // console.log(props.error)
    let lastNameRef = React.createRef()
    let dataItem = props.props.state.userData

    let nameChanged = () => {
        let name = lastNameRef.current.value
        props.props.updateUserLastName(name)
    }

    let classInput = props.error&&dataItem.lastName.length==0 ? s.inputError : s.input

    return (
        <div className='input'>
            <label className={s.label} htmlFor="user-last-name">User Surname</label>
            <span>
                <input
                    className={classInput}
                    ref={lastNameRef}
                    type="text"
                    id="user-last-name"
                    value={dataItem.lastName}
                    onChange={nameChanged}
                />
                {props.error&&dataItem.lastName.length==0 ? <p className={s.errorMes}>This input can't be empty!</p> : ""}
            </span>
        </div>
    );
}

export default InputLastName;

// &&dataItem.lastName.length==0