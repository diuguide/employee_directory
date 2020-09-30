import React from 'react';

function Jumbotron(props) {
    return (
        <div className="jumbotron bg-primary shadow">
            <h1>Employee Directory</h1>
            <div className="row">
                <div className="col mb-4 ml-4">
                    <div className="dropdown">

                        <button className="btn btn-secondary dropdown-toggle shadow" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Filter By
                            </button>

                        <div className="dropdown-menu shadow" aria-labelledby="dropdownMenu3">
                            <button className="dropdown-item" type="button" onClick={() => { props.filterMen() }}>Filter Men</button>
                            <button className="dropdown-item" type="button" onClick={() => { props.filterWomen() }}>Filter Women</button>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle shadow" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sort By
                            </button>
                        <div className="dropdown-menu shadow" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" type="button" onClick={() => { props.filterDobAsc() }}>DOB Ascending</button>
                            <button className="dropdown-item" type="button" onClick={() => { props.filterDobDsc() }}>DOB Descending</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron