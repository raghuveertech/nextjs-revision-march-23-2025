//props is an object that has params property;
//params is a promise that returns an object with property productId;

import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ productId: string }>;
};

const ProductDetails = async (props: Props) => {
  const params = await props.params;
  const productId = Number(params.productId);
  if (productId > 1000) {
    notFound();
  }
  return <h1>Product Details of Product {productId}</h1>;
};
export default ProductDetails;
