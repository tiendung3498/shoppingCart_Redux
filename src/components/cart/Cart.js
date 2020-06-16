  
import React, {useRef,useEffect,useState} from "react";
import "./Cart.scss";
import { useSelector,useDispatch } from "react-redux";

import { Delete , fetchCart } from "../../actions/Cart";
import CartItem from "./cartItem/CartItem";
var FontAwesome = require('react-fontawesome');


const Cart = () => {
    const toggleCart = useRef();
    const [amount , setAmount] = useState(0);
    const [totalPrice , setTotalPrice] = useState(0);
    const dispatch =useDispatch();
    const cart = useSelector(state => state.cart.list);



    useEffect(() => {
        dispatch(fetchCart());
    }, []);
    useEffect(() => {
        if( cart.length >0 ){
            setAmount(cart.map(x => x.amount).reduce( (a,b)=> a+b));
            setTotalPrice(cart.map(x => x.Price*x.amount).reduce( (a,b)=> a+b));
        }else{
            setAmount(0);
            setTotalPrice(0);
        }
    }, [cart]);
    const showCart = () =>{
        toggleCart.current.classList.add("toggle")
    }
    const closeCart = () =>{
        toggleCart.current.classList.remove("toggle")
    }
    const deleteCart = id =>{
        dispatch(Delete(id));
    }

    return (
        <div className="cart" ref={toggleCart}>
            <p className="cart__close" onClick={closeCart} >X</p>
            <div className="cart__box"> 
                <div className="cart__toggle" onClick={showCart} >
                <i> <FontAwesome className = "fas fa-shopping-bag"
                                 size = '3x'
                                 name = 'fas fa-shopping-bag' />
               </i>                     
                    <p>
                        <span>{amount}</span>
                    </p>
                </div>
                <div className="cart__list">
                    {
                        cart.map( c => 
                            <CartItem key={c.id} cart = {c} deleteCart ={deleteCart} />
                        )
                    }
                </div>
                <div className="cart__total">
                    <div className="cart__total-box">
                        <div className="cart__total-price">
                            <p>Subtotal</p>
                            <p>
                                <span> {totalPrice.toFixed(2)}</span>
                                <span>OR UP TO 9 <small>x</small>  {(totalPrice/9).toFixed(2)}</span>
                            </p>
                        </div>
                        <button>checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;