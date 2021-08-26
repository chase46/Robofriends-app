import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
// import {robots} from './robots'
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'; 
//import Clock from '../components/Clock';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField : ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => this.setState({robots: users}))
    }

    OnSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
        const {robots, searchField} = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        if(robots.length === 0) {
            return <h1 className='load'>Loading</h1>
        } else {
            return (
                <div className='tc'>
                <h1 className="f1 robo">ROBOTS</h1>
                <SearchBox searchChange={this.OnSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <Cardlist robots = {filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
            )
            
        }
    }
} 

            
































// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             robots: [],
//             searchField: ''
//         }
//     }

    
//     onSearchChange = (event) => {
//         this.setState({searchField: event.target.value})
//     }
    
//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(users => this.setState({robots: users}))
//     }

    
//     render() {
//         const {robots, searchField} = this.state;
//         const filteredRobots = robots.filter(robot => {
//             return (
//                 robot.name.toLowerCase().includes(searchField.toLowerCase())
//             )
//         })

//         if (robots.length === 0) {
//             return (
//                 <h1>Loading</h1>
//             )  
//         } else {
//             return (
//                 <div className='tc'>
//                     <Clock/>
//                     <h1 className='f1'>RoboFriends</h1>
//                     <SearchBox searchChange = {this.onSearchChange} />
//                     <Scroll>
//                         <Cardlist robots = {filteredRobots} />
//                     </Scroll>
                    
//                 </div>
//             )
//         }        
//     }
// }
export default App

