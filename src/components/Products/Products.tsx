import { useContext, useEffect, useMemo, useState } from "react";
import { LoadingContext } from "../../contexts/LoadingProvider/LoadingProvider";
import { ProductType } from "../../models/product";
import { messages } from "../../utils/constants";
import { toast } from "react-toastify";
import { GetProductsResponseType } from "./products.type";
import axios from "../../services/axios";
import ProductCard from "../ProductCard/ProductCard";

const Products = (): React.ReactNode => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const { setIsLoading } = useContext(LoadingContext);
  const [data, setData] = useState<string>("");
  const getProducts = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get<GetProductsResponseType>("/products");
      console.log(response.data);
      if (response.status === 200) {
        setProducts(response.data.products);
      }
    } catch (error) {
      toast.error(messages.LOGIN.ERR);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const memoProducts = useMemo(() => {
    return products.map((product) => (
      <ProductCard key={product.id} {...product} />
    ));
  }, [products]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {memoProducts}
    </div>
  );
};

export default Products;
