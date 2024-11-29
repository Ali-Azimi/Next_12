import ProductCard from "@/components/ProductCard";
import ProductList from "@/components/ProductList";
import ProductsErrorBoundary from "@/components/ProductsErrorBoundary";
import Link from "next/link";
import { Suspense } from "react";
import useSWR from "swr";

const ProductsPage = () => {
  return (
    <ProductsErrorBoundary>
      <Suspense fallback={<h1>LOADING FROM SUSPENSE</h1>}>
        <ProductList />
      </Suspense>
    </ProductsErrorBoundary>
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
