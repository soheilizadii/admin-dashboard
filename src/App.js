import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import Layout from "./components/layout/Layout";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Products />} path="/Products" />
          <Route element={<Product />} path="/products/:id" />
          <Route element={<Users />} path="/users" />
          <Route element={<User />} path="/users/:id" />
          <Route element={<Login />} path="/login" />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
