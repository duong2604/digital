import { Rate, Space } from "antd";
import { useState } from "react";
import { useGetProductsQuery } from "../features/product/productsApiSlice";

const Products = () => {
  const [value, setValue] = useState(3);

  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.log(error);
    return <h2>Something went wrong!</h2>;
  }

  console.log(products);

  return (
    <div className="bg-[#F1F5F6]">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-2">
        <div className="grid grid-cols-1 gap-x-1 gap-y-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-1">
          {products?.map((product, index) => (
            <div
              key={index}
              className="border bg-white hover:shadow-md hover:shadow-[#2B38D1]"
            >
              <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md ">
                <img
                  src={product.image}
                  className="h-1/2 w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className=" mt-1 py-1 text-center">
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-md mb-2 px-1 font-semibold text-gray-700">
                    <a href={""}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <div className="flex items-center justify-between px-2">
                    <Space>
                      <Rate
                        onChange={setValue}
                        value={value}
                        className="text-[14px]"
                      />{" "}
                      <span className="text-[12px]">
                        ({product.numReviews} reviews)
                      </span>
                    </Space>
                  </div>
                </div>
                <p className="my-1 text-lg font-bold text-[#2B38D1]">
                  ${product.price}
                </p>
                <p className="mb-2 text-[14px] font-medium">
                  {product.countInStock ? (
                    <p>
                      <span className="text-green-500">In stock</span>{" "}
                      {product.countInStock} products
                    </p>
                  ) : (
                    <p className="text-xl font-bold text-red-500">
                      Out of stock
                    </p>
                  )}
                </p>
                {product.countInStock ? (
                  <button
                    className="mb-3 w-3/4 cursor-pointer rounded-3xl border bg-[#2b38d1] p-[10px] font-semibold text-white"
                    disabled
                  >
                    Add to cart
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Products;
