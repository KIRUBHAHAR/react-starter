import React from "react";

const UserOutput = (props) =>{
    return (
        <div>
            <p>I'm {props.name} . I'm {props.age} years old </p>
            <p>I'm a {props.job} working in {props.org}</p>
        </div>
    );
}

export default UserOutput;