import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { db } from "../../firebase/config"; 
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: ""
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  
  const totalPrice = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const handleConfirm = async (e) => {
    e.preventDefault();
    setLoading(true);

    
    const order = {
      buyer: formData,
      items: cart.map(item => ({ id: item.id, name: item.nombre, price: item.precio, quantity: item.quantity })),
      total: totalPrice,
      date: new Date()
    };

    try {
      
      const docRef = await addDoc(collection(db, "orders"), order);
      console.log("Compra confirmada con ID:", docRef.id);

      
      clearCart();

      
      navigate(`/order/${docRef.id}`);
    } catch (error) {
      console.error("Error al crear la orden:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Completa tus datos para finalizar la compra</h2>

      <form onSubmit={handleConfirm}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Dirección:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <h3>Total a pagar: ${totalPrice}</h3>
        <button type="submit" disabled={loading}>
          {loading ? "Procesando..." : "Confirmar compra"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;