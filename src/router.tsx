import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/templates/Layout/Layout";
import { ServicesContextProvider } from './contexts/homeServices';
import { CountryDetailsPage, HomePage } from "./components/pages";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ServicesContextProvider>
            <HomePage />
          </ServicesContextProvider>
        ),
      },
      {
        path: 'country/:name',
        element: <CountryDetailsPage />
      }
    ]
  }
])

export default router
