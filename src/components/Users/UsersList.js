import React, {useState} from 'react';
import UserItem from "./UserItem";
import Filter from "./Filter/Filter";
import Pagination from "./Pagination/Pagination";

function UsersList(props) {
    let item = props.count
    // console.log(item.length)

    const[filterText, setFilterText] = useState('all')

    const[currentPage, setCurrentPage] = useState(1)
    const[userPage, setUserPage] = useState(4)

    const lastPostIndex = currentPage * userPage
    const firstPostIndex = lastPostIndex - userPage
    const currentPost = item.slice(firstPostIndex, lastPostIndex)

    let pages = []
    for (let i = 1; i <= Math.ceil(item.length/userPage); i++) {
        pages.push(i)
    }

    let pageButton = pages.map((value, index) => {
        return <button key={index} onClick={() => {setCurrentPage(value)}} >{value}</button>
    })

    let filterUsers = currentPost.filter((user) => {
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

    console.log(filterUsers)
    console.log(userPage)

    return (
        <div>
            <Filter filterValurSelect={onFilterValueSelect}/>
            {addNewUserItem}
            {pageButton}
        </div>
    );
}

export default UsersList;