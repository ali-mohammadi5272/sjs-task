import { ProductType } from "../../models/product";

export interface GetProductsResponseType {
  products: ProductType[];
  total: number;
  skip: number;
  limit: number;
}
