import React, {useEffect, useState} from 'react';
import UserItem from "./UserItem";
import s from './UserList.module.css'
import Categories from "./Filter/Categories";

function UsersList(props) {
    let item = props.count
    // console.log(item)

    const[currentPage, setCurrentPage] = useState(1)
    const userPage = 4

    const lastPostIndex = currentPage * userPage
    const firstPostIndex = lastPostIndex - userPage
    const currentUser = item.slice(firstPostIndex, lastPostIndex)

    let pages = []

    // filters
    const gender = [
        {
            id: 0,
            gender: 'All',
        },
        {
            id: 1,
            gender: 'Male',
        },
        {
            id: 2,
            gender: 'Female',
        },
    ]
    const [filtered, setFiltered] = useState(gender)

    console.log(filtered)

    let genderFilter = (genderInput) => {
        if(genderInput === 'All') {
            setFiltered(gender)
        } else {
            let newGender = [...gender].filter(item => item.gender === genderInput)
            setFiltered(newGender)
        }
    }
    useEffect(() => {
        setFiltered(currentUser)
    }, [])

    // AddUserItem
    let addNewUserItem = currentUser.map( (user) =>  <UserItem props={user} key={user.id}/> )

    // Pagination
    for (let i = 1; i <= Math.ceil(item.length/userPage); i++) {
        pages.push(i)
    }
    let pageButton = pages.map((value, index) => {
        return <button className={s.page} key={index} onClick={() => {setCurrentPage(value)}} >{value}</button>
    })

    return (
        <div className={s.wrapper}>
            <div>
                <button onClick={() => {genderFilter('all')}}>All</button>
                <button onClick={() => {genderFilter('Male')}}>Male</button>
                <button onClick={() => {genderFilter('Female')}}>Female</button>
            </div>
            <div className={s.list}>
                {addNewUserItem}
            </div>
            <div className={s.pages}>
                {pageButton}
            </div>
        </div>
    );
}

export default UsersList;