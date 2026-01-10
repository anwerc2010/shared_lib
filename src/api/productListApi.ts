import { baseApi } from './baseApi';
import { ProductList, ProductDetails } from '../models/ProductList';
import productListResponseData from '../asserts/productListRespone.json';
import productDetailsResponseData from '../asserts/productDetailsResponse.json';

export const productListApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProductList: builder.query<ProductList, void>({
      queryFn: async () => {
        // Return the mock product list response from JSON file
        return { data: productListResponseData as ProductList };
      },
    }),
    getProductDetails: builder.query<ProductDetails, string>({
      queryFn: async (id) => {
        // Return the mock product details response from JSON file
        return { data: productDetailsResponseData as ProductDetails };
      },
    }),
  }),
});

export const { useGetProductListQuery, useGetProductDetailsQuery } = productListApi;

