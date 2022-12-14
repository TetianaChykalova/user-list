import React from 'react';

function Form(props) {
    // console.log(props.data.users)
    let dataItem = props.data.users.state.userData

    let nameRef = React.createRef()
    let telRef = React.createRef()

    let nameChanged = () => {
        let name = nameRef.current.value
        props.data.users.updateUserName(name)
    }

    let telChanged = () => {
        let tel = telRef.current.value
        props.data.users.updateUserTel(tel)
    }

    return (
        <form>
            <div>
                <label htmlFor="user-name">User Name</label>
                <input ref={nameRef} type="text" id="user-name" value={dataItem.name} onChange={nameChanged} />
            </div>

            <div>
                <label htmlFor="user-tel">User Tel</label>
                <input ref={telRef} type="tel" id="user-tel" value={dataItem.tel} onChange={telChanged} />
            </div>

        </form>
    );
}

export default Form;