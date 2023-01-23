import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/showCartSlicer';

const CartButton = (props) => {
  const cartItems = useSelector(state=> state.shoppingCart.items.length);
  const showCart = useSelector(state=> state.cart.showCart);
  const dispatch = useDispatch();
  return (
    <button className={classes.button} onClick={()=>dispatch(cartActions.toggleCart())}>
      <span>{showCart ? 'Hide Cart' : "Show Cart"}</span>
      <span className={classes.badge}>{ cartItems }</span>
    </button>
  );
};

export default CartButton;
