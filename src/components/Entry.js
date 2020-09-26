import React from 'react';
import "../styles/Entry.css";
function Entry(props) {
    return (
        <div className="row">
            <div className="col">
            <ul className="list-group">
                {props.data.map(result => (
                    <li className="list-group-item" key={result.id}>
                        <img alt={result.gender} className="img-fluid" src={result.picture.large} ></img>
                        <h3> {result.email} </h3>
                        <h3> {result.dob.date} </h3>
                        <h3> {result.gender} </h3>
                        <h3> {result.phone} </h3>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    )
}   

export default Entry;