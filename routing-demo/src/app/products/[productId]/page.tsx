//props is an object that has params property;
//params is a promise that returns an object with property productId;

type Props = {
  params: Promise<{ productId: string }>;
};

const ProductDetails = async (props: Props) => {
  const params = await props.params;
  const productId = params.productId;
  return <h1>Product Details of Product {productId}</h1>;
};
export default ProductDetails;
