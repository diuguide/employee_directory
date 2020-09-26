import React from 'react';
import axios from 'axios';

class Home extends React.Component {
    state = {
        data: [],
        filteredData: []
    }
    componentDidMount() {
        axios('https://randomuser.me/api/?results=120',
      )
            .then((res) => {
               this.setState({data: res.data.results})
            }
            );
    }

    render() {
        return (
            <div>
            <ul className="list-group">
                {this.state.data.map(result => (
                    <li className="list-group-item" key={result.id}>
                        <h3> {result.email} </h3>
                    </li>
                ))}
            </ul>
            </div>
        )
    }

}

export default Home;