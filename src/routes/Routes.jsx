import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../components/Shared/Terms/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0" />,
      },
      { path: "login", element: <Login /> },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
    ],
  },
  {
    path: "category",
    element: <Main />,
    children: [
      {
        path: ":id",
        element: <Category />,
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/categories/${params.id}`),
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `http://localhost:5000/categories/${params.id}`
            );
            if (!response.ok) {
              throw new Error("Failed to fetch data");
            }
            return response.json();
          } catch (error) {
            console.error("Error loading data:", error);
            // Handle error, e.g., set a state variable to stop loading
          }
        },
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        // element: <News />,
        element: (
          <PrivateRoute>
            <News />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);

export default router;

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main />,
//     children: [
//       {
//         path: "/",
//         element: <Category />,
//         loader: () => fetch(`http://localhost:5000/news`),
//       },
//       {
//         path: "/category/:id",
//         element: <Category />,
//         loader: ({ params }) =>
//           fetch(`http://localhost:5000/categories/${params.id}`),
//       },
//     ],
//   },
//   {
//     path: "news",
//     element: <NewsLayout />,
//     children: [
//       {
//         path: ":id",
//         element: <News />,
//         loader: ({ params }) =>
//           fetch(`http://localhost:5000/news/${params.id}`),
//       },
//     ],
//   },
// ]);
