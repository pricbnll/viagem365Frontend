import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import RegisteUser from "../pages/register/RegisterUser";
import { AuthProvider, useAuth } from "../context/AuthContext.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import RegisterLocalidade from "../pages/register/RegisterLocalidade.jsx";


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
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/dashboard" element={<Dashboard />} />    
          <Route path="/cadastroLocalidade" element={<RegisterLocalidade />} />    
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default AppRoutes;
