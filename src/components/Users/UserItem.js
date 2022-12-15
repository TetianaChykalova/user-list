import React from 'react';
import {Avatar} from 'antd'

// import 'antd/lib/avatar/style'

function UserItem(props) {
    // console.log(props)

    return (
        <div>
            <h4>User {props.props.number}</h4>

            <Avatar size={50} style={{backgroundColor: "darkgreen", color: 'white'}}>
                {props.props.firstName[0]}
            </Avatar>

            <div>
                <p>Full name: {props.props.firstName} {props.props.lastName}</p>
                <p>Tel: {props.props.tel}</p>
                <p>Email: {props.props.email}</p>
                <p>Birth day: {props.props.birthDay}</p>
            </div>
        </div>
    );
}

export default UserItem;