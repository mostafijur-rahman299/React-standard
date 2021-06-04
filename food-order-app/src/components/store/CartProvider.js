import { useReducer } from "react";
import CartContext from "./cart-context";


const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {


    if(action.type === 'ADD'){

        // existing items 
        let items = [...state.items]

        // existing item
        const existingItemIndex = items.findIndex(
            item => item.id === action.item.id
        )
        const existingItem = items[existingItemIndex];

        

        if (existingItem){
            items[existingItemIndex] = {
                ...existingItem,
                amount: +existingItem.amount + +action.item.amount
            }
        }else{
            items = [action.item, ...items]
        }
        

        return {
            items: items,
            totalAmount: +state.totalAmount + +action.item.price * +action.item.amount
        }
    }

    if(action.type === 'REMOVE'){
         // existing items 
         let items = [...state.items]

        // existing item
        const existingItemIndex = items.findIndex(
            item => item.id === action.id
        )
        const existingItem = items[existingItemIndex];


        if(existingItem.amount === 1){
            items = items.filter(item => item.id !== action.id)
        }else{
            items[existingItemIndex] = {
                ...existingItem,
                amount: existingItem.amount - 1
            }
        }

        return {
            items: items,
            totalAmount: state.totalAmount - existingItem.price
        }

        
    }

    return defaultCartState
};



const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item})
    };
    
    const removeItemHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}


export default CartProvider ;