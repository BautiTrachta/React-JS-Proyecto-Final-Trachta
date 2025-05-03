import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsRef = collection(db, "productos");
    const q = categoryId
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef;

    getDocs(q)
      .then(res => {
        const items = res.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(items);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div style={{ padding: "1rem" }}>
      {loading ? <p>Cargando productos...</p> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;