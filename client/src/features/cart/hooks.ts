export const useProductsExist = (originProducts: any[], checkProduct: any) => {
  const productExists = originProducts.find(product => {
    return (
      product._id === checkProduct._id &&
      product.size === checkProduct.size &&
      product.color === checkProduct.color
    );
  });

  return productExists
};

export const useFindIndex = (originProducts: any[], checkProduct: any) => {
    const index = originProducts.findIndex(product => product._id === checkProduct._id)

    return index
}
