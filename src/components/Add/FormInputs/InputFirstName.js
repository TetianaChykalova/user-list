import React from 'react';

function InputFirstName(props) {
    // console.log(props)

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
                    required
                    onChange={nameChanged}
                />
            </div>
    );
}

export default InputFirstName;
