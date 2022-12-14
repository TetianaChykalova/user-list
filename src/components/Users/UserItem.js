import React from 'react';

function UserItem(props) {
    console.log(props)

    return (
        <div>
            <p>Full name: {props.props.firstName} {props.props.lastName}</p>
            <p>Tel: {props.props.tel}</p>
            <p>Email: {props.props.email}</p>
        </div>
    );
}

export default UserItem;