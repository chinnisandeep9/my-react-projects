import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import "./App.css";

import { useState } from "react";
import PostListProvider from "../../store/PostlistProvider.jsx";
import { Outlet } from "react-router-dom";
function App() {
  const [selectTab, setSelectTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="sb">
        <Sidebar selectTab={selectTab} setSelectTab={setSelectTab} />
        <div className="hf">
          <Header />

          <Outlet />

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
