import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();

function AuthContext({ children }) {
    const [submitError, setSubmitError ] = useState()
    const [user, setUser] = useState(null);

  async function onSubmit(userData) {
    try {
      const responseEmail = await fetch(
        `http://localhost:333/users?email=${userData.email}`
      );
      const emailData = await responseEmail.json();
      if (emailData.length > 0) {
        setSubmitError("O email já está cadastrado.");
        return;
      }

      const responseCpf = await fetch(
        `http://localhost:3001/users?cpf=${userData.cpf}`
      );
      const cpfData = await responseCpf.json();
      if (cpfData.length > 0) {
        setSubmitError("O CPF já está cadastrado.");
        return;
      }

      await fetch("http://localhost:3333/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      navigate("/");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  }

  return (
    <>
      <AuthContext.Provider value={{ user }}>
        {children}
    </AuthContext.Provider>
    </>
  );
}

export default AuthContext
