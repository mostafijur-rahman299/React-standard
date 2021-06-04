import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from '../../store/cart-context';



const MealItem = props => {
    
    const cartCTX = useContext(CartContext)

    const {id, name, description, price} = props ;

    const addToCartHandler = amount => {
        cartCTX.addItem({
            id: id,
            name: name,
            description: description,
            price: price,
            amount: amount
        })
    }

    return <li className={classes.meal}>
        <div>
            <h3>{name}</h3>
            <div className={classes.description}>{description}</div>
            <div className={classes.price}>{`$ ${price.toFixed(2)}`}</div>
        </div>

        <div>
            <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
    </li>
}

export default MealItem ;