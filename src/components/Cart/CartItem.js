import { useCart } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { removeItem } = useCart();

  const subtotal = item.precio * item.quantity; 

  return (
    <div style={{ borderBottom: "1px solid #ccc", marginBottom: "1rem", paddingBottom: "1rem" }}>
      <h4>{item.nombre}</h4> 
      <p>Precio: ${item.precio}</p> 
      <p>Cantidad: {item.quantity}</p>
      <p>Subtotal: ${subtotal}</p>
      <button onClick={() => removeItem(item.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;