import React from 'react';

function InputFirstName(props) {
    // console.log(props.error)

    let firstNameRef = React.createRef()
    let dataItem = props.props.state.userData

    let nameChanged = () => {
        let name = firstNameRef.current.value
        props.props.updateUserFirstName(name)
    }


    return (
            <div className='input'>
                <label htmlFor="user-first-name">User Name</label>
                <input
                    ref={firstNameRef}
                    type="text"
                    id="user-first-name"
                    value={dataItem.firstName}
                    onChange={nameChanged}
                />
                {props.error&&dataItem.firstName.length==0 ? <p>This input can't be empty!</p> : ""}
            </div>
    );
}

export default InputFirstName;

// &&dataItem.firstName.length==0
