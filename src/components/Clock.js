import React, {Component} from 'react';

class Clock extends Component {
    constructor(props){
        super(props)
        this.state = {date: new Date()}
    }

    currentTime() {
        this.setState({
            time: new Date()
        })
    }
    
    componentDidMount() {
        setInterval(() => this.currentTime(), 1000)
    }

    render() {
        const {date} = this.state
        return(
            <div className="tr pa1">
                <h2>It is {date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}


export default Clock