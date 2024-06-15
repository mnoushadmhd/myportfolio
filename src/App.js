import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Root from "./components/Root";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children: [
      { index: true, element: <Home /> },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
