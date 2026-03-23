import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Products";
import Pdt2page from "./Pages/Pdt2page";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pdt2page" element={<Pdt2page/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
    </>
  );
}