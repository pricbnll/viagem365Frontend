import tourist from "../../assets/tourist-making-unimportant-gesture.jpg";
import styles from "./register.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import AddressService from "../../components/ApiCEP";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";

const schema = yup
  .object({
    destino: yup.string().required("O nome do destino é obrigatório."),
    descricao: yup.string().required("A descrição é obrigatória."),
    localidade: yup.string().required("Informe a cidade e estado do destino."),
    cep: yup
      .string()
      .matches(/^\d{5}-?\d{3}$/, "CEP inválido.")
      .required("O CEP é obrigatório."),
    latitude: yup.string().required("Informe a latitude do destino."),
    longitude: yup.string().required("Informe a longitude do destino."),
  })
  .required();

function UpdateLocalidade() {
  const { user } = useContext(AuthContext);
  const { id } = useParams(); // Pega o ID da URL
  const [cepError, setCepError] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchLocalidade = async () => {
      try {
        const response = await fetch(`http://localhost:3333/localidade/${id}`);
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados");
        }
        const data = await response.json();

        // Preenche o formulário com os dados recebidos
        setValue("destino", data.destino);
        setValue("descricao", data.descricao);
        setValue("localidade", data.localidade);
        setValue("cep", data.cep);
        setValue("latitude", data.latitude);
        setValue("longitude", data.longitude);
      } catch (error) {
        console.error("Erro:", error);
      }
    };

    fetchLocalidade();
  }, [id, setValue]);

  async function onSubmit(userData) {
    if (cepError) {
      alert("Corrija o CEP antes de enviar.");
      return;
    }

    const userId = user?.id;
    const dataToSubmit = { ...userData, userId };

    try {
      const response = await fetch(`http://localhost:3333/localidade/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (!response.ok) {
        throw new Error("Erro ao atualizar o local");
      }

      alert("Local atualizado com sucesso");
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.formDiv}>
          <form
            className={styles.formContainer}
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1>Atualizar seu destino</h1>
            <div>
              <label className={styles.formLabel}>Destino</label>
              <input
                type="text"
                className={styles.formControl}
                placeholder="Digite o nome do destino"
                {...register("destino")}
                autoComplete="name"
              />
              <span className={styles.errorMessage}>
                {errors.destino?.message}
              </span>
            </div>
            <div>
              <label className={styles.formLabel}>Descrição</label>
              <textarea
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
                {...register("localidade")}
              />
              <span className={styles.errorMessage}>
                {errors.localidade?.message}
              </span>
            </div>
            <div>
              <label className={styles.formLabel}>CEP</label>
              <input
                type="text"
                className={styles.formControl}
                placeholder="Digite o CEP do destino"
                {...register("cep")}
                autoComplete="postal-code"
              />
              <span className={styles.errorMessage}>{errors.cep?.message}</span>
              <AddressService
                cep={watch("cep")}
                setValue={setValue}
                setCepError={setCepError}
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
              Atualizar
            </button>
            <button type="button" className={styles.btnDelete}>
              Apagar destino
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

export default UpdateLocalidade;
