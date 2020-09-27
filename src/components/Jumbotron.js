import React from 'react';

function Jumbotron(props) {
    return (
        <div className="jumbotron bg-primary">
            <h1>Employee Directory</h1>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort By
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button class="dropdown-item" type="button">Filter Men</button>
                    <button class="dropdown-item" type="button">Filter Women</button>
                    <button class="dropdown-item" type="button">DOB Ascending</button>
                    <button class="dropdown-item" type="button">DOB Descending</button>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron