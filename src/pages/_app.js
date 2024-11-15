import Layout from "@/components/Layout";
import ProductsLayout from "@/components/ProductsLayout";
import "@/styles/globals.css";
import { usePathname } from "next/navigation";
import { SWRConfig } from "swr";

const ProductLayoutPages = ["/products", "/about"];
const baseUrl = "http://localhost:3000/api";

const fetcher = async (options) => {
  const response = await fetch(`${baseUrl}${options.url}`, {
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
      value={{ fetcher, revalidateOnFocus: true, refreshInterval: 2000 }}
    >
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </SWRConfig>
  );
}
