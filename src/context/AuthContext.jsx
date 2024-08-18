import { createContext, useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext({
  isAuthenticated: false,
  user: {
    id: null,
    nome: ''
  },
  login: async () => {},
  logout: () => {}
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("UserViagem365");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      console.log("Usuário carregado do localStorage:", parsedUser); 
      setUser(parsedUser);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:3000/users');
      if (!response.ok) {
        throw new Error('Erro ao buscar usuários');
      }
      const users = await response.json();
      const foundUser = users.find((user) => user.email === email && user.senha === password);

      if (foundUser) {
        const userData = { id: foundUser.id, nome: foundUser.nome }; 
        localStorage.setItem("UserViagem365", JSON.stringify(userData));
        setUser(userData);
        setIsAuthenticated(true);
        alert("Login de sucesso!");
        return true;
      }
      alert("Login inválido! Por favor, cadastre-se!");
      return false;
    } catch (error) {
      console.error("Erro ao realizar o login:", error);
      alert("Erro ao realizar o login");
      return false;
    }
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

export const useAuth= () => useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
