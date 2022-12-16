import React from 'react';

function Pagination(props) {
    console.log(props)

    let pages = []

    for (let i = 1; i <= Math.ceil(props.totalUser.length/props.userPage); i++) {
        pages.push(i)
    }

    let pageButton = pages.map((value, index) => {
        return <button key={index}>{value}</button>
    })

    return (
        <div>
            {pageButton}
        </div>
    );
}

export default Pagination;
