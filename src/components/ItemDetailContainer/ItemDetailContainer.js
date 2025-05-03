import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "productos", itemId);

    getDoc(docRef)
      .then((res) => {
        if (res.exists()) {
          setItem({ id: res.id, ...res.data() });
        } else {
          console.error("Producto no encontrado");
        }
      })
      .catch((error) => {
        console.error("Error al buscar producto:", error);
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  return (
    <div style={{ padding: "1rem" }}>
      {loading ? <p>Cargando detalle del producto...</p> : <ItemDetail {...item} />}
    </div>
  );
};

export default ItemDetailContainer;