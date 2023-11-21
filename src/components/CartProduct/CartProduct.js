import React from "react";
import './CartProduct.css';
import TShirt from '../../AllProducts/t-shirt.webp';

export default class CartProduct extends React.Component {

    clickHandler(id) {
        this.props.onRemove(id);
    }

    render() {

        let { id, title, price, img } = this.props

        return (
            <>
                <div className="cart-row">
                    <div className="cart-item cart-column">
                        <img className="cart-item-image" src={img} />
                        <span className="cart-item-title">{title}</span>
                    </div>
                    <div className="eshkemdard">
                        <span className="cart-price cart-column">{price}</span>
                        <div className="cart-quantity cart-column">
                            <button className="btn" type="button" onClick={this.clickHandler.bind(this, id)}>REMOVE</button>
                        </div>
                    </div>

                </div>
                <hr className="cart-hr"></hr>
            </>
        )
    }
}