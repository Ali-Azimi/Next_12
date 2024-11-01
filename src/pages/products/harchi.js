import Link from "next/link";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h1>PRODUCT LIST</h1>
      <section className="row">
        {data.map((item) => (
          <div className="card">
            <img src={item.image} />
            <h3>{item.title}</h3>
            <p>category: {item.category}</p>
            <span>{item.price}</span>
            <div className="btn">
              <Link
                href={{ pathname: "/products/[id]", query: { id: item.id } }}
              >
                View Detail
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ProductsPage;
