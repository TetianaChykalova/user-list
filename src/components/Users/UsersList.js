import React, {useState} from 'react';
import UserItem from "./UserItem";
import Filter from "./Filter/Filter";

function UsersList(props) {
    let item = props.count
    // console.log(item)


    const[users, setUsers] = useState(item)
    const[filterText, setFilterText] = useState('all')

    let filterUsers = users.filter((user) => {
        if(filterText === 'Male') {
            return user.isAvaible = false
        } else if(filterText === 'Female') {
            return user.isAvaible = true
        } else {
            return user
        }
    })
    let onFilterValueSelect = (filterVal) => {
        setFilterText(filterVal)
    }

    let addNewUserItem = filterUsers.map( (user) =>  <UserItem props={user} key={user.id}/> )

    return (
        <div>
            <Filter filterValurSelect={onFilterValueSelect}/>
            {addNewUserItem}
        </div>
    );
}

export default UsersList;