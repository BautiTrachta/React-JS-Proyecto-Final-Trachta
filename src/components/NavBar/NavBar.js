import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem", backgroundColor: "#282c34", color: "white" }}>
      <div>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <h2>Mi Tienda</h2>
        </Link>
      </div>
      <div>
        <Link to="/productos" style={{ marginRight: "1rem", color: "white", textDecoration: "none" }}>Productos</Link>
        <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;