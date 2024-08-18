import travelPointer from "../assets/ver-pontos-turisticos.png";
import styles from "./sidebar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={travelPointer} alt="Pointer para pontos turísticos." />
          <nav className={styles.nav}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/atualizarDados">Atualizar dados</NavLink>
            <NavLink to="/perguntas">Dúvidas</NavLink>
            <NavLink to="/sobre">O Projeto</NavLink>
          </nav>
          <button onClick={handleLogout} className={styles.btnLogout}>
            Sair
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
