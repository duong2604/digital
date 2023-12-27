import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ForgotPassword,
  HomePage,
  Login,
  Register,
  ResetPassword,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
  return <RouterProvider router={router} />;
};
export default App;
