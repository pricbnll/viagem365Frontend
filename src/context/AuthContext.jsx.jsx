import { createContext, useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("UserViagem365");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3333/users");
      if (!response.ok) {
        throw new Error("Erro na conexão com o servidor");
      }
      const users = await response.json();
      const user = users.find((u) => u.email === email && u.senha === password);

      if (user) {
        localStorage.setItem("UserViagem365", JSON.stringify(user));
        setUser(user);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Erro durante o login:", error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("UserViagem365");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
