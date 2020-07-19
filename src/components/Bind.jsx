import React, { Component } from 'react'

export default class Bind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            msg: "Hello World"
        }
    }

    // clickhandler = () => {
    //     this.setState({
    //         msg: "clicked ME"
    //     })
    // }

    clickhandler(){
        this.setState({
            msg:"Clicked Me"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.clickhandler.bind(this)}>click Me</button>
            </div>
        )
    }
}
