import React from 'react';
import s from './Filter.module.css'

function FilterGender(props) {


    const filterGenderVal = React.createRef()
    const onChangeGenderFilter = () => {
        props.setUserGender(filterGenderVal.current.value)
    }

    return (
        <div className={s.filterInput}>
            <select name="gender" id="" onChange={onChangeGenderFilter} ref={filterGenderVal} className={s.genderInput}>
                <option value="Male Female Another">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
        </div>
    );
}

export default FilterGender;