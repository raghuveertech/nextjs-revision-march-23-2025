type ProductId = string;
type Props = {
  params: Promise<{ productId: ProductId }>;
};

const ProductReviewsList = async (props: Props) => {
  const params = await props.params;
  const productId = params.productId;

  return (
    <>
      <h1>Product Reviews for product {productId}</h1>
    </>
  );
};

export default ProductReviewsList;
