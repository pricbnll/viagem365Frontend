import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import RegisterUser from "../pages/register/RegisterUser";
import useAuth from "../context/useAuth";
import { AuthProvider } from "../context/AuthContext.jsx";

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/"
            element={
              isAuthenticated ? <Home /> : <Navigate to="/home" replace />
            }
          />
          <Route
            path="/cadastro"
            element={
              isAuthenticated ? <RegisterUser /> : <Navigate to="/home" replace />
            }
          />
          <Route path="*" element={<Navigate to={isAuthenticated ? "/home" : "/home"} replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default AppRoutes;
