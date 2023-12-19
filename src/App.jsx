import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "../components/header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Form from "../components/Form";
import "./App.css";
import PostList from "../components/PostList";
import PostListProvider from "../store/pStore";
import { useState } from "react";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="pageConatiner">
        <SideBar
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
        ></SideBar>
        <div className="contentContainer">
          <Header></Header>
          {selectedTab === "Create Post" && <Form></Form>}
          {selectedTab === "Home" && <PostList></PostList>}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
