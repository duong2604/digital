import Grid from "@mui/material/Unstable_Grid2";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ButtonGroup, Stack, Button } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Cart = () => {
  return (
    <Stack className="my-8 px-5">
      <h2 className="my-8 text-center text-3xl font-semibold">Your cart</h2>
      <Grid container>
        <Grid sm={12} md={8}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Product</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="center">Subtotal</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="text-center">
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    <div className="flex items-center gap-1">
                      <img
                        src={`https://res.cloudinary.com/dl9ilwdzj/image/upload/v1704222056/xnijrf762r2addv5q5zx.jpg`}
                        alt=""
                        className="w-[100px]"
                      />
                      <div>
                        <h2>Iphone 14 pro max</h2>
                        <p>Apple</p>
                        <p>159.99$</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <ButtonGroup aria-label="outlined primary button group">
                      <Button>-</Button>
                      <Button>1</Button>
                      <Button>+</Button>
                    </ButtonGroup>
                  </TableCell>
                  <TableCell align="center">200.99$</TableCell>
                  <TableCell align="center">
                    <button className="hover:text-red-500">
                      <DeleteOutlineOutlinedIcon />
                    </button>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    <div className="flex items-center gap-1">
                      <img
                        src={`https://res.cloudinary.com/dl9ilwdzj/image/upload/v1704222056/xnijrf762r2addv5q5zx.jpg`}
                        alt=""
                        className="w-[100px]"
                      />
                      <div>
                        <h2>Iphone 14 pro max</h2>
                        <p>Apple</p>
                        <p>159.99$</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <ButtonGroup aria-label="outlined primary button group">
                      <Button>-</Button>
                      <Button>1</Button>
                      <Button>+</Button>
                    </ButtonGroup>
                  </TableCell>
                  <TableCell align="center">200.99$</TableCell>
                  <TableCell align="center">
                    <button className="hover:text-red-500">
                      <DeleteOutlineOutlinedIcon />
                    </button>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    <div className="flex items-center gap-1">
                      <img
                        src={`https://res.cloudinary.com/dl9ilwdzj/image/upload/v1704222056/xnijrf762r2addv5q5zx.jpg`}
                        alt=""
                        className="w-[100px]"
                      />
                      <div>
                        <h2>Iphone 14 pro max</h2>
                        <p>Apple</p>
                        <p>159.99$</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <ButtonGroup aria-label="outlined primary button group">
                      <Button>-</Button>
                      <Button>1</Button>
                      <Button>+</Button>
                    </ButtonGroup>
                  </TableCell>
                  <TableCell align="center">200.99$</TableCell>
                  <TableCell align="center">
                    <button className="hover:text-red-500">
                      <DeleteOutlineOutlinedIcon />
                    </button>
                  </TableCell>
                </TableRow>
                <TableRow className="flex items-center justify-between">
                  <TableCell colSpan={3}>
                    <button className="rounded-[30px] border bg-[#2B38D1] px-5 py-2 font-semibold text-white hover:bg-[#212529]">
                      Continue Shopping
                    </button>
                  </TableCell>
                  <TableCell colSpan={3}>
                    <button className="rounded-[30px] border bg-[#2B38D1] px-5 py-2 font-semibold text-white hover:bg-[#212529]">
                      Delete All
                    </button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid sm={12} md={4}>
          <div className="px-5">
            <h2 className="text-2xl font-bold">Order Total</h2>
          </div>
        </Grid>
      </Grid>
    </Stack>
  );
};
export default Cart;
