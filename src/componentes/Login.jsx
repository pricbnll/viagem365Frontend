import styles from "./login.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Email inválido.")
      .required("O email é obrigatório."),
    password: yup
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres.")
      .required("A senha é obrigatória."),
  })
  .required();

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    console.log("Componente renderizado");
  }, []);

  function onSubmit(userData) {
    console.log(userData);
  }

  function handleRegister() {
    navigate("/cadastro");
  }

  console.log(watch("password"));
  return (
    <>
      <div className={styles.container}>
        <div className={styles.formDiv}>
          <form
            className={styles.formContainer}
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1>Efetue seu Login</h1>
            <p className={styles.greyQoRegular}>
              Experimente ter seus destinos salvos em uma plataforma divertida e
              interativa! Guarde seus destinos aqui!!
            </p>
            <div>
              <label className={styles.formLabel}>Email</label>
              <input
                type="text"
                className={styles.formControl}
                {...register("email", { required: true })}
              />
              <span className={styles.errorMessage}>{errors.email?.message}</span>
            </div>
            <div>
              <label className={styles.formLabel}>Senha</label>
              <input
                type="password"
                className={styles.formControl}
                {...register("password", { required: true })}
              />
              <span className={styles.errorMessage}>{errors.password?.message}</span>
            </div>
            <button type="submit" className={styles.btnLogin}>
              Entrar
            </button>
            <button
              type="button"
              className={styles.btnRegister}
              onClick={handleRegister}
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
