import React from 'react';

function Entry(props) {
    return (
        <div className="row">
            <div className="col">
                <ul className="list-group">
                    {props.data.map(result => (
                        <li className="list-group-item" key={result.id}>
                            <img alt={result.gender} className="img-fluid" src={result.picture.large} ></img>
                            <h3> {result.email} </h3>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Entry;