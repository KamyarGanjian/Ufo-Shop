import React from 'react';
import './Store.css';
import Product from '../Product/Product';
import CartProduct from '../CartProduct/CartProduct'
import tshirt from '../../AllProducts/t-shirt.webp';
import appleWatch from '../../AllProducts/apple-watch.webp';
import airpod from '../../AllProducts/air-pod.webp';
import iPhone from '../../AllProducts/iphone.webp';
import purse from '../../AllProducts/purse.webp';
import shoes from '../../AllProducts/shoes.webp';
import actionFigure from '../../AllProducts/action-figure.webp';
import backpack from '../../AllProducts/backpack.webp';
import flash from '../../AllProducts/flash.webp';
import flowerPot from '../../AllProducts/flower-pot.webp';
import headphone from '../../AllProducts/headphone.webp';
import laptob from '../../AllProducts/laptob.webp';


export default class store extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            products: [
                { id: 1, title: 'T-SHIRT', price: 49.9, img: tshirt },
                { id: 2, title: 'APPLEWATCH', price: 199.9, img: appleWatch },
                { id: 3, title: 'AIRPOD', price: 99.9, img: airpod },
                { id: 4, title: 'iPHONE', price: 799.9, img: iPhone },
                { id: 5, title: 'PURSE', price: 59.9, img: purse },
                { id: 6, title: 'SHOES', price: 79.9, img: shoes },
                { id: 7, title: 'ACTION-FIGURE', price: 99.9, img: actionFigure },
                { id: 8, title: 'BACKPACK', price: 69.9, img: backpack },
                { id: 9, title: 'FLASH', price: 49.9, img: flash },
                { id: 10, title: 'FLOWER-POT', price: 19.9, img: flowerPot },
                { id: 11, title: 'HEADPHONE', price: 29.9, img: headphone },
                { id: 12, title: 'LAPTOP', price: 899.9, img: laptob },
            ],

            shoppingCart: [],
        }

        this.addProductToCart = this.addProductToCart.bind(this);
        this.emptyShoppingCart = this.emptyShoppingCart.bind(this);
        this.removeProductFromCart = this.removeProductFromCart.bind(this);
    }

    addProductToCart(productId) {

        let mainProduct = this.state.products.find(product => {
            return product.id === productId
        })

        this.setState(prevState => {
            return {
                shoppingCart: [...prevState.shoppingCart, mainProduct]
            }
        })

    }

    emptyShoppingCart() {
        this.setState({
            shoppingCart: []
        })
    }

    removeProductFromCart(productId) {
        let newShoppingCart = this.state.shoppingCart.filter(product => {
            return product.id !== productId
        })

        this.setState({
            shoppingCart: newShoppingCart
        })
    }

    render() {
        return (
            <>
                <section className='products'>
                    {this.state.products.map(product => (
                        <Product {...product} onAddProduct={this.addProductToCart} />
                    ))}
                </section>

                <section className='cart-products'>
                    <h1>SHOPPING CART</h1>
                    <div className='titles'>
                        <span>Item</span>
                        <span>Price</span>
                        <span>Doing</span>
                    </div>
                    <hr className='cart-hr'></hr>
                    {this.state.shoppingCart.map(product => (
                        <CartProduct {...product} onRemove={this.removeProductFromCart} />
                    ))}
                    <section className='buttons'>
                        <button className='clear-btn' type='button' onClick={this.emptyShoppingCart}>Clear</button>
                        <button className='buy-btn' type='button'>Buy</button>
                    </section>
                </section>
            </>
        )
    }
}