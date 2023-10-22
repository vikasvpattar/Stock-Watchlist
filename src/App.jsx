import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import WishList from "./components/pages/WishList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </>
  );
}

export default App;
