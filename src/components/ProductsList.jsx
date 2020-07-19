import React, { Component } from 'react'
import Product from './Product'

export default class ProductsList extends Component {
    render() {
        const { products } = this.props
        return (
            <div>
                <table className="productsTable">
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    {
                        products.map((product) => {
                            return (
                                <Product product={product} />)
                        })
                    }
                </table>
            </div>
        )
    }
}
