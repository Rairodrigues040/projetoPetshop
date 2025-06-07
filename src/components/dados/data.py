import pymysql

def criar_banco_se_nao_existir():
    conexao = pymysql.connect(
        host='localhost',
        user='root',
        passwd=''
    )
    try:
        with conexao.cursor() as cursor:
            cursor.execute("CREATE DATABASE IF NOT EXISTS include_bd")
        conexao.commit()
    finally:
        conexao.close()

def Conection():
    # Certifique-se de que o banco existe antes de conectar a ele
    criar_banco_se_nao_existir()
    
    return pymysql.connect(
        host='localhost',
        user='root',
        passwd='',
        database='include_bd'
    )

def CriarTabelaUsuarios():
    try:
        conexao = Conection()
        cursor = conexao.cursor()
        sql = '''
        CREATE TABLE IF NOT EXISTS usuarios (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(255),
            email VARCHAR(255) UNIQUE,
            telefone VARCHAR(20),
            senha VARCHAR(255),
            usuario TEXT,
            termos_uso BOOLEAN
        )
        '''
        cursor.execute(sql)
        print("[1] Tabela usuarios criada")
    except pymysql.MySQLError as e:
        print(f"[1] Erro ao criar tabela usuarios: {e}")
    finally:
        if 'cursor' in locals():
            cursor.close()
        if 'conexao' in locals():
            conexao.close()



def CriarTabelaPets():
    try:
        conexao = Conection()
        cursor = conexao.cursor()
        sql = '''
        CREATE TABLE IF NOT EXISTS animais (
            id INT AUTO_INCREMENT PRIMARY KEY,
            foto VARCHAR(255),
            nome VARCHAR(100) NOT NULL,
            tipo VARCHAR(50) NOT NULL,
            raca VARCHAR(100),
            idade VARCHAR(50),
            genero VARCHAR(20),
            porte VARCHAR(50),
            peso VARCHAR(50),
            localizacao VARCHAR(100),
            vacinado BOOLEAN,
            castrado BOOLEAN,
            descricao TEXT,
            personalidade TEXT,
            saude TEXT,
            necessidades_especiais TEXT,
            requisitos_adocao TEXT,
            informacoes_contato TEXT,
            criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
        )
        '''
        cursor.execute(sql)
        print("[2] Tabela animais criada")
    except pymysql.MySQLError as e:
        print(f"[2] Erro ao criar tabela animais: {e}")
    finally:
        if 'cursor' in locals():
            cursor.close()
        if 'conexao' in locals():
            conexao.close()

def CadastrarUsuarios(nome, email, telefone, senha, usuario, termos_uso): 
    try:
        if not isinstance(nome, str):
            raise ValueError("Nome deve ser uma string.")
        if not isinstance(email, str):
            raise ValueError("Email deve ser uma string.")
        if not isinstance(telefone, str):
            raise ValueError("Telefone deve ser uma string.")
        if not isinstance(senha, str):
            raise ValueError("Senha deve ser uma string.")
        if not isinstance(termos_uso, (bool, int)):
            raise ValueError("Termos de uso deve ser booleano ou inteiro (0 ou 1).")
        if not isinstance(usuario, str):
            raise ValueError("Usuario deve ser uma string.")
        
        conexao = Conection()
        cursor = conexao.cursor()

        # Verifica se o e-mail já existe
        cursor.execute("SELECT id FROM usuarios WHERE email = %s", (email,))
        if cursor.fetchone():
            raise ValueError("Este e-mail já está cadastrado.")

        sql = '''
        INSERT INTO usuarios (nome, email, telefone, senha, usuario ,termos_uso)
        VALUES (%s, %s, %s, %s, %s, %s)
        '''
        valores = (nome, email, telefone, senha, usuario, int(termos_uso))

        cursor.execute(sql, valores)
        conexao.commit()
        return "Usuário cadastrado com sucesso!"

    except (pymysql.MySQLError, ValueError) as e:
        return f"Erro ao cadastrar usuário: {e}"
    finally:
        if 'cursor' in locals():
            cursor.close()
        if 'conexao' in locals():
            conexao.close()


def ValidarUsuarios(email, senha): 
    try:
        status = 0
        if not isinstance(email, str):
            raise ValueError("Email deve ser uma string.")
        if not isinstance(senha, str):
            raise ValueError("Senha deve ser uma string.")
        
        conexao = Conection()
        cursor = conexao.cursor()

        # Verifica se o e-mail já existe
        # Verifica se existe um usuário com o email e senha informados
        cursor.execute("""
            SELECT * 
            FROM usuarios 
            WHERE email = %s AND senha = %s
        """, (email, senha))

        resultado = cursor.fetchone()
        if resultado:
            retorno = {
                "id": resultado[0],
                "nome": resultado[1],
                "email": resultado[2],
                "telefone": resultado[3],
                "usuario": resultado[5],
                "erro": ''
            }
            status = 1
            return retorno,status
        else:
            retorno = {
                "id": '',
                "nome": '',
                "email": '',
                "telefone": '',
                "usuario": '',
                "erro": 'Usuario não encontrado'
            }
            return retorno,status
    except (pymysql.MySQLError, ValueError) as e:
        retorno = {
                "id": '',
                "nome": '',
                "email": '',
                "telefone": '',
                "usuario": '',
                "erro": f"Erro ao verificar usuário: {e}"
            }
        return retorno,status
    finally:
        if 'cursor' in locals():
            cursor.close()
        if 'conexao' in locals():
            conexao.close()

def CadastrarPets(foto, nome, tipo, raca, idade, genero, porte, peso, localizacao,
                  vacinado, castrado, descricao, personalidade, saude,
                  necessidades_especiais, requisitos_adocao, informacoes_contato):
    try:
        # Validações de tipo e conteúdo
        campos_texto = {
            'foto': foto,
            'nome': nome,
            'tipo': tipo,
            'raca': raca,
            'idade': idade,
            'genero': genero,
            'porte': porte,
            'peso': peso,
            'localizacao': localizacao,
            'descricao': descricao,
            'personalidade': personalidade,
            'saude': saude,
            'necessidades_especiais': necessidades_especiais,
            'requisitos_adocao': requisitos_adocao,
            'informacoes_contato': informacoes_contato
        }

        for campo, valor in campos_texto.items():
            if not isinstance(valor, str) or valor.strip() == "":
                raise ValueError(f'O campo "{campo}" é obrigatório e deve ser uma string não vazia.')

        # Validação de vacinado e castrado (booleanos ou inteiros 0/1)
        if not isinstance(vacinado, (bool, int)):
            raise ValueError("O campo 'vacinado' deve ser booleano ou inteiro (0 ou 1).")
        if not isinstance(castrado, (bool, int)):
            raise ValueError("O campo 'castrado' deve ser booleano ou inteiro (0 ou 1).")

        # Conexão e inserção no banco de dados
        conexao = Conection()
        cursor = conexao.cursor()

        sql = '''
        INSERT INTO animais (
            foto, nome, tipo, raca, idade, genero, porte, peso, localizacao,
            vacinado, castrado, descricao, personalidade, saude,
            necessidades_especiais, requisitos_adocao, informacoes_contato
        ) VALUES (
            %s, %s, %s, %s, %s, %s, %s, %s, %s,
            %s, %s, %s, %s, %s,
            %s, %s, %s
        )
        '''

        valores = (
            foto, nome, tipo, raca, idade, genero, porte, peso, localizacao,
            int(vacinado), int(castrado), descricao, personalidade, saude,
            necessidades_especiais, requisitos_adocao, informacoes_contato
        )

        cursor.execute(sql, valores)
        conexao.commit()
        return "Pet cadastrado com sucesso!"

    except (pymysql.MySQLError, ValueError) as e:
        return f"Erro ao cadastrar pet: {e}"
    finally:
        if 'cursor' in locals():
            cursor.close()
        if 'conexao' in locals():
            conexao.close()

def ListarTodosOsPets(nome=None, tipo=None, porte=None):
    try:
        # Cria a conexão com o banco de dados
        conexao = Conection()
        
        # Cria um cursor que retorna os resultados como dicionários
        cursor = conexao.cursor(pymysql.cursors.DictCursor)

        # SQL base da consulta (sem filtros ainda)
        sql = "SELECT * FROM animais"
        
        # Lista para armazenar condições (WHERE) dinamicamente
        filtros = []
        
        # Lista para armazenar os valores a serem usados na consulta com %s
        valores = []

        # Adiciona filtro de nome se informado
        if nome:
            filtros.append("nome LIKE %s")
            valores.append(f"%{nome}%")  # LIKE permite buscas parciais (ex: "Bob" encontra "Bobby")

        # Adiciona filtro de tipo se informado (ex: cachorro, gato)
        if tipo:
            filtros.append("tipo = %s")
            valores.append(tipo)

        # Adiciona filtro de tamanho se informado (campo porte na tabela)
        if porte:
            filtros.append("porte = %s")
            valores.append(porte)

        # Se houver algum filtro, adiciona cláusula WHERE à consulta
        if filtros:
            sql += " WHERE " + " AND ".join(filtros)  # Junta os filtros com AND

        # Executa a consulta com os valores dos filtros
        cursor.execute(sql, valores)
        
        # Recupera todos os resultados
        pets = cursor.fetchall()

        # Se não encontrar resultados, retorna lista vazia com mensagem
        if not pets:
            return [], "Nenhum animal encontrado com os filtros aplicados.", 1

        # Se encontrar, retorna os pets e mensagem de sucesso
        return pets, "Animais encontrados com sucesso.", 1

    except pymysql.MySQLError as e:
        # Trata possíveis erros do MySQL e retorna mensagem de erro
        return [], f"Erro ao buscar animais: {e}", 0

    finally:
        # Fecha o cursor se foi criado
        if 'cursor' in locals():
            cursor.close()
        # Fecha a conexão se foi criada
        if 'conexao' in locals():
            conexao.close()



def main():
    try:
        CriarTabelaUsuarios()
        CriarTabelaPets()
    except Exception as e:
        print(f"Erro ao criar tabelas do Banco de dados: {e}")
if __name__ == "__main__":
    main()