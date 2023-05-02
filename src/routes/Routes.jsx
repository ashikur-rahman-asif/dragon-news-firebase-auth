import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Terms/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/category",
    element: <Main/>,
    children: [
      {
        path: ":id",
        element: <Category/>,
        loader: ({ params }) =>
          fetch(`https://the-news-dragon-server-asif247.vercel.app/categories/${params.id}`),
      },
      {
        path: 'terms',
        element:<Terms/>
      }
    ],
  },
  {
    path: "news",
    element: <NewsLayout/>,
    children: [
      {
        path: ":id",
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://the-news-dragon-server-asif247.vercel.app/news/${params.id}`),
      },
    ],
  },
]);
export default router;
