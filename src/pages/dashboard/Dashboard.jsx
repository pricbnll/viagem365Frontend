import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./dashboard.module.css";
import Table from "react-bootstrap/Table";
import Sidebar from "../../components/Sidebar";
import { AuthContext } from "../../context/AuthContext";

function Dashboard() {
  const { isAuthenticated, user } = useContext(AuthContext);
  const [localidades, setLocalidades] = useState([]);
  const [viajante, setViajante] = useState('Nome do Viajante');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      alert("Usuário não autenticado");
      navigate("/");
      return;
    }

    if (!user) {
      console.error("Usuário não definido");
      setError("Usuário não definido");
      setLoading(false);
      return;
    }

    if (user && user.nome) {
      setViajante(user.nome); // Define o nome do viajante com base no usuário autenticado
    }

    const fetchLocalidades = async () => {
      try {
        const response = await fetch(`http://localhost:3333/localidade?userId=${user.id}`);
        if (!response.ok) {
          throw new Error('Não há conexão com a database');
        }
        const data = await response.json();
        console.log("Dados recebidos:", data); // Log dos dados recebidos
        setLocalidades(data || []);
      } catch (error) {
        console.error("Erro ao buscar os dados", error);
        setError("Erro ao buscar os dados");
      } finally {
        setLoading(false);
      }
    };

    fetchLocalidades();
  }, [isAuthenticated, navigate, user]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.localContainer}>
          <h1>Dashboard</h1>
          <h2>Destinos cadastrados</h2>
          <span>Estes são seus destinos cadastrados da suas aventuras</span>
          <h3>Viajante: {viajante}</h3> {/* Exibe o nome do viajante */}
          {loading ? (
            <p>Carregando...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Destino</th>
                  <th>Descrição</th>
                  <th>Localidade</th>
                  <th>CEP</th>
                  <th>Latitude</th>
                  <th>Longitude</th>
                </tr>
              </thead>
              <tbody>
                {localidades.map((localidade, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{localidade.destino}</td>
                    <td>{localidade.descricao}</td>
                    <td>{localidade.localidade}</td>
                    <td>{localidade.cep}</td>
                    <td>{localidade.latitude}</td>
                    <td>{localidade.longitude}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
        <div className={styles.formDiv}>
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
