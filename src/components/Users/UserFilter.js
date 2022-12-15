import React, {useState, useCallback} from 'react';
import UserFilterCategoty from "./UserFilterCategoty";

function UserFilter(props) {
    const gender = [
        "Male",
        "Female",
        "Other",
    ]

    const users = props.arr
    // const filtered = props.arr.filter(item => {
        // return item.gender == 'Male'
    // })

    let productFilters = gender.map((item) => <UserFilterCategoty item={item} key={item}/> )

    // const [checked, setChecked] = useState(false)
    // const changeCheck = () => {
    //     setChecked(prev => !prev)
    // }

    const [state, setState] = useState({
        users: users,
        filters: new Set(),
    })

    // const handleFilterChange = useCallback(event => {
    //     setState(previousState => {
    //         let filters = new Set(previousState.filters)
    //         let products = PRODUCTS
    //
    //         if (event.target.checked) {
    //             filters.add(event.target.value)
    //         } else {
    //             filters.delete(event.target.value)
    //         }
    //
    //         if (filters.size) {
    //             products = products.filter(product => {
    //                 return filters.has(product.category)
    //             })
    //         }
    //
    //         return {
    //             filters,
    //             products,
    //         }
    //     })
    // }, [setState])

    return (
        <div>
            {productFilters}
        </div>
    );
}

export default UserFilter;


