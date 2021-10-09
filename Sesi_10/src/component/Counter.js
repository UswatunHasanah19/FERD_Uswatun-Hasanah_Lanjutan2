import React from 'react';

export default class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    decremen = () => {
        this.setState({
            counter: this.state.counter -1
        })
    }

    increment = () => {
        this.setState({
            counter: this.state.counter +1
        })
    }

    render(){
        return (
            <div>
                <h3>{this.state.counter}</h3>
                <br />
                <button onClick={this.decremen}>-</button>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}
