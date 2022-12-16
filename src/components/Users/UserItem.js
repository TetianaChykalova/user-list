import React from 'react';
import {Avatar} from 'antd'
import s from './UserList.module.css'

// import 'antd/lib/avatar/style'

function UserItem(props) {
    // console.log(props)

    return (
        <div className={s.userItem}>
            <h4>User {props.props.number}</h4>

            <div>
                <Avatar size={50} style={{backgroundColor: "darkgreen", color: 'white'}}>
                    {props.props.firstName[0]}
                </Avatar>
            </div>

            <div>
                <p><span>Full name:</span> {props.props.firstName} {props.props.lastName}</p>
                <p><span>Tel:</span> {props.props.tel}</p>
                <p><span>Email:</span> {props.props.email}</p>
                <p><span>Date of birthday:</span> {props.props.birthDay}</p>
            </div>
        </div>
    );
}

export default UserItem;