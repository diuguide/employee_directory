import React from 'react';
import axios from 'axios';
import Entry from '../components/Entry'

class Home extends React.Component {
    state = {
        data: [],
        filteredData: []
    }
    componentDidMount() {
        axios('https://randomuser.me/api/?results=12',
      )
            .then((res) => {
               this.setState({data: res.data.results})
            }
            );
    }

    render() {
        return (
            <div>
            <Entry data={this.state.data}/>
            </div>
        )
    }

}

export default Home;