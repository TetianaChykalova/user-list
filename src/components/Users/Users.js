import React from 'react';
import UsersText from "./UsersText";
import UsersList from "./UsersList";

function Users(props) {
    let count = props.users.state.usersCount
    // console.log(count)

    if(count.length > 0) {
        return (
            <div>
                <UsersList count={count}/>
            </div>
        );
    } else {
        return (
            <div>
                <UsersText/>
            </div>
        );
    }
}

export default Users;