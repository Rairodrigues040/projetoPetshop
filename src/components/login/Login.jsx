import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Logo from "../header/img/logo.png";
import Patas from "./patas.png";
import api from "../dados/api";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function verificarTipoUsuario(email) {
    if (email.endsWith("@include.com")) {
      return "adm";
    } else {
      return "user";
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const tipo = verificarTipoUsuario(email);

      const payload = {
        email: email,
        senha: senha,
        usuario: tipo,
      };

      const response = await api.post("/usuarios/login", payload);

      if (response.data.status === 1) {
        alert("Login realizado com sucesso!");
        localStorage.setItem("usuario_nome", response.data.nome);

        // Redirecionamento conforme o tipo
        if (tipo === "adm") {
          navigate("/");
        } else {
          navigate("/cadastro");
        }
      } else {
        alert(
          `Erro: ${response.data.mensagem || "Usuário ou senha incorretos."}`
        );
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        alert(`Erro: ${error.response.data.erro || "Erro desconhecido."}`);
      } else {
        alert("Erro ao conectar com o servidor.");
      }
    }
  }

  const irParaPaginas = (e) => {
    e.preventDefault();
    const tipo = verificarTipoUsuario(email);
    if (tipo === "adm") {
      navigate("/logado");
    } else {
      navigate("/painel-usuario");
    }
  };

  return (
    <div className="container">
      <img src={Logo} alt="logo" />
      <img src={Patas} alt="patas" className="patas" />

      <p>Entre na sua conta para continuar</p>
      <form className="card" onSubmit={handleSubmit}>
        <h1>Entrar</h1>
        <h4>Digite suas credenciais para acessar sua conta</h4>

        <p>Email</p>
        <input
          name="email"
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <p>Senha</p>
        <input
          name="senha"
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <a href="#">Esqueceu a senha?</a>

        <button type="submit">Entrar</button>

        <p>
          Não tem uma conta?{" "}
          <a href="#" onClick={irParaPaginas}>
            Criar conta
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
