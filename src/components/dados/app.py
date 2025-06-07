import data
# Importando as bibliotecas necessárias
# Flask: biblioteca para criar o servidor
# Jsonify: permite transportar dados em formato JSON
# Request: permite acessar dados enviados para a API
from flask import Flask, jsonify, request
from datetime import datetime
from flask_cors import CORS

# Inicializando a aplicação Flask
app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"], supports_credentials=True, methods=["GET", "POST", "OPTIONS"])

# Rota para criar um novo usuario
@app.route('/usuarios/', methods=['POST'])
def cadastrar_usuario():
    status = 0
    dados = request.get_json()

    # Validações básicas
    campos_obrigatorios = ['nome', 'email', 'telefone', 'senha', 'usuario', 'termos_uso']
    for campo in campos_obrigatorios:
        if campo not in dados or str(dados[campo]).strip() == '':
            return jsonify({'mensagem': f'Campo "{campo}" é obrigatório e não pode ser vazio.', 'status': status}), 400

        # Tratativa específica para termos_uso
        if campo == 'termos_uso':
            # Se termos_uso for 0, False ou string '0', considera inválido
            valor = dados[campo]
            if valor in [0, '0', False]:
                return jsonify({'mensagem': 'Termo de uso é obrigatório e não pode ser 0.', 'status': status}), 400
            
    try:
        # Chama a função de cadastro
        resultado = data.CadastrarUsuarios(
            dados['nome'],
            dados['email'],
            dados['telefone'],
            dados['senha'],
            dados['usuario'],
            dados['termos_uso']
        )
        if resultado == 'Usuário cadastrado com sucesso!':
            status = 1

        return jsonify({'mensagem': resultado, 'status': status}), 201

    except Exception as e:
        return jsonify({'mensagem': str(e), 'status': status}), 500

# Rota para verificar um usuario
@app.route('/usuarios/', methods=['GET'])
def validar_usuarios():
    status = 0
    dados = request.get_json()

    # Validações básicas
    campos_obrigatorios = ['email', 'senha']
    for campo in campos_obrigatorios:
        if campo not in dados or str(dados[campo]).strip() == '':
            return jsonify({'erro': f'Campo "{campo}" é obrigatório e não pode ser vazio.', 'status': status}), 400
    
    try:
        # Chama a função de Validar Usuarios
        resultado = data.ValidarUsuarios(
            dados['email'],
            dados['senha']
        )

        retorno,status = resultado

        return jsonify({'mensagem': retorno, 'status': status}), 201   
    
    except Exception as e:
        return jsonify({'mensagem': str(e), 'status': status}), 500

# Rota para cadastrar um animal
@app.route('/animais/', methods=['POST'])
def cadastrar_animal():
    status = 0
    dados = request.get_json()

    # Campos obrigatórios
    campos_obrigatorios = [
        'foto', 'nome', 'tipo', 'raca', 'idade', 'genero', 'porte', 'peso',
        'localizacao', 'vacinado', 'castrado', 'descricao', 'personalidade',
        'saude', 'necessidades_especiais', 'requisitos_adocao', 'informacoes_contato'
    ]

    for campo in campos_obrigatorios:
        if campo not in dados:
            return jsonify({'mensagem': f'Campo "{campo}" é obrigatório.', 'status': status}), 400
        
        valor = dados[campo]
        
        if isinstance(valor, str) and valor.strip() == '':
            return jsonify({'mensagem': f'Campo "{campo}" não pode ser vazio.', 'status': status}), 400

    try:
        # Chama a função de cadastro no banco
        resultado = data.CadastrarPets(
            dados['foto'], 
            dados['nome'],
            dados['tipo'],
            dados['raca'],
            dados['idade'],
            dados['genero'],
            dados['porte'],
            dados['peso'],
            dados['localizacao'],
            dados['vacinado'],
            dados['castrado'],
            dados['descricao'],
            dados['personalidade'],
            dados['saude'],
            dados['necessidades_especiais'],
            dados['requisitos_adocao'],
            dados['informacoes_contato']
        )

        if resultado == 'Pet cadastrado com sucesso!':
            status = 1

        return jsonify({'mensagem': resultado, 'status': status}), 201

    except Exception as e:
        return jsonify({'mensagem': str(e), 'status': status}), 500

# Rota para listar animais com filtro ou sem
@app.route('/animais/', methods=['GET'])
def listar_todos_os_pets():
    status = 0
    dados = request.get_json()
    
    try:
        # Chama a função de Validar Usuarios
        resultado = data.ListarTodosOsPets(
            dados['nome'],
            dados['tipo'],
            dados['porte']
        )

        retorno,mensagem,status = resultado

        return jsonify({'Animais': retorno,'mensagem': mensagem,'status': status}), 201   
    
    except Exception as e:
        return jsonify({'Animais': retorno, 'mensagem': str(e), 'status': status, }), 500
    
# Executa a aplicação Flask
if __name__ == '__main__':
    app.run(port=5025, host='localhost', debug=True)  # Define a porta, o host e ativa o modo debug