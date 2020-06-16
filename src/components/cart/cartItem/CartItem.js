
import React from 'react';

const CartItem = ({cart,deleteCart}) => {
    return (
        <div className="cart__item">
            <i onClick={ ()=> deleteCart(cart.id) } > x </i>
            <div className="cart__item-box">
                <div className="cart__item-box1">
                    <div className="cart__item-img">
                        <img src={process.env.PUBLIC_URL + cart.Img} alt="" />
                    </div>
                    <div className="cart__item-infor">
                        <p className="cart__item-name">{cart.Name} </p>
                        <p className="cart__item-size"><span>{cart.Size} </span> | Black with custom print</p>
                        <p className="cart__item-amount">Quantity : {cart.amount} </p>
                    </div>
                </div>
                <div className = 'cart__item-box2' >
                    <p className = "cart__item-price"> 
                        { (cart.Price * cart.amount).toFixed(2) } 
                    </p>
                </div>
            </div>
                
        </div>
    );
}

export default CartItem;