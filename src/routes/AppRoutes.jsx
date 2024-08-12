import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import RegisteUser from "../pages/register/RegisterUser"


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path= '/' element={<Home />}/>
       <Route path= '/home' element={<Home />}/>
       <Route path= '/cadastro' element={<RegisteUser/>}/>
      
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
