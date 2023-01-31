import React, {useContext} from 'react';
import s from './FormInputs.module.css'
import {Context} from '../../../App'

function InputTel(props) {
    const {store} = useContext(Context)

    let telRef = React.createRef()
    let dataItem = store.state.userData

    let telChanged = () => {
        let tel = telRef.current.value
        store.updateUserTel(tel)
    }

    let classInput = props.error&&dataItem.tel.length===0||props.error&&dataItem.tel.length>0&&!props.telResult ? s.inputError : s.input

    return (
        <div>
            <label className={s.label} htmlFor="user-tel">User Tel*<br/><span>in format +38</span></label>
            <span>
                <input
                    className={classInput}
                    ref={telRef}
                    type="tel"
                    id="user-tel"
                    value={dataItem.tel}
                    onChange={telChanged}
                />
                {props.error&&dataItem.tel.length===0?<p className={s.errorMes}>This input can't be empty!</p>:""}
                {props.error&&dataItem.tel.length>0&&!props.telResult?<p className={s.errorMes}>Tel is invalid</p>:""}
            </span>
        </div>
    );
}

export default InputTel;