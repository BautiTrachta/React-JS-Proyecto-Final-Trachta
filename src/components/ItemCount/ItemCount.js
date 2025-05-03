import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    if (stock > 0) {
      onAdd(quantity);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "1rem" }}>
      <div>
        <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
        <span style={{ margin: "0 1rem" }}>{quantity}</span>
        <button onClick={() => setQuantity(q => Math.min(stock, q + 1))}>+</button>
      </div>
      <button onClick={handleAdd} disabled={stock === 0}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;