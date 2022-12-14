import React from 'react';

function UserItem(props) {
    console.log(props)

    return (
        <div>
            {/*<p>{props.props.id}</p>*/}
            <p>{props.props.name}</p>
            <p>{props.props.tel}</p>
        </div>
    );
}

export default UserItem;