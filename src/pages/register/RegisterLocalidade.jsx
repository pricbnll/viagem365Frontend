import tourist from "../../assets/tourist-with-his-fingers-crossing.jpg";
import styles from "./register.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AddressService from "../../components/ApiCEP";

const schema = yup
  .object({
    destino: yup.string().required("O nome do destino é obrigatório."),
    descricao: yup.string().required("A descrição é obrigatório."),
    localidade: yup.string().required("Informe a cidade e estado  destino."),
    cep: yup
      .string()
      .matches(/^\d{5}-?\d{3}$/, "CEP inválido.")
      .required("O CEP é obrigatório."),
    latitude: yup.string().required("Informe a latitude do destino."),
    longitude: yup.string().required("Informe a longitude do destino."),
  })
  .required();

function Dashboard() {
  const [cep, setCep] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    console.log("Componente renderizado");
  }, []);

  function onSubmit(userData) {
    console.log(userData);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.formDiv}>
          <form
            className={styles.formContainer}
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1>Cadastrar a nova aventura</h1>
            <div>
              <label className={styles.formLabel}>Destino</label>
              <input
                type="text"
                className={styles.formControl}
                placeholder="Digite o nome do destino"
                {...register("nome")}
                autoComplete="name"
              />
              <span className={styles.errorMessage}>
                {errors.nome?.message}
              </span>
            </div>
            <div>
              <label className={styles.formLabel}>Descricao</label>
              <input
                type="text"
                className={styles.formControl}
                placeholder="Descreva o destino"
                {...register("descricao")}
              />
              <span className={styles.errorMessage}>
                {errors.descricao?.message}
              </span>
            </div>
            <div>
              <label className={styles.formLabel}>Localidade</label>
              <input
                type="text"
                className={styles.formControl}
                placeholder="Digite a cidade e estado do destino"
                {...register("nome")}
                autoComplete="name"
              />
              <span className={styles.errorMessage}>
                {errors.nome?.message}
              </span>
            </div>
            <div>
              <label className={styles.formLabel}>CEP</label>
              <input
                type="text"
                className={styles.formControl}
                placeholder="Digite o CEP do destino"
                {...register("cep", {
                  onChange: (e) => setCep(e.target.value),
                })}
                autoComplete="postal-code"
              />
              <span className={styles.errorMessage}>{errors.cep?.message}</span>
              <AddressService
                cep={cep}
                setValue={setValue}
                setCepError={setCep}
              />
            </div>
            <div>
              <label className={styles.formLabel}>Latitude</label>
              <input
                type="text"
                className={styles.formControl}
                placeholder=""
                {...register("latitude")}
                autoComplete="latitude"
              />
              <span className={styles.errorMessage}>
                {errors.latitude?.message}
              </span>
            </div>
            <div>
              <label className={styles.formLabel}>Longitude</label>
              <input
                type="text"
                className={styles.formControl}
                placeholder=""
                {...register("longitude")}
                autoComplete="longitude"
              />
              <span className={styles.errorMessage}>
                {errors.longitude?.message}
              </span>
            </div>
            <button type="submit" className={styles.btnRegister}>
              Cadastrar
            </button>
          </form>
        </div>
        <div className={styles.imageContainer}>
          <img src={tourist} alt="Foto de turista cruzando os dedos" />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
