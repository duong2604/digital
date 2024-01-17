import {
  createBrowserRouter,
  RouterProvider,
  useNavigation,
} from "react-router-dom";
import {
  DetailedProduct,
  ForgotPassword,
  HomePage,
  Login,
  Register,
  ResetPassword,
} from "./pages";
import Layout from "./pages/Layout";
import { Cart } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products/:id",
        element: <DetailedProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "reset-password/:token",
    element: <ResetPassword />,
  },
]);

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#ffff]">
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
