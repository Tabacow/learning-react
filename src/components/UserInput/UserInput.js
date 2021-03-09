import React from 'react'

const UserInput = (props) => {
    return (
    <div>
        <input onChange={props.changed} type="text" value={props.usernameAtual}></input>
    </div>
    );
}

export default UserInput