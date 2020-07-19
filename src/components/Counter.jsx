import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    // increment = () => {
    //     this.setState((prevState) => {
    //         count: prevState.count + 1
    //     })
    // }

    increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    incrementFive = () => {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div>
                <p>count - {this.state.count}</p>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.incrementFive}>Increment 5 times</button>
            </div>
        )
    }
}
