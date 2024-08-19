import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import LocalCard from "../../components/LocalCard";
import Map from "../../components/Map";
import Sidebar from "../../components/Sidebar";
import styles from "./dashboard.module.css";
import Table from "react-bootstrap/Table";

function Dashboard() {
  const { isAuthenticated, user } = useContext(AuthContext);
  const [localidades, setLocalidades] = useState([]);
  const [viajante, setViajante] = useState("Nome do Viajante");
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      alert("Usuário não autenticado");
      navigate("/");
      return;
    }

    if (!user) {
      console.error("Usuário não definido");
      return;
    }

    if (user && user.nome) {
      setViajante(user.nome);
    }

    const fetchLocalidades = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/localidade?userId=${user.id}`
        );
        if (!response.ok) {
          throw new Error("Não há conexão com a database");
        }
        const data = await response.json();
        console.log("Dados recebidos:", data);
        setLocalidades(data || []);
      } catch (error) {
        console.error("Erro ao buscar os dados", error);
    }};

    fetchLocalidades();
  }, [isAuthenticated, navigate, user]);

  useEffect(() => {
    console.log("Localidades atualizadas", localidades.userId);
  }, [localidades]);

  if (!isAuthenticated) {
    return null;
  }

  const totalLocais = localidades.length;

  const handleRegister = () => {
    console.log("Botão de cadastro clicado");
    navigate("/cadastroLocalidade");
  };

  const handleDelete = async (id) => {
    console.log("Botão de deletar clicado");
    try {
      alert(`Tentando deletar localidade com id: ${id}`);
      const response = await fetch(`http://localhost:3000/localidade/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`Erro ao deletar o destino: ${response.statusText}`);
      }
      setLocalidades(localidades.filter((localidade) => localidade.id !== id));
    } catch (error) {
      console.log("Erro ao deletar o destino");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.localContainer}>
          <h1 className={styles.h1Dashboard}>Dashboard</h1>
          <LocalCard totalLocais={totalLocais} />
          <h2 className={styles.h2Dashboard}>Destinos cadastrados</h2>
          <span>Estes são seus destinos cadastrados das suas aventuras!!!</span>
          <div className={styles.btnContainer}>
            <h3>Viajante: {viajante}</h3>
            <button
              type="button"
              className={styles.btnRegister}
              onClick={handleRegister}
            >
              Cadastrar mais aventuras
            </button>
          </div>
            <Table >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Destino</th>
                  <th>Descrição</th>
                  <th>Localidade</th>
                  <th>CEP</th>
                  <th>Latitude</th>
                  <th>Longitude</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {localidades.map((localidade, index) => (
                  <tr key={index}>
                    <td>{localidade.id}</td>
                    <td>{localidade.destino}</td>
                    <td>{localidade.descricao}</td>
                    <td>{localidade.localidade}</td>
                    <td>{localidade.cep}</td>
                    <td>{localidade.latitude}</td>
                    <td>{localidade.longitude}</td>
                    <td>
                      <div className={styles.acoesContainer}>
                        <Link
                          className={styles.btnUpdate}
                          to={`/atualizarDestino/${localidade.id}`}
                        >
                          Editar
                        </Link>
                        <button
                          className={styles.btnDelete}
                          onClick={() => {
                            handleDelete(localidade.id);
                          }}
                        >
                          Deletar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          <span>Seus destinos no mapa</span>
        </div>

        <Map localidades={localidades} />

        <div className={styles.formDiv}>
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
