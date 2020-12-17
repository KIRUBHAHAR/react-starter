import React from "react";

const UserInput = (props) =>{
    return (
        <div>
        <input type="text" value={props.companyName} onChange={props.orgChange} />
        </div>
    );
}

export default UserInput;