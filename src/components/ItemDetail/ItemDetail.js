import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";

const ItemDetail = ({ id, nombre, descripcion, precio, stock }) => {
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (quantity) => {
    const product = { id, nombre, descripcion, precio, stock };
    addItem(product, quantity);
    setAdded(true);
  };

  return (
    <div style={{ padding: "1rem", border: "1px solid gray", borderRadius: "8px" }}>
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p>Precio: ${precio}</p>
      <p>Stock: {stock}</p>

      {!added
        ? <ItemCount stock={stock} onAdd={handleAdd} />
        : <p>Producto agregado al carrito ✔️</p>}
    </div>
  );
};

export default ItemDetail;