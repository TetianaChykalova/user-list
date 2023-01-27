import React, {useContext} from 'react';
import s from './FormInputs.module.css'
import {Context} from '../../../App'

function InputFirstName(props) {

    const {store} = useContext(Context)

    let firstNameRef = React.createRef()
    let dataItem = store.state.userData

    let nameChanged = () => {
        let name = firstNameRef.current.value
        store.updateUserFirstName(name)
    }

    let classInput = props.error&&dataItem.firstName.length==0 ? s.inputError : s.input

    return (
            <div className='input'>
                <label className={s.label} htmlFor="user-first-name">User Name</label>
                <span>
                    <input
                        className={classInput}
                        ref={firstNameRef}
                        type="text"
                        id="user-first-name"
                        value={dataItem.firstName}
                        onChange={nameChanged}
                    />
                    {props.error&&dataItem.firstName.length==0 ? <p className={s.errorMes}>This input can't be empty!</p> : ""}
                </span>
            </div>
    );
}

export default InputFirstName;

// &&dataItem.firstName.length==0
