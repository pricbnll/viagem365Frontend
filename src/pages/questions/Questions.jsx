import styles from "./questions.module.css";

function Questions() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.questionsContainer}>
        <h1 className={styles.h1Questions}>Perguntas Frequentes</h1>
          <p className={styles.pQuestions}>Como faço meu Login?</p>
          <ul className={styles.ulQuestions}>
            <li className={styles.liQuestions}>
              Na página iniciar digite seu email e senha e será direcionado para
              seus destinos na página <em>dashboard</em>.
            </li>
            <li className={styles.liQuestions}>
              Lá encontrará quantos destinos foram cadastrados e quais foram.
            </li>
          </ul>
          <p className={styles.pQuestions}>Como faço para me cadastrar?</p>
          <ul className={styles.ulQuestions}>
            <li className={styles.liQuestions}>
              Na página inicial clique em <em>cadastrar</em>, você será
              direcionado para uma tela o qual terá que preencher com seus dados
              e, ao final, clique em <em>cadastrar</em>. Seras redirecionado
              para a tela inicial e terás que preencher com seu email e senha
              cadastrados e terás acesso a <em>dashboard</em> onde poderás
              cadastrar suas aventuras.
            </li>
          </ul>
          <p className={styles.pQuestions}>
            Como faço para cadastrar um destino?
          </p>
          <ul className={styles.ulQuestions}>
            <li className={styles.liQuestions}>
              Na <em>dashboard</em> tem um botão de{" "}
              <em>cadastrar mais aventuras</em>, clique nele e será direcionado
              para a página de cadastro de destino, preencha os campos com as
              informações do destino e clique em cadastrar.
            </li>
          </ul>
          <p className={styles.pQuestions}>
            Como faço para atualizar um destino?
          </p>
          <ul className={styles.ulQuestions}>
            <li className={styles.liQuestions}>
              Na <em>dashboard</em> selecione o destino que deseja atualizar,
              clique no botão <em>editar</em> e preencha os campos com as novas
              informações e clique em atualizar.
            </li>
          </ul>
          <p className={styles.pQuestions}>
            Como faço para deletar um destino?
          </p>
          <ul className={styles.ulQuestions}>
            <li className={styles.liQuestions}>Tem duas formas: </li>
            <li className={styles.liQuestions}>
              1. Na página de dashboard, clique no botão <em>deletar</em> do
              destino que deseja deletar.
            </li>
            <li className={styles.liQuestions}>
              2. Na página de atualização de destino onde clicando em{" "}
              <em>editar</em> você será direcionado à pagina de{" "}
              <em>atualizar destinos</em> e clique no botão <em>deletar</em>.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Questions;
