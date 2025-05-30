from flask import Flask, render_template, request, redirect
import json
import os

app = Flask(__name__)

CAMINHO_ARQUIVO = 'data.json'

# Função para carregar as avaliações do JSON
def carregar_avaliacoes():
    if os.path.exists(CAMINHO_ARQUIVO):
        with open(CAMINHO_ARQUIVO, 'r', encoding='utf-8') as f:
            return json.load(f).get("avaliacoes", [])
    return []

# Função para salvar uma nova avaliação no JSON
def salvar_avaliacao(nova_avaliacao):
    dados = {"avaliacoes": carregar_avaliacoes()}
    dados["avaliacoes"].append(nova_avaliacao)
    with open(CAMINHO_ARQUIVO, 'w', encoding='utf-8') as f:
        json.dump(dados, f, ensure_ascii=False, indent=4)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        nome = request.form['nome']
        livro = request.form['livro']
        comentario = request.form['comentario']
        nota = int(request.form['nota'])

        nova_avaliacao = {
            'nome': nome,
            'livro': livro,
            'comentario': comentario,
            'nota': nota
        }

        salvar_avaliacao(nova_avaliacao)
        return redirect('/')

    avaliacoes = carregar_avaliacoes()
    return render_template('index.html', avaliacoes=avaliacoes)

if __name__ == '__main__':
    app.run(debug=True)
