import { connect } from "react-redux";
import CartItem from "../components/CartItem";
import style from "../styles/Cart.module.css";

function Cart({ shoppingBasket }) {
  console.log(shoppingBasket);
  const totalPrice = shoppingBasket.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  return (
    <div className={style.cartContainer}>
      {shoppingBasket.map((product) => {
        return <CartItem {...product} key={product.id} />;
      })}
      {totalPrice > 0 ? <div>Total Price:$ {totalPrice}</div> : ""}
    </div>
  );
}
const mapStateToProps = (state) => ({
  shoppingBasket: state.shoppingBasket,
});

export default connect(mapStateToProps)(Cart);
