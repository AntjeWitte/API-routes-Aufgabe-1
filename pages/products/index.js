import useSWR from "swr";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductList() {
  const { data, isLoading } = useSWR("/api/products", fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <h1>Viele, viele Fische:</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}{" "}
      </ul>
    </>
  );
}
