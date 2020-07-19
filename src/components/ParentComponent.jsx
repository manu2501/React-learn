import React, { Component } from 'react'
import '../css/style.scss'
import ChildComponent from './ChildComponent'

export default class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName : 'parent'
        }
    }
    
    greetParent = (child) => alert(`Hello ${this.state.parentName} from ${child}`)

    render() {
        return (
            <div>
                <ChildComponent Handler={this.greetParent} />
            </div>
        )
    }
}
