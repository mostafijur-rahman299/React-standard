import classes from "./Cart.module.css";
import Modal from '../UI/Modal';
import { useContext } from "react";
import CartContext from "../store/cart-context";
import CartItem from './CartItem';


const Cart = props =>{

    const cartCTX = useContext(CartContext) ;
    const totalAmount = `$ ${cartCTX.totalAmount.toFixed(2)}`

    const cartItemRemoveHandler = id => {
        cartCTX.removeItem(id)
    }

    const cartItemAddHandler = item => {
        const newItem = {
            ...item,
            amount: 1
        }

        cartCTX.addItem(newItem)
    }

    const cartItems = <ul className={classes['cart-items']}>{cartCTX.items.map(item => (
            <CartItem
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                id={item.id}
                amount={item.amount}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
            /> 
        ))}</ul>

    const hasOrder = cartCTX.items.length > 0 ;
    
    return <Modal onClose={props.onHideCart}>
        <div>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>

            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasOrder && <button className={classes.button}>Order</button>}
            </div>
        </div>
    </Modal>
}

export default Cart;