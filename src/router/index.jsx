import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layout/LayoutPublic";
import Login from "../pages/Login/Login";
import Agenda from "../pages/Agenda/Agenda";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: "/blog",
            element: <Agenda />,
          },
        ],
      },
    ],
  },
]);
