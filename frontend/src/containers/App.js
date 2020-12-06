import React, { useState } from "react";
import "../assets/styles/App.css";
import Sidebar from "../components/profile/Sidebar";

const App = () => {
  const [open, setOpen] = useState(true);

  const toggleSidebar = (event) => {
    setOpen(!open);
  };
  return (
    <>
      <header class="header">
        <div className="icon" onClick={toggleSidebar}>
          Close profile
        </div>
      </header>
      <div class="container">
        {open && <Sidebar toggleSidebar={toggleSidebar} open={open} />}
        <section class="page">main</section>
      </div>
    </>
  );
};

export default App;
