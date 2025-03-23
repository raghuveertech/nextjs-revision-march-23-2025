type ProductId = string;
type ReviewId = string;
type Props = {
  params: Promise<{ productId: ProductId; reviewId: ReviewId }>;
};

const ProductReviewDetails = async (props: Props) => {
  const params = await props.params;
  const { reviewId, productId } = params;
  return (
    <>
      <p>
        This is a review {reviewId} for product {productId}
      </p>
    </>
  );
};

export default ProductReviewDetails;
