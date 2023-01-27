import React from 'react';

function FilterJob(props) {

    const userJobRef = React.createRef()

    const onChangeJobFilter = () => {
        props.setUserJob(userJobRef.current.value)
    }

    return (
        <div>
            <input
                onChange={onChangeJobFilter}
                type="text"
                value={props.userJob}
                ref={userJobRef}
            />
        </div>
    );
}

export default FilterJob;