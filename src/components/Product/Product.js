import React from 'react';
import './Product.css';



export default class Product extends React.Component {

    clickHandler(id) {
        this.props.onAddProduct(id);
    }

    render() {

        let { id, title, price, img } = this.props

        return (
            <>
                <div className='shop-item'>
                    <span className='shop-item-title'>{title}</span>
                    <img className='shop-item-image' src={img} />
                    <div className='shop-item-details'>
                        <span className='shop-item-price'>${price}</span>
                        <button className='shop-item-button' onClick={this.clickHandler.bind(this, id)}>ADD TO CART</button>
                    </div>
                </div>
            </>
        )
    }
}