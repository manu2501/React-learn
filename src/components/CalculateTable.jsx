import React, { Component } from 'react'

export default class CalculateTable extends Component {
    render() {
        return (
            <div>
                <h1>CalculateTable for {this.props.number}</h1>
                <h2>{this.props.number * 1}</h2>
            </div>
        )
    }
}
