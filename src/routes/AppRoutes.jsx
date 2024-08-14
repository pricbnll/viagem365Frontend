

// src/routes/AppRoutes.jsx
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import RegisteUser from "../pages/register/RegisterUser";
import { AuthProvider, useAuth } from "../context/AuthContext.jsx";


function AppRoutes() {
  const auth = useAuth(); 
  const isAuthenticated = auth ? auth.user !== null : false;  

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={isAuthenticated ? <RegisteUser /> : <Navigate to="/dashboard" />} />
          <Route path="/cadastro" element={<RegisteUser />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default AppRoutes;
