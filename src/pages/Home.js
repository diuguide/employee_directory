import React from 'react';
import axios from 'axios';
import Entry from '../components/Entry'
import Jumbotron from '../components/Jumbotron'
import moment from 'moment';

class Home extends React.Component {
    state = {
        data: [],
        originalData: []
    }
    componentDidMount() {
        axios('https://randomuser.me/api/?results=12',
        )
            .then((res) => {
                console.log("Success Component Did Mount: " + res.data.results) 
                this.setState({ data: res.data.results, originalData: res.data.results })
            }
            );
    }
    filterMen = () => {
        const filteredMen = this.state.originalData.filter(person => person.gender === ("male"))
        console.log(filteredMen)
        this.setState({ data: filteredMen}) 
    }
    filterWomen = () => {
        const filteredWomen = this.state.originalData.filter(person => person.gender === ("female"))
        // console.log(filteredWomen)
        this.setState({ data: filteredWomen }) 
    }
    filterDobAsc = () => {
        const ageAsc = this.state.originalData.sort((a,b) => parseInt(a.dob.age)  - parseInt(b.dob.age))
        this.setState({ data: ageAsc})
    }
    filterDobDsc = () => {
        const ageDsc = this.state.originalData.sort((a,b) => parseInt(b.dob.age)  - parseInt(a.dob.age))
        this.setState({ data: ageDsc})
    }
    refreshBtn = () => {
        window.location.reload()
    }
    render() {

        return (
            <div>
                <Jumbotron   
                 filterMen={this.filterMen}
                 filterWomen={this.filterWomen}
                 filterDobAsc={this.filterDobAsc}
                 filterDobDsc={this.filterDobDsc}
                 refreshBtn={this.refreshBtn} />
                <Entry data={this.state.data}
                  />
            </div>
        )
    }

}

export default Home;