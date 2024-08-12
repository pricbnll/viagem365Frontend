import mapaViagem from "../../assets/mapa-viagem.jpg";
import Login from "../Login/Login";

import styles from "./home.module.css";


function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={mapaViagem} alt="foto de planejamento de viagem" />
      </div>
      <div className={styles.formDiv}>
        <Login/>
      </div>
    </div>
  );
}

export default Home;
