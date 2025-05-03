import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart } = useCart();

  
  const totalPrice = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div style={{ padding: "1rem" }}>
        <h2>Tu carrito está vacío</h2>
        <Link to="/productos">Ir al catálogo</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Carrito de compras</h2>
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <h3>Total: ${totalPrice}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
      <Link to="/checkout"><button>Finalizar compra</button></Link>
    </div>
  );
};

export default Cart;