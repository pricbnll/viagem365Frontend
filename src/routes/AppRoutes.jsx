import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import Login from "../pages/Login/Login"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path= '/' element={<Home />}/>
       <Route path= '/cadastrar' element={<Login/>}/>
      
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
