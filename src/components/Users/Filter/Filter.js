import React from 'react';

function Filter(props) {

    const onFilterValueChange = (e) => {
        // console.log(e.target.value)
        props.filterValurSelect(e.target.value)
    }

    return (
        <div>
            <select name="gender" id="" onChange={onFilterValueChange}>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
        </div>
    );
}

export default Filter;