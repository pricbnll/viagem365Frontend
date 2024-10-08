import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import RegisteUser from "../pages/register/RegisterUser";
import { AuthProvider, useAuth } from "../context/AuthContext.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import RegisterLocalidade from "../pages/register/RegisterLocalidade.jsx";
import UpdateLocalidade from "../pages/register/UpdateLocalidade.jsx";
import Questions from "../pages/questions/Questions.jsx";
import About from "../pages/about/About.jsx";

function AppRoutes() {
  const auth = useAuth(); 
  const isAuthenticated = auth ? auth.user !== null : false;  

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={isAuthenticated ? <RegisteUser /> : <Navigate to="/dashboard" />} />
          {/* <Route path="/home" element={isAuthenticated ? <Navigate to="/dashboard" /> : <RegisterUser />} /> */}
          <Route path="/cadastro" element={<RegisteUser />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/dashboard" element={<Dashboard />} />    
          <Route path="/cadastroLocalidade" element={<RegisterLocalidade />} />    
          <Route path="/atualizarDestino/:id" element={<UpdateLocalidade />} />    
          <Route path="/duvidas" element={<Questions />} />    
          <Route path="/sobre" element={<About />} />    
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default AppRoutes;
