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
  const [limit, setLimit] = useState<number>(16);
  const [skip, setSkip] = useState<number>(0);
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const { setIsLoading } = useContext(LoadingContext);

  const getProducts = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get<GetProductsResponseType>("/products", {
        params: {
          limit,
          skip,
        },
      });
      if (response.status === 200) {
        setProducts((prev) => [...prev, ...response.data.products]);
        setTotalProducts(response.data.total);
      }
    } catch (error) {
      toast.error(messages.LOGIN.ERR);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [limit, skip]);

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
