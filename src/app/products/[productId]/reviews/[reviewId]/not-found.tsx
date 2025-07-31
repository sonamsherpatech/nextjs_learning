"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathName = usePathname();
  const prodcutId = pathName.split("/")[2];
  const reviewId = pathName.split("/")[4];

  return (
    <div>
      <h2>
        pathName : {pathName}
        Review {reviewId} Not found for product {prodcutId}
      </h2>
    </div>
  );
}
