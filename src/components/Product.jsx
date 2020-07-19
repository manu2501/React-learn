import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        const { product } = this.props
        return (
            <tr>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
            </tr>
        )
    }
}