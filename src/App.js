import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Restaurant from "./components/Restaurant/Restaurant";
import Blog from "./components/Blog/Blog";
import RestuIndiItemDisplay from "./components/RestuIndiItemDisplay/RestuIndiItemDisplay";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        { path: "localhost:3000", element: <Restaurant /> },
        { path: "/home", element: <Home /> },
        { path: "/about", element: <About /> },
        {
          path: "/restaurant",
          loader: () => {
            return fetch(
              "https://www.themealdb.com/api/json/v1/1/search.php?s=fish"
            );
          },
          element: <Restaurant />,
        },
        { path: "/blog", element: <Blog /> },
        {
          path: "/restaurant/:itemId",
          loader: ({ params }) => {
            return fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.itemId}`
            );
          },
          element: <RestuIndiItemDisplay />,
        },
      ],
    },
    {
      path: "*",
      element: <div className="text-6xl mt-10">Route is not found</div>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
