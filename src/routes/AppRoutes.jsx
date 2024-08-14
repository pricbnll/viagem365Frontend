

// src/routes/AppRoutes.jsx
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import RegisteUser from "../pages/register/RegisterUser";
import { AuthProvider, useAuth } from "../context/AuthContext.jsx";


function AppRoutes() {
  const { isAuthenticated } = useAuth() || {}; 

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/cadastro" />} />
          <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/home" />} />
          <Route path="/cadastro" element={<RegisteUser />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default AppRoutes;
