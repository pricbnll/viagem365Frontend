import tourist from "../../assets/tourist-pointing-lateral.jpg";
import styles from "./register.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useForm} from "react-hook-form";
import AddressService from "../../components/ApiCEP";

const schema = yup
  .object({
    nome: yup.string().required("O nome é obrigatório."),
    dataNascimento: yup
      .date()
      .required("A data de nascimento é obrigatória.")
      .nullable(),
    sexo: yup.string(),
    cpf: yup
      .string()
      .matches(/^\d{11}$/, "CPF inválido.")
      .required("O CPF é obrigatório."),
    cep: yup
      .string()
      .matches(/^\d{5}-?\d{3}$/, "CEP inválido.")
      .required("O CEP é obrigatório."),
    endereco: yup.string().required("O endereço é obrigatório."),
    numero: yup.string().required("O número é obrigatório."),
    complemento: yup.string(),
    cidade: yup.string().required("A cidade é obrigatória."),
    estado: yup.string().required("O estado é obrigatório."),
    email: yup
      .string()
      .email("Email inválido.")
      .required("O email é obrigatório."),
    password: yup
      .string()
      .min(6, "Mín. 6 caracteres.")
      .required("A senha é obrigatória."),
  })
  .required();

  function RegisterUser() {
    const navigate = useNavigate();
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
  
    
  
    function handleLogin() {
      navigate("/");
    }
  
    return (
      <>
        <div className={styles.container}>
          <div className={styles.formDiv}>
            <form
              className={styles.formContainer}
              onSubmit={handleSubmit(onSubmit)}
            >
              <h1>Cadastre-se</h1>
              <div>
                <label className={styles.formLabel}>Nome Completo</label>
                <input
                  type="text"
                  className={styles.formControl}
                  placeholder="Digite seu nome completo"
                  {...register("nome")}
                  autoComplete="name"
                />
                <span className={styles.errorMessage}>{errors.nome?.message}</span>
              </div>
              <div>
                <label className={styles.formLabel}>Sexo</label>
                <select className={styles.formControl} {...register("sexo")}>
                  <option value="">Selecione</option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                  <option value="outro">Outro</option>
                </select>
                <span className={styles.errorMessage}>{errors.sexo?.message}</span>
              </div>
              <div>
                <label className={styles.formLabel}>CPF</label>
                <input
                  type="text"
                  className={styles.formControl}
                  placeholder="Digite seu CPF"
                  {...register("cpf")}
                  autoComplete="cpf"
                />
                <span className={styles.errorMessage}>{errors.cpf?.message}</span>
              </div>
              <div>
                <label className={styles.formLabel}>Data de Nascimento</label>
                <input
                  type="date"
                  className={styles.formControl}
                  {...register("dataNascimento")}
                />
              </div>
              <div>
                <label className={styles.formLabel}>CEP</label>
                <input
                  type="text"
                  className={styles.formControl}
                  placeholder="Digite seu CEP"
                  {...register("cep", { onChange: (e) => setCep(e.target.value) })} 
                  autoComplete="postal-code"
                />
                <span className={styles.errorMessage}>{errors.cep?.message}</span> 
                <AddressService cep={cep} setValue={setValue} setCepError={setCep} />
              </div>
              <div>
                <label className={styles.formLabel}>Endereço</label>
                <input
                  type="text"
                  className={styles.formControl}
                  {...register("endereco")}
                  autoComplete="street-address"
                />
                <span className={styles.errorMessage}>{errors.endereco?.message}</span>
              </div>
              <div>
                <label className={styles.formLabel}>Número</label>
                <input
                  type="text"
                  className={styles.formControl}
                  {...register("numero")}
                  autoComplete="address-line2"
                />
                <span className={styles.errorMessage}>{errors.numero?.message}</span>
              </div>
              <div>
                <label className={styles.formLabel}>Complemento</label>
                <input
                  type="text"
                  className={styles.formControl}
                  {...register("complemento")}
                  autoComplete="address-line2"
                />
                <span className={styles.errorMessage}>{errors.complemento?.message}</span>
              </div>
              <div>
                <label className={styles.formLabel}>Cidade</label>
                <input
                  type="text"
                  className={styles.formControl}
                  {...register("cidade")}
                />
                <span className={styles.errorMessage}>{errors.cidade?.message}</span>
              </div>
              <div>
                <label className={styles.formLabel}>Estado</label>
                <input
                  type="text"
                  className={styles.formControl}
                  {...register("estado")}
                />
                <span className={styles.errorMessage}>{errors.estado?.message}</span>
              </div>
              <div>
                <label className={styles.formLabel}>Email</label>
                <input
                  type="text"
                  className={styles.formControl}
                  placeholder="Digite seu email"
                  {...register("email")}
                  autoComplete="email"
                />
                <span className={styles.errorMessage}>{errors.email?.message}</span>
              </div>
              <div>
                <label className={styles.formLabel}>Senha</label>
                <input
                  type="password"
                  className={styles.formControl}
                  placeholder="Digite sua senha"
                  {...register("password")}
                  autoComplete="new-password"
                />
                <span className={styles.errorMessage}>{errors.password?.message}</span>
              </div>
              <button type="submit" className={styles.btnRegister}>
                Cadastrar
              </button>
              <p>
                Já possui conta? Faça seu 
                <span
                  className={styles.spanLogin}
                  type="button"
                  onClick={handleLogin}
                >
                  login
                </span> .
              </p>
            </form>
          </div>
          <div className={styles.imageContainer}>
            <img
              src={tourist}
              alt="Foto de turista apontando para o formulário"
            />
          </div>
        </div>
      </>
    );
  }
  
  export default RegisterUser;