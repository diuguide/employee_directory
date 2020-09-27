import React from 'react';
import "../styles/Entry.css";
function Entry(props) {
    const filterGender = props.data.filter(person => person.gender.includes("male"));
    console.log(filterGender);
    console.log(props.data)
    // function filter() {
    // let filteredName = props.data.filter(person => person.gender.includes('male')).map(filteredName => (
    //         <li>
                
    //             <h1>{filteredName} Hello World </h1>
    //         </li>
    //     ))

    // console.log(filteredName)
        
    // }
    // filter();
    return (
        <div className="row">
            <div className="col">
                <div><h1> hellow world</h1>
                    {filterGender.map(filteredName => (
                        <li>
                            
                            <h1>{filteredName} Hello World </h1>
                        </li>
                    ))}
                </div>
                {/* <ul className="list-group">
                {props.data.map(result => (
                    <li className="list-group-item" key={result.id}>
                        <img alt={result.gender} className="img-fluid" src={result.picture.large} ></img>
                        <h3> {result.email} </h3>
                        <h3> {result.dob.date} </h3>
                        <h3> {result.gender} </h3>
                        <h3> {result.phone} </h3>
                    </li>
                ))}
            </ul> */}
            </div>
        </div>
    )


}

export default Entry;