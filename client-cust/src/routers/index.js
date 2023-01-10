import { createBrowserRouter } from "react-router-dom";
import Home from "../views/HomePage";
import Detail from "../views/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
]);

export default router
