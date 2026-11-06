import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import OrderPizza from "./pages/OrderPizza";
import BuildPizza from "./pages/BuildPizza";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/order",
                element: <OrderPizza />
            },
            {
                path:"/build",
                element: <BuildPizza />
            },
            {
                path: "/build/:id",
                element: <BuildPizza />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path:"/checkout",
                element:<Checkout/>
            },
            {
                path:"/success",
                element:<OrderSuccess/>
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }, {
        path: "*",
        element: <NotFound />
    }
]);

export default router;