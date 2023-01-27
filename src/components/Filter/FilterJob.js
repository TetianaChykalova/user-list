import React from 'react';
import s from './Filter.module.css'

function FilterJob(props) {

    const userJobRef = React.createRef()

    const onChangeJobFilter = () => {
        props.setUserJob(userJobRef.current.value)
    }

    return (
        <div className={s.filterInput}>
            <input
                className={s.jobInput}
                onChange={onChangeJobFilter}
                type="text"
                value={props.userJob}
                ref={userJobRef}
            />
        </div>
    );
}

export default FilterJob;