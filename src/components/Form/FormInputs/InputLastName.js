import React, {useContext} from 'react';
import s from './FormInputs.module.css'
import {Context} from '../../../App'

function InputLastName(props) {
    const {store} = useContext(Context)
    let lastNameRef = React.createRef()
    let dataItem = store.state.userData

    let nameChanged = () => {
        let name = lastNameRef.current.value
        store.updateUserLastName(name)
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