import React from 'react';

function InputEmail(props) {

    let emailRef = React.createRef()
    let dataItem = props.props.state.userData

    let emailChanged = () => {
        let email = emailRef.current.value
        props.props.updateUserEmail(email)
    }

    return (
        <div>
            <label htmlFor="user-email">User Email</label>
            <input
                ref={emailRef}
                type="email"
                id="user-tel"
                value={dataItem.email}
                required
                onChange={emailChanged}
            />
        </div>
    );
}

export default InputEmail;