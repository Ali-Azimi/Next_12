import Head from "next/head";
import { useEffect } from "react";

const AboutPage = () => {

  useEffect(() => {
    console.log("EFFECT")
  }, [])

  const handleClick = () => {
    console.log("CLICKED!!!")
  }
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="this page for foaln ..." />
      </Head>
      <h1>ABOUT</h1>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
};

export default AboutPage;
