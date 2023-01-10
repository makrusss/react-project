import { createBrowserRouter, redirect } from "react-router-dom";
import Homepage from "../views/HomePage";
import ProductTable from "../components/productTable";
import DetailProduct from "../views/DetailProductPage";
import Register from "../views/RegisterPage";
import Login from "../views/LoginPage";
import Category from "../views/Categories";
import AddForm from "../components/addProductForm";
import EditCategoryForm from "../components/editCategoryForm";
import EditPage from "../views/editPage";
import AddCategory from "../components/addCategoryForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    loader: () => {
      if (!localStorage.access_token) {
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "",
        element: <ProductTable />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "categories",
        element: <Category />,
      },
      {
        path: "addProduct",
        element: <AddForm />,
      },
      {
        path: "addCategory",
        element: <AddCategory />,
      },
      {
        path: "editProduct/:id",
        element: <EditPage />,
      },
      {
        path: "editCategory/:id",
        element: <EditCategoryForm />,
      },
      {
        path: "/:id",
        element: <DetailProduct />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      if (localStorage.access_token) {
        return redirect("/");
      }
      return null;
    },
  },
]);

export default router;
