// import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Inbox from "./components/Inbox";
import NavBar from "./components/NavBar";
// import SideBar from "./components/SideBar";
import Body from "./components/Body";
import Mail from "./components/Mail";
import ComposeMail from "./components/ComposeMail";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="h-screen bg-[#F6F8FC]">
      <NavBar />
      <RouterProvider router={appRouter} />
      <ComposeMail />
    </div>
  );
}

export default App;
