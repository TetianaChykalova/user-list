import React, {useContext} from 'react';
import s from './FormInputs.module.css'
import {Context} from '../../../App'

function InputJob(props) {

    const {store} = useContext(Context)

    let jobRef = React.createRef()
    let dataItem = store.state.userData

    const refChanged = () => {
        let job = jobRef.current.value
        store.updateUserJob(job)
    }


    return (
        <div className='input'>
            <label className={s.label} htmlFor="user-first-name">User Job</label>
            <span>
                <input
                    className={s.input}
                    ref={jobRef}
                    type="text"
                    id="user-first-name"
                    value={dataItem.job}
                    onChange={refChanged}
                />
            </span>
        </div>
    );
}

export default InputJob;