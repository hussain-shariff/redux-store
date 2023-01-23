import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';


const Cart = (props) => {
  const cartItems = useSelector(state=> state.shoppingCart.items);
  const cartElements = cartItems.map((item)=> <CartItem
  key = {item.id}
  item = {item}
  />)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        { cartElements }
      </ul>
    </Card>
  );
};

export default Cart;
