import Sidebar from "../../components/Sidebar";
import styles from "./dashboard.module.css";

function Dashboard() {
  return (
    <>
    <div className={styles.container}>
      <h1>Meus destinos</h1>
      <div className={styles.formDiv}>
      <Sidebar/>
      </div>
    </div>
    </>
  );
}

export default Dashboard;
