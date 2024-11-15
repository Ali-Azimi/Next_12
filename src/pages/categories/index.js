import ProductCard from "@/components/ProductCard";
import apiLog from "@/shared/utilities/apiLog";
import { usePathname } from "next/navigation";

const { useState, useEffect } = require("react");

const Categories = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategoryList(data);
      });
  }, []);

  useEffect(() => {
    const abortController = new AbortController();

    const endpoint = `https://fakestoreapi.com/products/category/${selectedCategory}`;
    const logData = {
      url: pathname,
      endpoint,
      time: new Date().toISOString(),
    };
    fetch(endpoint, { signal: abortController.signal })
      .then((res) => {
        logData.status = res.status;
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch(() => {})
      .finally(() => {
        apiLog(logData);
      });

    // cleanup function
    return () => {
      abortController.abort();
    };
  }, [selectedCategory]);

  const handleGetProducts = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <h1>{selectedCategory}</h1>
      {categoryList.map((category) => {
        return (
          <button
            onClick={() => handleGetProducts(category)}
            className="category-btn"
          >
            {category}
          </button>
        );
      })}
      <section className="row">
        {products.map((product) => {
          return <ProductCard item={product} key={product.id} />;
        })}
      </section>
    </>
  );
};

export default Categories;
