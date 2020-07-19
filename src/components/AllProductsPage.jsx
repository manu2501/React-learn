import React, { Component } from 'react'
import ProductsList from './ProductsList'
import '../css/style.scss'

export default class AllProductsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [
                { id: 1, productName: "Moto G5", quantity: 5, price: "Rs. 10000" },
                { id: 2, productName: "Samsung M1", quantity: 5, price: "Rs. 14000" },
                { id: 3, productName: "Poco F1", quantity: 5, price: "Rs. 18000" },
                { id: 4, productName: "Redmi Note 5", quantity: 5, price: "Rs. 12000" },
            ]
        }
    }

    render() {
        const { products } = this.state
        return (
            <div>
                <h1><u>Product List</u></h1>
                <ProductsList products={products} />
            </div>
        )
    }
}
