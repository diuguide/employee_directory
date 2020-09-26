import React from 'react';
import axios from 'axios';

class Home extends React.Component {
    state = {
        data: [],
        filteredData: []
    }
    componentDidMount() {
        axios('https://randomuser.me/api/?results=20',
      )
            .then((res) => {
               this.setState({data: res.data.results})
            }
            );
    }

    render() {
        return (
            <div>
                {/* <ul className="list-group">
                    {data.map(result => {
                        <li className="list-group-item"> {result.name} </li>
                    })}

                </ul> */}

            </div>
        )
    }

}

export default Home;