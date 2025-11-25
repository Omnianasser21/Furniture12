// App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Layout from "./Componets/Layout/Layout";
import Home from "./Componets/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/", 
      element: <Layout />, 
      children: [
        {
          index: true, 
          element: <Home />,
        },
       
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
