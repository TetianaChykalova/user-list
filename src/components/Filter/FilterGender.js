import React from 'react';

function FilterGender(props) {


    const filterGenderVal = React.createRef()
    const onChangeGenderFilter = () => {
        props.setUserGender(filterGenderVal.current.value)
    }

    return (
        <div>
            <select name="gender" id="" onChange={onChangeGenderFilter} ref={filterGenderVal}>
                <option value="Male Female Another">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
        </div>
    );
}

export default FilterGender;