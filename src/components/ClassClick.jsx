import React, { Component } from 'react'

export default class ClassClick extends Component {
    clickHandler = () => console.log("clicked Me")
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>click Me</button>
            </div>
        )
    }
}
