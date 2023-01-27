import React, {useState} from 'react';
import UsersText from "./UsersText";
import UsersList from "./UsersList";

import {Context} from "../../App";
import {useContext} from "react";
import FilterGender from "../Filter/FilterGender";
import FilterJob from "../Filter/FilterJob";

function Users(props) {
    const {store} = useContext(Context)

    // console.log(store.state.userData)
    const [userGenderFilter, setUserGenderFilter] = useState('All')
    const [userJobFilter, setUserJobFilter] = useState('')


    if(store.state.usersCount.length > 0) {
        return (
            <div>
                <FilterGender setUserGender={setUserGenderFilter}/>
                <FilterJob userJob={userJobFilter} setUserJob={setUserJobFilter}/>
                <UsersList count={store.state.usersCount} userGender={userGenderFilter} userJob={userJobFilter}/>
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