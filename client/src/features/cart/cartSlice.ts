import { createSlice } from '@reduxjs/toolkit';
import { CartState } from './types';
import { useProductsExist, useFindIndex } from './hooks';

export const initialState: CartState = {
  products: [], //products.quantity => Số lượng sản phẩm trong mỗi đơn hàng
  userId: '', //Thêm userId cho mỗi sản phẩm để get ra các sản phẩm với user tương ứng
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //Thêm sản phẩm vào giỏ hàng:
    addProduct: (state, action) => {
      state.userId = action.payload.userId;

      const originProducts = state.products;
      const checkProduct = action.payload;
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const productExists = useProductsExist(originProducts, checkProduct);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const indexProductExist = useFindIndex(originProducts, checkProduct);

      if (typeof productExists !== 'object') {
        originProducts.push(checkProduct);
      } else {
        const quantityProductAdded = checkProduct.quantity;
        originProducts[indexProductExist].quantity =
          originProducts[indexProductExist].quantity + quantityProductAdded;
      }
    },
    removeProduct: (state, action) => {
      const originProducts = state.products;
      const checkProduct = action.payload;

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const productExists = useProductsExist(originProducts, checkProduct);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const indexProductExist = useFindIndex(originProducts, productExists);

      state.products.splice(indexProductExist, 1);
    },
    //Thay đổi số lượng sản phẩm trong mỗi đơn hàng:
    changeQuantityInCart: (state, action) => {  
      const originProducts = state.products;
      const productChangeQuantity = action.payload.product;

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const productExists = useProductsExist(originProducts, productChangeQuantity);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const indexProductExist = useFindIndex(originProducts, productExists);

      const quantity = productExists.quantity;

      if (action.payload.type === 'asc') {
        productExists.quantity = quantity + 1;
      } else {
        if (productExists.quantity > 0) {
          productExists.quantity = quantity - 1;
        }
        //Trường hợp số lương sản phẩm bằng 0 => Xóa sản phẩm khỏi giỏ hàng:
        if(productExists.quantity === 0){
            state.products.splice(indexProductExist, 1);
        }
    }
    },

    //Checkout thành công => Xóa list sản phẩm vừa add khỏi cart:
    checkoutSuccess: (state, action) => {
      const userId = action.payload;
      //Lấy ra list sản phẩm TRỪ những sản phẩm của user hiện tại
      //Sau khi checkout => Số lượng sản phẩm của user hiện tại sẽ bằng 0
      const userProducts = state.products.filter(
        product => product.userId !== userId,
      );
      state.products = userProducts;
    },
  },
});

export const {
  addProduct,
  changeQuantityInCart,
  checkoutSuccess,
  removeProduct,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state: any) => state.cart;
