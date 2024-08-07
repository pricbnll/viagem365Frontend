import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import Register from "../pages/register/Register"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path= '/' element={<Home />}/>
       <Route path= '/cadastro' element={<Register />}/>
      
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
