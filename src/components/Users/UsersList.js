import React from 'react';
import UserItem from "./UserItem";

function UsersList(props) {
    let item = props.count
    console.log(item)

    let addNewUserItem = item.map( (user) =>  <UserItem props={user} key={user.id}/> )


    return (
        <div>
            {addNewUserItem}
        </div>
    );
}

export default UsersList;