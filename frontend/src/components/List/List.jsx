import { useState, useEffect } from "react";
import "./List.css";

const List = ({ products }) => {
  const [prods, setProds] = useState([]);

  useEffect(() => {
    setProds(products);
  }, [products]);

  return (
    <>
      <h3>Products found</h3>
      <div className="cards">
        {prods.map((prod) => (
          <figure key={prod.id} className="card">
            <img src={prod.images[0]} alt={prod.title} />
            <div className="card-data">
              <figcaption>{prod.title}</figcaption>
              <p>{prod.description}</p>
            </div>
          </figure>
        ))}
      </div>
    </>
  );
};
export default List;
