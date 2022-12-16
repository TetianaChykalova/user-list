import React from 'react';

function InputGender(props) {

    const genderRefM = React.createRef()
    const genderRefF = React.createRef()


    const onChangeValue = (e) => {
        let gender = e.target.value
        props.props.updateUserGender(gender)
    }

    return (
        <div onChange={onChangeValue}>
            <input type="radio" value="Male" name="gender" ref={genderRefM} checked/> Male
            <input type="radio" value="Female" name="gender" ref={genderRefF}/> Female
        </div>
    );
}

export default InputGender;
