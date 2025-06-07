import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cadastro.css";
import Logo from "../header/img/logo.png";
import Patas from "./patas.png";
import api from "../dados/api";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [aceito, setAceito] = useState(false);

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

    if (!aceito) {
      alert("Você precisa aceitar os termos de uso!");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const payload = {
        nome,
        email,
        telefone,
        senha,
        usuario: verificarTipoUsuario(email),
        termos_uso: aceito ? 1 : 0,
      };

      const response = await api.post("/usuarios/", payload);

      if (response.status === 200 || response.status === 201) {
        alert("Usuário cadastrado com sucesso!");
        console.log(response.data);
        navigate("/login");
      } else {
        alert("Erro ao cadastrar usuário.");
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        alert(`Erro: ${error.response.data.erro}`);
      } else {
        alert("Erro ao conectar com o servidor.");
      }
    }
  }

  return (
    <div className="container">
      <img src={Logo} alt="logo" />
      <img src={Patas} alt="patas" className="patas" />

      <p>Crie sua conta para ajudar nossos amiguinhos</p>
      <form className="card" onSubmit={handleSubmit}>
        <h1>Criar Conta</h1>
        <h4>Preencha os dados abaixo para criar a sua conta</h4>

        <p>Nome Completo*</p>
        <input
          name="nome"
          type="text"
          placeholder="Digite seu nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <p>Email*</p>
        <input
          name="email"
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p>Telefone*</p>
        <input
          name="tel"
          type="text"
          placeholder="(11) 999999999"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />

        <p>Senha*</p>
        <input
          name="senha"
          type="password"
          placeholder="Mínimo 6 caracteres"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <p>Confirmar Senha*</p>
        <input
          name="confirmar_senha"
          type="password"
          placeholder="Digite a senha novamente"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />

        <label>
          <input
            type="checkbox"
            name="aceito"
            checked={aceito}
            onChange={(e) => setAceito(e.target.checked)}
          />
          Aceito os termos de uso e política de privacidade
        </label>

        <button type="submit">Criar Conta</button>
      </form>
    </div>
  );
}

export default Cadastro;
