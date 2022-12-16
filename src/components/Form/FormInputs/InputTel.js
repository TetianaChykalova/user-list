import React from 'react';
import s from './FormInputs.module.css'

function InputTel(props) {
    // console.log(props)

    let telRef = React.createRef()
    let dataItem = props.props.state.userData

    let telChanged = () => {
        let tel = telRef.current.value
        props.props.updateUserTel(tel)
    }

    let classInput = props.error&&dataItem.tel.length==0||props.error&&dataItem.tel.length>0&&!props.telResult ? s.inputError : s.input

    return (
        <div>
            <label className={s.label} htmlFor="user-tel">User Tel</label>
            <span>
                <input
                    className={classInput}
                    ref={telRef}
                    type="tel"
                    id="user-tel"
                    value={dataItem.tel}
                    onChange={telChanged}
                />
                {props.error&&dataItem.tel.length==0?<p className={s.errorMes}>This input can't be empty!</p>:""}
                {props.error&&dataItem.tel.length>0&&!props.telResult?<p className={s.errorMes}>Tel is invalid</p>:""}
            </span>
        </div>
    );
}

export default InputTel;