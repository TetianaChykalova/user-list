import React from 'react';

function InputTel(props) {

    let telRef = React.createRef()
    let dataItem = props.props.state.userData

    let telChanged = () => {
        let tel = telRef.current.value
        props.props.updateUserTel(tel)
    }

    return (
        <div>
            <label htmlFor="user-tel">User Tel</label>
            <input
                ref={telRef}
                type="tel"
                id="user-tel"
                value={dataItem.tel}
                onChange={telChanged}
            />
            {/*{props.error&&dataItem.tel.length==0?<p>Check</p>:""}*/}
        </div>
    );
}

export default InputTel;