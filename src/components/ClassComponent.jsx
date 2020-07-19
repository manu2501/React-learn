import React, { Component } from 'react'

export default class ClassComponent extends Component {
    render() {
        const { name, heroName } = this.props

        return (
            <div>
                <h1>Hello {name} a.k.a {heroName}</h1>
            </div>
        )
    }
}
