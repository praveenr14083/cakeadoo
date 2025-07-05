import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import ProductViewPage from "./pages/product/ProductViewPage";
import CartPage from "./pages/cart/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "product", element: <ProductViewPage /> },
      { path: "cart", element: <CartPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
