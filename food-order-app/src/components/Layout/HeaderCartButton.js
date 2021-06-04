import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon"
import classes from './HeaderCartButton.module.css';
import CartContext from '../store/cart-context';


const HeaderCartButton = props => {

    const [buttonIsHighLighted, setButtonIsHighLighted] = useState(false)

    const cartCtx = useContext(CartContext) ;
    const {items} = cartCtx ;

    const numberOfCartItem = items.reduce((currentNumber, item)=>{
        return currentNumber + +item.amount
    }, 0)

    const buttonClass = `${classes.button} ${buttonIsHighLighted ? classes.bump : ''}`

    useEffect(()=>{
        if(items.length === 0){
            return;
        }

        setButtonIsHighLighted(true)

        const timer = setTimeout(()=>{
            setButtonIsHighLighted(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }

    }, [items])

    return(
        <button className={buttonClass} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>

            <span>Your cart</span>
            
            <span className={classes.badge}>{numberOfCartItem}</span>
        </button>
    )
}


export default HeaderCartButton;

