import React, {useState} from 'react';
import UserItem from "./UserItem";
import Filter from "./Filter/Filter";

function UsersList(props) {
    let item = props.count
    console.log(item)

    const[filterText, setFilterText] = useState('all')

    const[currentPage, setCurrentPage] = useState(1)
    const[userPage, setUserPage] = useState(4)

    const lastPostIndex = currentPage * userPage
    const firstPostIndex = lastPostIndex - userPage
    const currentUser = item.slice(firstPostIndex, lastPostIndex)

    let pages = []

    // filter
    let filterUsers = item.filter((user) => {
        let gender = user.gender
        if(gender === 'Male') {
            return user.gender === "Mail"
        } else if (gender === "Female") {
            return user.gender === "Female"
        } else {
            return user
        }
    })
    // console.log(filterUsers)
    let onFilterValueSelect = (filterVal) => {
        setFilterText(filterVal)
        console.log(filterVal)
        console.log(filterText)
    }
    const onFilterValueChange = (e) => {
        // console.log(e.target.value)
        onFilterValueSelect(e.target.value)
    }

    // AddUserItem
    let addNewUserItem = item.map( (user) =>  <UserItem props={user} key={user.id}/> )

    // Pagination
    for (let i = 1; i <= Math.ceil(item.length/userPage); i++) {
        pages.push(i)
    }
    let pageButton = pages.map((value, index) => {
        return <button key={index} onClick={() => {setCurrentPage(value)}} >{value}</button>
    })

    return (
        <div>
            {/*<Filter filterValurSelect={onFilterValueSelect}/>*/}
            <div>
                <select name="gender" id="" onChange={onFilterValueChange}>
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>

            {addNewUserItem}
            {pageButton}
        </div>
    );
}

export default UsersList;