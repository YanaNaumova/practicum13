import { connect } from "react-redux";
import { addToCart } from "../redux/actions";
import styles from "../styles/ProductList.module.css";

function ProductList({ producteList, addToCart, shoppingBasket }) {
  return (
    <div className={styles.productListContainer}>
      {producteList.map((product) => {
        return (
          <div className={styles.productContainer} key={product.id}>
            <p>{product.productName}</p>
            <p>$ {product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
}
const mapStateToProps = (state) => ({
  producteList: state.producteList,
});

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
