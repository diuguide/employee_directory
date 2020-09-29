import React from 'react';
import "../styles/Entry.css";
function Entry(props) {
    const filterGender = props.data;
    // function filterMen() {
    //     const filteredMen = props.data.filter(person => person.gender === ("male"));
    //     console.log(filteredMen);
    //     return filteredMen
    // }
    // function filterWomen() {
    //     const filteredWomen = props.data.filter(person => person.gender === ("female"));
    //     console.log(filteredWomen);
    //     return filteredWomen

    // }
    
    return (
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col mb-4">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sort By
                    </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button className="dropdown-item" type="button" onClick={filterMen}>Filter Men</button>
                                <button className="dropdown-item" type="button" onClick={filterWomen}>Filter Women</button>
                                <button className="dropdown-item" type="button">DOB Ascending</button>
                                <button className="dropdown-item" type="button">DOB Descending</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {filterGender.map((male) =>
                            <li key={male.cell}>
                                <img alt="profile" src={male.picture.large}></img>
                                <h3> {male.name.first} {male.name.last} {male.gender} #: {male.phone} </h3>
                            </li>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Entry;