export default function ReviewList({
  params,
}: {
  params: { productId: string };
}) {
  const productId = params.productId;
  return (
    <>
      <h1>Prodcut {productId} Reviews:</h1>
      <h2>Review 1</h2>
      <h2>Review 2</h2>
      <h2>Review 3</h2>
      <h2>Review 4</h2>
    </>
  );
}
