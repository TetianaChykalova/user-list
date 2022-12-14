import React from 'react';

function InputLastName(props) {
    // console.log(props.error)
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
                onChange={nameChanged}
            />
            {props.error&&dataItem.lastName.length==0 ? <p>This input can't be empty!</p> : ""}
        </div>
    );
}

export default InputLastName;

// &&dataItem.lastName.length==0