type ProductDetailsProps = {
  params: Promise<{ productId: string }>;
};

const ProductDetails = async (props: ProductDetailsProps) => {
  const params = await props.params;
  const { productId } = params;
  return (
    <div>
      <h1>Product Details Page of product {productId}</h1>
    </div>
  );
};

export default ProductDetails;
