import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SingleProductPage = () => {
  const router = useRouter();

  console.log(router.query);
  debugger;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (router.query.id) getProduct();
  }, [router.query]);

  const getProduct = () => {
    fetch(`https://fakestoreapi.com/products/${router.query.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        debugger;
        if (true) {
          router.push("/asdasd");
        }
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isLoading) return <h1>LOADING...</h1>;

  return (
    <>
      <h1>{data.title}</h1>
      <img width={200} src={data.image} />
      <p>{data.description}</p>
      <h4>price: {data.price}</h4>
    </>
  );
};

export default SingleProductPage;
