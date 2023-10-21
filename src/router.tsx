import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import Layout from "./components/templates/Layout/Layout";
import CountryDetailsPage from "./components/pages/CountryDetailsPage/CountryDetailsPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'country/:name',
        element: <CountryDetailsPage />
      }
    ]
  }
])

export default router
