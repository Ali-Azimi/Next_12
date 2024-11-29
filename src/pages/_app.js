import Layout from "@/components/Layout";
import ProductsLayout from "@/components/ProductsLayout";
import "@/styles/globals.css";
import { usePathname } from "next/navigation";
import { SWRConfig } from "swr";

const ProductLayoutPages = ["/products", "/about"];
const baseUrl = "https://fakestoreapi.com";

const fetcher = async (options) => {
  const response = await fetch(`${baseUrl}${options}`, {
    method: options.method,
  });
  const data = await response.json();
  return data;
};

export default function App({ Component, pageProps }) {
  const pathname = usePathname();
  const LayoutComponent = ProductLayoutPages.includes(pathname)
    ? ProductsLayout
    : Layout;

  return (
    <SWRConfig
      value={{ fetcher, revalidateOnFocus: true, refreshInterval: 2000, suspense: true }}
    >
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </SWRConfig>
  );
}
