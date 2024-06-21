import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import CreatePost from "./components/CreatePost";
import PostList from "./components/postLists";
import { useState } from "react";
import PostListProvider from "../store/PostlistProvider.jsx";
function App() {
  const [selectTab, setSelectTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="sb">
        <Sidebar selectTab={selectTab} setSelectTab={setSelectTab} />
        <div className="hf">
          <Header />
          {selectTab === "Home" ? <PostList /> : <CreatePost />}

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
