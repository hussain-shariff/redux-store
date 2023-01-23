import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='T-shirts'
          price={10}
          description='This is a first product - amazing!'
          id = {0}
        />
        <ProductItem
          title='Hoodie'
          price={30}
          description='This is a first product - amazing!'
          id = {1}
        />
        <ProductItem
          title='Jeans'
          price={25}
          description='This is a first product - amazing!'
          id = {2}
        />
      </ul>
    </section>
  );
};

export default Products;
