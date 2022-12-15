import React from 'react';

function UserFilterCategoty(props) {
    return (
        <div>
            <div>
                <label>
                    <input type="checkbox" value={props.item}/>
                    {props.item}
                </label>
            </div>
        </div>
    );
}

export default UserFilterCategoty;