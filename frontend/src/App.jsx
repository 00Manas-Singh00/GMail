// import { useState } from "react";
import "./App.css";
import Inbox from "./components/Inbox";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="h-screen bg-[#F6F8FC]">
      <NavBar />
      <div className="p-2 flex">
        <SideBar />
        <Inbox />
      </div>
    </div>
  );
}

export default App;
