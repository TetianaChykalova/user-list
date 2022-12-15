import React from 'react';
import UserItem from "./UserItem";
import UserFilter from "./UserFilter";

function UsersList(props) {
    let item = props.count
    // console.log(item)

    let addNewUserItem = item.map( (user) =>  <UserItem props={user} key={user.id}/> )


    return (
        <div>
            <UserFilter arr={item}/>
            {addNewUserItem}
        </div>
    );
}

export default UsersList;