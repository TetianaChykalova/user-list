import React from 'react';

function UserItem(props) {
    // console.log(props)

    return (
        <div>
            <h4>User {props.props.number}</h4>
            <p>Full name: {props.props.firstName} {props.props.lastName}</p>
            <p>Tel: {props.props.tel}</p>
            <p>Email: {props.props.email}</p>
            <p>Birth day: {props.props.birthDay}</p>
        </div>
    );
}

export default UserItem;