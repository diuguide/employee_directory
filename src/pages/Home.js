import React from 'react';
import axios from 'axios';
import Entry from '../components/Entry'
import Jumbotron from '../components/Jumbotron'

class Home extends React.Component {
    state = {
        data: [],
        filteredData: []
    }
    componentDidMount() {
        axios('https://randomuser.me/api/?results=12',
        )
            .then((res) => {
                console.log("Success Component Did Mount: " + res.data.results) 
                this.setState({ data: res.data.results })
            }
            );
    }

    function filterMen() {
        const filteredMen = this.state.data.filter(person => person.gender === ("male"));
        console.log(filteredMen);
        return filteredMen;
    }
    filterMen()
    filterWomen() {
        const filteredWomen = this.state.data.filter(person => person.gender === ("female"));
        console.log(filteredWomen);
        return filteredWomen;
    }
    render() {

        return (
            <div>
                <Jumbotron />
                <Entry data={this.state.data} filteredData={this.state.filteredData} />
            </div>
        )
    }

}

export default Home;