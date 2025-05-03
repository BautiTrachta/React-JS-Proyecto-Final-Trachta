import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { CartProvider } from "./context/CartContext";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart"; 
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import OrderConfirmation from "./components/OrderConfirmation/OrderConfirmation";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<h1 style={{ padding: "1rem" }}>Bienvenido a la tienda</h1>} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/order/:orderId" element={<OrderConfirmation />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;