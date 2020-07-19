import React, { Component } from 'react'

export default class ChildComponent extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.Handler("Child Component")}>click</button>
            </div>
        )
    }
}
