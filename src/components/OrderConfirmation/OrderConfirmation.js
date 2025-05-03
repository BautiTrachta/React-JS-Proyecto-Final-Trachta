import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const OrderConfirmation = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      const docRef = doc(db, "orders", orderId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setOrder(docSnap.data());
      } else {
        setOrder(null);
      }
      setLoading(false);
    };

    fetchOrder();
  }, [orderId]);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: "1rem" }}>
      {order ? (
        <div>
          <h2>Gracias por tu compra!</h2>
          <p>ID de la compra: {orderId}</p>
          <p>Total: ${order.total}</p>
          <p>Nombre: {order.buyer.name}</p>
          <p>Email: {order.buyer.email}</p>
          <p>Dirección: {order.buyer.address}</p>
        </div>
      ) : (
        <p>No se encontró la compra.</p>
      )}
    </div>
  );
};

export default OrderConfirmation;