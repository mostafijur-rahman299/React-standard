import ProductItem from './ProductItem';
import classes from './Products.module.css';


const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: 'this is my first book',
    description: 'my first i ever wrote',
    price: 34
  },
  {
    id: 2,
    title: 'this is my first book',
    description: 'my first i ever wrote',
    price: 343
  },
  {
    id: 3,
    title: 'this new book',
    description: 'my first i ever wrote',
    price: 55
  },
  {
    id: 5,
    title: 'is book',
    description: 'my ever wrote',
    price: 30
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          id={product.id}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
