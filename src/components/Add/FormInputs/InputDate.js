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
            <InputMask
                mask='99.99.9999'
                maskChair='_'
                ref={dateRef}
                onChange={dateChange}
            />
        </div>
    );
}

export default InputDate;