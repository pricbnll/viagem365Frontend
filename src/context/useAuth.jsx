import { useContext } from "react";
import { AuthContext } from "./AuthContext.jsx";

function useAuth() {
  useContext(AuthContext);
}

export default useAuth;
