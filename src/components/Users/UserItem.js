import React from 'react';
import {Avatar} from 'antd'
import s from './UserList.module.css'

function UserItem(props) {

    // console.log(props)

    return (
        <div className={s.userItem}>

            <div>
                <Avatar size={50} style={{backgroundColor: 'darkgreen', color: 'white'}}>
                    {props.props.firstName[0]}
                </Avatar>
            </div>

            <div>
                <p><span>Full name:</span> {props.props.firstName} {props.props.lastName}</p>
                <p><span>Tel:</span> {props.props.tel}</p>
                <p><span>Email:</span> {props.props.email}</p>
                <p><span>Date of birthday:</span> {props.props.birthDay}</p>
                {props.props.job&&<p><span>Job:</span> {props.props.job}</p>}
            </div>
        </div>
    );
}

export default UserItem;