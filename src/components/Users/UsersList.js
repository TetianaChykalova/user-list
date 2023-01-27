import React, {useState} from 'react';
import UserItem from "./UserItem";
import s from './UserList.module.css'

function UsersList(props) {
    let item = props.count

    const [currentPage, setCurrentPage] = useState(1)
    const userPage = 4

    const lastPostIndex = currentPage * userPage
    const firstPostIndex = lastPostIndex - userPage
    const currentUser = item.slice(firstPostIndex, lastPostIndex)

    let pages = []
    let addNewUserItem

    // AddUserItem
    {
        props.userGender === 'Male' || props.userGender === 'Female' ?
            addNewUserItem = currentUser
                .filter((person) => person.gender === props.userGender)
                .filter((person) => person.job.toLowerCase().includes(props.userJob.toLowerCase()))
                .map((user) => <UserItem props={user} key={user.id}/>)
            :
            addNewUserItem = currentUser
                .filter((person) => person.job.toLowerCase().includes(props.userJob.toLowerCase()))
                .map((user) => <UserItem props={user} key={user.id}/>)
    }
    // let addNewUserItem = currentUser
    //     .filter((person) => person.gender === props.userGender)
    //     .map( (user) =>  <UserItem props={user} key={user.id}/> )

    console.log(addNewUserItem)

    // Pagination
    for (let i = 1; i <= Math.ceil(item.length / userPage); i++) {
        pages.push(i)
    }
    let pageButton = pages.map((value, index) => {
        return <button className={s.page} key={index} onClick={() => {
            setCurrentPage(value)
        }}>{value}</button>
    })

    return (
        <div className={s.wrapper}>
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