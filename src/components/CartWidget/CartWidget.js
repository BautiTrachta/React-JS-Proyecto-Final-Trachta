import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useCart();

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Link to="/cart">
        <img
          src="/images/107831.png" 
          alt="Carrito"
          style={{ width: "24px", height: "24px", marginRight: "8px" }}
        />
      </Link>
      {totalQuantity > 0 && (
        <span style={{ background: "red", borderRadius: "50%", padding: "0.2rem 0.5rem", color: "white", fontSize: "14px" }}>
          {totalQuantity}
        </span>
      )}
    </div>
  );
};

export default CartWidget;