import classes from './CartItem.module.css';
import { ShoppingCartActions } from '../../store/shoppingCartSlicer';
import { useDispatch } from 'react-redux';

const CartItem = ({item}) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price } = item;

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total}{' '}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={()=>dispatch(ShoppingCartActions.removeItems(item))}>-</button>
          <button onClick={()=>dispatch(ShoppingCartActions.addItem(item))}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
