import { notFound } from "next/navigation";

export default function Review({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  const reviewId = params.reviewId;
  const productId = params.productId;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      review id is {reviewId} for product with product id {productId}
    </h1>
  );
}
