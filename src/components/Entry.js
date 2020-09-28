import React from 'react';
import "../styles/Entry.css";
function Entry(props) {
    const filterGender = props.data.filter(person => person.gender === ("female"));
    return (
        <div className="row">
            <div className="col">
                {filterGender.map((male) => 
                <li key={male.cell}>
                    <img alt="profile" src={male.picture.large}></img>
                   <h3> {male.name.first} {male.name.last} {male.gender} #: {male.phone} </h3> 
                </li>
                )}
                <div>
                    
                </div>
            </div>
        </div>
    )
}
export default Entry;