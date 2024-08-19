import styles from "./about.module.css";

function About() {
  return (
    <>
      <div className={styles.aboutContainer}>
      <h1 className={styles.h1About}>Sobre o Viagem365</h1>
        <p className={styles.pAbout}>
        O Viagem365 é uma plataforma que visa promover viagens sustentáveis e experiências positivas para os usuários, fornecendo acesso a informações sobre destinos turísticos, praias, atrações naturais e atividades recreativas. Os usuários podem explorar e descobrir novos destinos, encontrar dicas de viagem sustentável e compartilhar suas experiências.
        </p>
        <p className={styles.pAbout}>
        Desejo aqui agradecer a todos os colaboradores que ajudaram a tornar este projeto uma realidade. Sem vocês, nada disso seria possível. Obrigado por acreditar no Viagem365 e por contribuir para torná-lo uma plataforma de viagens sustentáveis e experiências positivas. Juntos, podemos fazer a diferença e promover um turismo mais consciente e responsável. Algumas ações de atendimento, criando um sistema para armazenamento de informações do(s) usuário(s) e seus destino(s) que poderá servir para gerar um aplicativo que demonstra os pontos de interesses dos usuários para coletar dados, gerar marketing pra empresas de turismo, engajamento em rotas desconhecidas e melhorias de conservação da natureza local...
        </p>
        <span  className={styles.spanAbout} >Priscilla Ilha Carbonell</span>
      </div>
    </>
  );
}
export default About;
       
