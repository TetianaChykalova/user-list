import React from 'react';
import InputMask from 'react-input-mask';
function InputDate(props) {
    // console.log(props)

    let dateRef = React.createRef()

    let dateChange = () => {
        let date = dateRef.current.value
        props.props.updateUserBirthDay(date)
    }

    return (
        <div>
            <label htmlFor="user-date">
                Your birthday:
            </label>
            <InputMask
                mask='99.99.9999'
                maskchair='_'
                ref={dateRef}
                onChange={dateChange}
                id="user-date"
            />
        </div>
    );
}

export default InputDate;