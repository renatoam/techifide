import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import Layout from "./components/templates/Layout/Layout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      }
    ]
  }
])

export default router
