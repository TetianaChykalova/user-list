import React from 'react';
import UsersText from "./UsersText";
import UsersList from "./UsersList";

function Users(props) {
    let count = props.users.usersCount
    // console.log(count)

    if(count > 0) {
        return (
            <div>
                <UsersList/>
            </div>
        );
    } else {
        return (
            <div>
                <UsersText/>
                <UsersList/>
            </div>
        );
    }
}

export default Users;