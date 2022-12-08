import "./App.css";
import Posts from "./components/Posts";
import Post from "./components/Post";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="body">
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts/:slug" element={<Post />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
