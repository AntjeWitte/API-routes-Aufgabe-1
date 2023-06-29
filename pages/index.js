import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Fische kaufen:</h1>
      <Link href={`/products`}>Hier gehts zu den Fischen: 🐡🐠🦐🐟🐊</Link>
    </div>
  );
}
