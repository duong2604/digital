import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ForgotPassword,
  HomePage,
  Login,
  Register,
  ResetPassword,
} from "./pages";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
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
    <div className="flex min-h-screen flex-col">
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
