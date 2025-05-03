import { Link } from "react-router-dom";

const Item = ({ id, nombre, descripcion, precio, imagen }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
      <h3>{nombre}</h3>
      <img src={imagen} alt={nombre} width="200" />
      <p>{descripcion}</p>
      <p><strong>${precio}</strong></p>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;