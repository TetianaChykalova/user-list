import React from 'react';

function InputLastName(props) {
    let lastNameRef = React.createRef()
    let dataItem = props.props.state.userData

    let nameChanged = () => {
        let name = lastNameRef.current.value
        props.props.updateUserLastName(name)
    }


    return (
        <div className='input'>
            <label htmlFor="user-last-name">User Surname</label>
            <input
                ref={lastNameRef}
                type="text"
                id="user-last-name"
                value={dataItem.lastName}
                required
                onChange={nameChanged}
            />
        </div>
    );
}

export default InputLastName;