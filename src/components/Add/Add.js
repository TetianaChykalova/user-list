import React from 'react';
import {useState} from "react";

function Add(props) {
    // console.log(props)

    let count = props.users.state.usersCount
    const [users, setUsers] = useState(1)

    let dataItem = props.users.state.userData

    let nameRef = React.createRef()
    let telRef = React.createRef()
    // console.log(document.querySelector('#user-name'))

    let nameInput = document.querySelector('#user-name')
    let telInput = document.querySelector('#user-tel')

    let nameChanged = () => {
        let name = nameRef.current.value
        props.users.updateUserName(name)
        nameInput.blur()
    }

    let telChanged = () => {
        let tel = telRef.current.value
        props.users.updateUserTel(tel)
        telInput.blur()
    }

    // console.log(count)
    // console.log(users)

    async function addNewUser() {
        setUsers(prev => prev + 1)
        props.users.addUser(users)

        await props.data.registerUserToFirebase(props.users.state.usersCount[props.users.state.usersCount.length - 1])
    }

    return (
        <div>
            <form>
                <div className='input'>
                    <label htmlFor="user-name">User Name</label>
                    <input
                        ref={nameRef}
                        type="text"
                        id="user-name"
                        value={dataItem.name}
                        required
                        onChange={nameChanged}
                    />
                </div>

                <div>
                    <label htmlFor="user-tel">User Tel</label>
                    <input
                        ref={telRef}
                        type="tel"
                        id="user-tel"
                        value={dataItem.tel}
                        required
                        onChange={telChanged}
                    />
                </div>

                <button type='submit' onClick={addNewUser}>Add new user</button>
            </form>
        </div>
    );
}

export default Add;