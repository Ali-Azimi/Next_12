import useSWR from "swr";
import ProductCard from "../ProductCard";

const ProductList = () => {
  const { data, isLoading, error } = useSWR("/productsasdfadf");

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <h1>PRODUCT LIST</h1>
      <section className="row">
        {data?.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </section>
    </>
  );
};

export default ProductList;
