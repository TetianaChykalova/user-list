import React, {useState} from 'react';
import WithoutUsers from "./WithoutUsers";
import UsersList from "./UsersList";
import s from './UserFilter.module.css'
import {Context} from "../../App";
import {useContext} from "react";
import FilterGender from "../Filter/FilterGender";
import FilterJob from "../Filter/FilterJob";

function Users(props) {
    const {store} = useContext(Context)

    // console.log(store.state.userData)
    const [userGenderFilter, setUserGenderFilter] = useState('All')
    const [userJobFilter, setUserJobFilter] = useState('')


    return (
       <>
           {
               store.state.usersCount.length > 0 ?
                   <div>
                       <div className={s.div}>
                           <p className={s.filterText}>
                               You can filter the results
                           </p>
                           <FilterGender setUserGender={setUserGenderFilter}/>
                           <FilterJob userJob={userJobFilter} setUserJob={setUserJobFilter}/>
                       </div>
                       <UsersList count={store.state.usersCount} userGender={userGenderFilter} userJob={userJobFilter}/>
                   </div>
                   :
                   <div>
                       <WithoutUsers/>
                   </div>
           }
       </>
    )
}

export default Users;