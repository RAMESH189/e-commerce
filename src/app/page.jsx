import ProductList from "@/components/ProductList";

export default async function Home() {
  const response = await fetch("https://fakestoreapi.com/products")
  const data = await response.json();
  return (
    <div className="">
      <ProductList data={data} />
    </div>
  );
}
