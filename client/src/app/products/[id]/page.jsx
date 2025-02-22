export default async function ProductPage({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const res = await fetch(`http://localhost:3001/products/${id}`);

  if (res.status !== 200) {
    return (
      <main>
      <h1>Product Are Not Available</h1>
      </main>
    ); 
  }
  const product = await res.json();
  
  return (
    <main>
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} width="300" />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
    </main>
  );
}
