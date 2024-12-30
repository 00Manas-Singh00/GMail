// import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="h-screen bg-[#F6F8FC]">
      <NavBar />
      <div className="p-2">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
