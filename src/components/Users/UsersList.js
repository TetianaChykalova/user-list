import React, {useState} from 'react';
import UserItem from "./UserItem";
import s from './UserList.module.css'
import Categories from "./Filter/Categories";

function UsersList(props) {
    let item = props.count
    // console.log(item)

    // filter
    const [data, setData] = useState(Categories)

    const filterResult = (item) => {
        Categories.filter(getItem => {
            return getItem.gender === item
        })
        setData(Categories)
    }

    const[currentPage, setCurrentPage] = useState(1)
    const userPage = 4

    const lastPostIndex = currentPage * userPage
    const firstPostIndex = lastPostIndex - userPage
    const currentUser = item.slice(firstPostIndex, lastPostIndex)

    let pages = []

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
                <button onClick={() => setData(Categories)}>All</button>
                <button onClick={() => filterResult('Mail')}>Male</button>
                <button onClick={() => filterResult('Female')}>Female</button>
            </div>
            <div className={s.list}>
                {addNewUserItem}
                {/*{data.map((value) => {*/}
                {/*    const {id, gender} = value*/}
                {/*})}*/}
            </div>
            <div className={s.pages}>
                {pageButton}
            </div>
        </div>
    );
}

export default UsersList;