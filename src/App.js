import React, { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from './store/showCartSlicer';
import Notification from './components/UI/Notification';
import { ShoppingCartActions } from './store/shoppingCartSlicer';

let isInitial = true;
function App() {
  const showCart = useSelector(state=> state.cart.showCart);
  const cart = useSelector(state=> state.shoppingCart);
  const notifcation = useSelector(state=> state.cart.notification);
  const dispatch = useDispatch();


  
  useEffect(()=>{
    const sendCartData = async() =>{

      dispatch(cartActions.setNotification({
        title : 'Pending',
        message : 'Sending data...',
        status : 'Sending'
      }));

      const response = await fetch("https://redux-backend-60f2a-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",{
        method : 'PUT',
        body : JSON.stringify({items: cart.items})
      });

      if (!response.ok){
        throw new Error('Sending cart data failed.')
      }

      dispatch(cartActions.setNotification({
        title : 'Success!',
        message : 'Sent cart data successfully',
        status : 'success'
      }));
    }

    if (isInitial){
      isInitial = false;
      return;
    }

    if (cart.isChange){
    sendCartData().catch(error=>{
      dispatch(cartActions.setNotification({
        title : 'Error!',
        message : 'Failed to send cart data',
        status : 'error'
      }));
    });
  }
    
  }, [cart, dispatch])
  
    useEffect(()=>{
    fetch("https://redux-backend-60f2a-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json")
      .then(res=> res.json())
      .then(data=> dispatch(ShoppingCartActions.replaceCart(data)))
  }, []);
  
  return (
    <>
      {notifcation &&  <Notification
      status={ notifcation.status }
      title = { notifcation.title }
      message = { notifcation.message }/>}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
