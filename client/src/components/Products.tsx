import { useGetProductsQuery } from "../features/product/productsApiSlice";
import CardProduct from "./CardProduct";
import CircularIndeterminate from "./Loading";

const Products = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return <CircularIndeterminate />;
  }

  if (error) {
    console.log(error);
    return <h2>Something went wrong!</h2>;
  }

  return (
    <div className="sx:grid-cols-1 grid w-full gap-x-2 gap-y-2 md:grid-cols-2 lg:grid-cols-4">
      {products?.map((product, index) => {
        return <CardProduct key={index} product={product} />;
      })}
    </div>
  );
};
export default Products;
