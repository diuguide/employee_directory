import React from 'react';
import "../styles/Entry.css";
function Entry(props) {
    
    return (
        <div className="row">
            <div className="col">
                
                <div className="row">
                    <div className="col">
                        <table className="shadow">
                            <tr>
                                <th>Photo</th>
                                <th>First</th>
                                <th>Last</th>
                                <th>Gender</th>
                                <th>Phone Number</th>
                                <th>Age</th>
                            </tr>
                            {props.data.map((entry) =>
                                <tr key={entry.cell}>
                                    <td><img alt="profile" src={entry.picture.large} /></td>
                                    <td>{entry.name.first}</td>
                                    <td>{entry.name.last}</td>
                                    <td>{entry.gender}</td>
                                    <td>#{entry.phone}</td>
                                    <td>{entry.dob.age}</td>
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