import { Outlet, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Outlet /></>,
    children: [
      {
        index: true,
        element: <HomePage />,
      }
    ]
  }
])

export default router
