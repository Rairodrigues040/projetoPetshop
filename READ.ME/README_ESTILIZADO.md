<h1 align="center">🐾 API de Adoção de Animais</h1>

<p align="center">
  Uma API REST feita com <strong>Flask + MySQL</strong> para cadastro e listagem de <strong>usuários</strong> e <strong>animais disponíveis para adoção</strong>. Ideal para ser integrada com frontends modernos.
</p>

---

## 🔧 Tecnologias Utilizadas

- 🐍 Python 3.x
- 🌐 Flask
- 🔓 Flask-CORS
- 🐬 MySQL + PyMySQL

---

## 📂 Estrutura do Projeto

```
📦 projeto/
├── app.py         # Rotas e servidor Flask
├── data.py        # Funções de acesso e manipulação do banco
└── README.md      # Documentação do projeto
```

---

## ⚙️ Configuração Inicial

> Certifique-se de que o servidor MySQL esteja rodando localmente com o usuário `root` e sem senha.  
> Caso contrário, altere os dados de conexão no arquivo `data.py`.

As tabelas `usuarios` e `animais` serão criadas automaticamente na primeira execução.

---

## ▶️ Como Executar

```bash
# 1. Instale as dependências
pip install flask flask-cors pymysql

# 2. Rode o servidor
python app.py
```

A API estará disponível em: `http://localhost:5025`

---

## 📌 Endpoints da API

### 👤 Usuários

#### ➕ Criar Usuário
`POST /usuarios/`

```json
{
  "nome": "João",
  "email": "joao@email.com",
  "telefone": "99999999",
  "senha": "senha123",
  "usuario": "joaouser",
  "termos_uso": true
}
```

#### 🔐 Login de Usuário
`POST /usuarios/login`

```json
{
  "email": "joao@email.com",
  "senha": "senha123"
}
```

---

### 🐶 Animais

#### ➕ Cadastrar Animal
`POST /animais/`

```json
{
  "foto": "url_ou_base64",
  "nome": "Rex",
  "tipo": "Cachorro",
  "raca": "Labrador",
  "idade": "2 anos",
  "genero": "Macho",
  "porte": "Grande",
  "peso": "30kg",
  "localizacao": "São Paulo",
  "vacinado": true,
  "castrado": true,
  "descricao": "Brincalhão e amigável",
  "personalidade": "Ativo",
  "saude": "Boa",
  "necessidades_especiais": "",
  "requisitos_adocao": "Casa com quintal",
  "informacoes_contato": "whatsapp: 12345678"
}
```

#### 🔍 Listar Animais (com filtros)
`POST /animais/listarAnimais`

```json
{
  "nome": "",
  "tipo": "Cachorro",
  "porte": "Grande"
}
```

---

## ✅ Validações

- Campos obrigatórios são verificados.
- Impede cadastro de e-mails duplicados.
- Listagem de pets com filtros por nome, tipo e porte.

---

## 📝 Autor

Membros do ps da include.

---