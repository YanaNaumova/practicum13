import { connect } from "react-redux";
import { removeFromCart, updateCartQuantity } from "../redux/actions";
import styles from "../styles/CartItem.module.css";
import { useState } from "react";

function CartItem({
  removeFromCart,
  updateCartQuantity,
  productName,
  price,
  id,
}) {
  const [quantity, setQuantity] = useState(1);
  function handleInput(e) {
    const newValue = e.target.value;
    if (newValue >= 1 && newValue <= 100) {
      setQuantity(newValue);
      updateCartQuantity(id, newValue);
    }
  }

  return (
    <div className={styles.cartItemContainer}>
      <p>{productName}</p>
      <p>$ {price}</p>
      <input
        type="number"
        min={1}
        max={100}
        value={quantity}
        onChange={handleInput}
      />
      <button onClick={() => removeFromCart(id)}>Remove</button>
    </div>
  );
}

const mapDispatchToProps = {
  removeFromCart,
  updateCartQuantity,
};

export default connect(null, mapDispatchToProps)(CartItem);
