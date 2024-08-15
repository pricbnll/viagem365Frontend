import { createContext, useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("UserViagem365");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true); 
    }
  }, []);

  const login = async (email, password) => {
    const response = await fetch('http://localhost:3000/users'); 
    const users = await response.json();
    const foundUser = users.find((user) => user.email === email && user.senha === password);

    if (foundUser) {
      const userData = { email, password }; 
      localStorage.setItem("UserViagem365", JSON.stringify(userData));
      setUser(userData);
      setIsAuthenticated(true); 
      alert("Login de sucesso!")
      return true; 
    }
    alert("Login inválido! Por favor, cadastre-se!")
    return false; 
  };

  const logout = () => {
    localStorage.removeItem("UserViagem365");
    setUser(null);
    setIsAuthenticated(false); 
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
