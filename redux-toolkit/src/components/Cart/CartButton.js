import classes from './CartButton.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { uiActions } from '../../store/ui-slice';


const CartButton = (props) => {

  const dispatch = useDispatch()
  const totalCartQuantity = useSelector(state => state.cart.totalQuantity);

  const cartToggleHandler = () => {
    dispatch(uiActions.toggle())
  }

  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCartQuantity}</span>
    </button>
  );
};

export default CartButton;
