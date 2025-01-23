import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Error from "./Components/Error/Error";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import BookDetails from "./Components/BookDetails/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      { path: "/", 
        element: <Home></Home> },
      {
        path: "books/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        loader:()=> fetch('/booksData.json')
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
