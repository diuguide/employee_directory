import React from 'react';

function Form(props) {
    return (
        <>
            <h1>Hello {props.fullName}</h1>
            <h1>Email: {props.email}</h1>
            <input name="fullName" value={props.fullName} type="text" onChange={props.handleInputChange} />
            <input name="email" value={props.email} type="text" onChange={props.handleInputChange} />
            <button type="button" onClick={props.handleSubmit}>Submit</button>
        </>
    )
}
export default Form;