import React from 'react';
import "../styles/Entry.css";
function Entry(props) {    
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
                                <button className="dropdown-item" type="button" onClick={() => { props.filterMen() }}>Filter Men</button>
                                <button className="dropdown-item" type="button" onClick={() => { props.filterWomen() }}>Filter Women</button>
                                <button className="dropdown-item" type="button">DOB Ascending</button>
                                <button className="dropdown-item" type="button">DOB Descending</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table>
                            <tr>
                                <th></th>
                                <th>First</th>
                                <th>Last</th>
                                <th>Gender</th>
                                <th>Phone Number</th>
                            </tr>
                            {props.data.map((entry) =>
                            <tr key={entry.cell}>
                                <td><img alt="profile" src={entry.picture.large}/></td>
                                <td>{entry.name.first}</td>
                                <td>{entry.name.last}</td>
                                <td>{entry.gender}</td>
                                <td>#{entry.phone}</td>
                            </tr>
                            )}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Entry;