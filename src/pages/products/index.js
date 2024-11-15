import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import useSWR from "swr";

const ProductsPage = () => {
  const { data, isLoading, error } = useSWR(
    "/products"
  );

  if (error) {
    return <h1>{error}</h1>;
  }

  if (isLoading) return <h1>LOADING ...</h1>;

  return (
    <>
      <h1>PRODUCT LIST</h1>
      <section className="row">
        {data.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </section>
    </>
  );
};

// https://fakestoreapi.com/products

// export async function getServerSideProps() {
//   try {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const data = await response.json();
//     return {
//       props: {
//         data,
//       },
//     };
//   } catch (error) {
//     console.log({ error });
//     // return {
//     //   notFound: true,
//     // };
//     return {
//       redirect: {
//         destination: "/harja",
//         permanent: false,
//       },
//     };
//   }
// }

export default ProductsPage;
