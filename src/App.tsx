import { BrowserRouter , Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import ProductDetails from "./pages/ProductDetails";
import CreateProductPage from "./pages/CreateProductPage";

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={
        <ProtectedRoute>
        <Products />
        </ProtectedRoute>
        } 
        />
      <Route path="/products/create" element={<CreateProductPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products/:id" element={
        <ProtectedRoute>
        <ProductDetails />
        </ProtectedRoute>
        } />
    </Routes>

    </BrowserRouter>
  )
}

export default App