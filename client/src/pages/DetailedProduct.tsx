import { Link, useParams } from "react-router-dom";
import { useGetProductDetailQuery } from "../features/product/productsApiSlice";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, ButtonGroup, Divider, Rating, Stack } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";
import { addToCart, updateQuantity } from "../features/product/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import CircularIndeterminate from "../components/Loading";

const DetailedProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailQuery(id as string);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <CircularIndeterminate />
      </div>
    );
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }

  const handleIncrement = () => {
    if (quantity >= +product!.countInStock) {
      setQuantity(+product!.countInStock);
      toast.info("Quantity over in current stock");
    }
    if (quantity < +product!.countInStock) {
      setQuantity((pre) => pre + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity <= 1) {
      toast.info("Quantity is at least 1");
      setQuantity(1);
    }
    if (quantity > 1) {
      setQuantity((pre) => pre - 1);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      dispatch(updateQuantity({ product, quantity }));
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid xs={12} md={6}>
        <img src={product?.image} alt="" />
      </Grid>
      <Grid xs={12} md={6}>
        <Stack spacing={2} className="px-5">
          <div>
            <h3>{product?.name}</h3>
            <p>
              <Rating defaultValue={5} readOnly size="small" /> /{" "}
              {product?.numReviews} reviews / Write a review
            </p>
            <Divider className="w-[95%]" />
          </div>

          <div>
            <p>{product?.price}</p>
            <p>{product?.description}</p>
            <p>
              <VisibilityIcon />{" "}
              <span>15 people are viewing this right now </span>
            </p>
            <div className="flex justify-start gap-10">
              <Link to={`#`} className="hover:text-[#2B38D1]">
                <ShieldOutlinedIcon /> Shipping and Returns
              </Link>
              <Link to={`#`} className="hover:text-[#2B38D1]">
                <EmailOutlinedIcon /> Contact us
              </Link>
            </div>
            <Divider className="w-[95%]" />
          </div>
          <Stack direction={"row"} spacing={1}>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button onClick={handleDecrement}>-</Button>
              <Button onClick={handleAddToCart}>{quantity}</Button>
              <Button onClick={handleIncrement}>+</Button>
            </ButtonGroup>
            <button
              className="w-1/2 rounded-[30px] border bg-[#2B38D1] text-white hover:bg-red-500"
              onClick={handleAddToCart}
            >
              <AddShoppingCartIcon />
            </button>
          </Stack>
          <button className="w-full rounded-[30px] border bg-slate-700 py-2 text-white hover:bg-red-500">
            Buy it now
          </button>
        </Stack>
      </Grid>
    </Grid>
  );
};
export default DetailedProduct;
