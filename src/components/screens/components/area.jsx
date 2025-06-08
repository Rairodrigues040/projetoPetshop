import React, { useState } from "react";
import MyUploader from "../components/MyUploader";
import api from "../../dados/api";

const CadArea = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    foto: "",
    nome: "",
    tipo: "",
    raca: "",
    idade: "",
    genero: "",
    porte: "",
    peso: "",
    localizacao: "",
    vacinado: -1,
    castrado: -1,
    descricao: "",
    personalidade: "",
    saude: "",
    necessidades_especiais: "",
    requisitos_adocao: "",
    informacoes_contato: "",
  });

  const totalSteps = 4;

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = (photoUrl) => {
    setFormData((prev) => ({ ...prev, foto: photoUrl }));
  };

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.nome &&
          formData.raca &&
          formData.genero &&
          formData.tipo &&
          formData.idade &&
          formData.localizacao
        );
      case 2:
        return (
          formData.porte &&
          formData.peso &&
          formData.saude &&
          formData.vacinado !== -1 &&
          formData.castrado !== -1
        );
      case 3:
        return (
          formData.descricao &&
          formData.personalidade &&
          formData.requisitos_adocao &&
          formData.informacoes_contato
        );
      case 4:
        return true;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (validateStep()) {
      if (currentStep < totalSteps) {
        setCurrentStep((prev) => prev + 1);
      } else {
        submitForm();
      }
    } else {
      alert("Preencha todos os campos obrigatórios antes de continuar.");
    }
  };

  const submitForm = async () => {
    try {
      const response = await api.post("/animais/", formData, {
        headers: { "Content-Type": "application/json" },
      });

      alert("Cadastro enviado com sucesso!");
      setFormData({
        foto: "",
        nome: "",
        tipo: "",
        raca: "",
        idade: "",
        genero: "",
        porte: "",
        peso: "",
        localizacao: "",
        vacinado: -1,
        castrado: -1,
        descricao: "",
        personalidade: "",
        saude: "",
        necessidades_especiais: "",
        requisitos_adocao: "",
        informacoes_contato: "",
      });
      setCurrentStep(1);
    } catch (error) {
      console.error("Erro ao enviar o cadastro:", error);
      alert("Erro ao enviar o cadastro. Tente novamente mais tarde.", error);
      console.log(error);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="options">
            <div className="side1">
              <div className="option">
                <label>Nome do Animal *</label>
                <input
                  placeholder="Ex. Luna"
                  value={formData.nome}
                  onChange={(e) => handleChange("nome", e.target.value)}
                />
              </div>
              <div className="option">
                <label>Raça *</label>
                <input
                  placeholder="Ex: Sem raça definida, Golden Retriever"
                  value={formData.raca}
                  onChange={(e) => handleChange("raca", e.target.value)}
                />
              </div>
              <div className="option">
                <label>Gênero *</label>
                <select
                  value={formData.genero}
                  onChange={(e) => handleChange("genero", e.target.value)}
                  className="cadSelect"
                >
                  <option value="">Selecione</option>
                  <option value="Fêmea">Fêmea</option>
                  <option value="Macho">Macho</option>
                </select>
              </div>
            </div>
            <div className="side2">
              <div className="option">
                <label>Tipo *</label>
                <select
                  value={formData.tipo}
                  onChange={(e) => handleChange("tipo", e.target.value)}
                  className="cadSelect"
                >
                  <option value="">Selecione</option>
                  <option value="Cachorro">Cachorro</option>
                  <option value="Gato">Gato</option>
                  <option value="Pato">Pato 🦆</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div className="option">
                <label>Idade *</label>
                <input
                  value={formData.idade}
                  onChange={(e) => handleChange("idade", e.target.value)}
                  placeholder="Ex: 2 anos, 6 meses"
                />
              </div>
              <div className="option">
                <label>Localização *</label>
                <input
                  value={formData.localizacao}
                  onChange={(e) => handleChange("localizacao", e.target.value)}
                  placeholder="Ex: São Paulo, SP"
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <>
            <div className="options">
              <div className="side1">
                <div className="option">
                  <label>Porte *</label>
                  <select
                    value={formData.porte}
                    onChange={(e) => handleChange("porte", e.target.value)}
                    className="cadSelect"
                  >
                    <option value="">Selecione</option>
                    <option value="Pequeno">Pequeno</option>
                    <option value="Médio">Médio</option>
                    <option value="Grande">Grande</option>
                  </select>
                </div>
                <div className="option">
                  <label>Vacinado *</label>
                  <select
                    value={formData.vacinado}
                    onChange={(e) =>
                      handleChange("vacinado", parseInt(e.target.value))
                    }
                    className="cadSelect"
                  >
                    <option value={-1}>Selecione</option>
                    <option value={1}>Sim</option>
                    <option value={0}>Não</option>
                  </select>
                </div>
              </div>
              <div className="side2">
                <div className="option">
                  <label>Peso *</label>
                  <input
                    value={formData.peso}
                    onChange={(e) => handleChange("peso", e.target.value)}
                    placeholder="Ex: 5kg, 12kg"
                  />
                </div>
                <div className="option">
                  <label>Castrado *</label>
                  <select
                    value={formData.castrado}
                    onChange={(e) =>
                      handleChange("castrado", parseInt(e.target.value))
                    }
                    className="cadSelect"
                  >
                    <option value={-1}>Selecione</option>
                    <option value={1}>Sim</option>
                    <option value={0}>Não</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="options">
              <div className="option">
                <label>Informações de Saúde *</label>
                <textarea
                  placeholder="Descreva o estado de saúde, tratamentos, medicações..."
                  value={formData.saude}
                  onChange={(e) => handleChange("saude", e.target.value)}
                  className="optTextarea"
                />
              </div>
            </div>
            <div className="options">
              <div className="option">
                <label>Necessidades Especiais</label>
                <textarea
                  placeholder="Se houver alguma necessidade especial, descreva aqui..."
                  value={formData.necessidades_especiais}
                  onChange={(e) =>
                    handleChange("necessidades_especiais", e.target.value)
                  }
                  className="optTextarea"
                />
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="options">
              <div className="option">
                <label>Descrição do Animal *</label>
                <textarea
                  placeholder="Descreva o comportamento, características e história do animal..."
                  value={formData.descricao}
                  onChange={(e) => handleChange("descricao", e.target.value)}
                  className="optTextarea"
                />
              </div>
            </div>
            <div className="options">
              <div className="option">
                <label>Personalidade *</label>
                <input
                  placeholder="Ex: Carinhoso, Brincalhão, Energético"
                  value={formData.personalidade}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 36) {
                      handleChange("personalidade", value);
                    }
                  }}
                />
                <h6 className="limit">{formData.personalidade.length}/36</h6>
              </div>
            </div>
            <div className="options">
              <div className="option">
                <label>Requisitos para Adoção *</label>
                <textarea
                  placeholder="Ex: Casa com quintal, experiência com animais, tempo disponível..."
                  value={formData.requisitos_adocao}
                  onChange={(e) =>
                    handleChange("requisitos_adocao", e.target.value)
                  }
                  className="optTextarea"
                />
              </div>
            </div>
            <div className="options">
              <div className="option">
                <label>Informações de Contato *</label>
                <textarea
                  placeholder="Nome da ong, telefone, email, endereço..."
                  value={formData.informacoes_contato}
                  onChange={(e) =>
                    handleChange("informacoes_contato", e.target.value)
                  }
                  className="optTextarea"
                />
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <MyUploader onUpload={handlePhotoUpload} />
            <div className="tipBox">
              <label>Dicas para uma boa foto:</label>
              <ul>
                <li>Use boa iluminação natural</li>
                <li>Mostre o animal claramente</li>
                <li>Evite fundos muito poluídos</li>
                <li>Prefira fotos onde o animal esteja calmo</li>
              </ul>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="cadScreenBox">
      <div className="tittle">
        <h1>Cadastro de Animal para Adoção</h1>
        <h2>
          Preencha as informações do animal em etapas. O cadastro será analisado
          pelo administrador antes da publicação.
        </h2>
      </div>

      {/* Etapa atual */}
      {renderStep()}

      {/* Barra de progresso */}
      <div className="stepsView">
        <div className="stepsText">
          <label>
            Etapa {currentStep} de {totalSteps}
          </label>
          <label>{(currentStep / totalSteps) * 100}% concluído</label>
        </div>
        <div
          className="stepsProgressBar"
          style={{
            width: "100%",
            background: "#ccc",
            height: "10px",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              width: `${(currentStep / totalSteps) * 100}%`,
              height: "100%",
              background: "#6f4ef2",
              borderRadius: "8px",
              transition: "width 0.4s ease",
            }}
          />
        </div>
        <h2>
          {
            [
              "Informações Básicas",
              "Características e Saúde",
              "Descrição e Personalidade",
              "Foto e Finalização",
            ][currentStep - 1]
          }
        </h2>
      </div>

      {/* Botões */}
      <div className="buttons">
        <button onClick={prevStep} disabled={currentStep == 1}>
          <ion-icon
            name="chevron-back-outline"
            style={{ width: "16px", height: "16px", color: "black" }}
          ></ion-icon>
          Anterior
        </button>
        <button
          className="primary"
          onClick={nextStep}
          disabled={currentStep === totalSteps && !formData.foto}
        >
          {currentStep === totalSteps ? "Enviar" : "Próximo"}
          <ion-icon
            name="chevron-forward-outline"
            style={{ width: "16px", height: "16px", color: "white" }}
          ></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default CadArea;
