import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Products";
import Pdt2page from "./Pages/Pdt2page";



export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pdt2page" element={<Pdt2page/>}></Route>

    </Routes>
    </>
  );
}