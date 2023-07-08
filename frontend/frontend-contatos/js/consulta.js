
const URL = "http://localhost:8080/contatos";

    // Dados de exemplo
    function buscarDados() {
        fetch(`${URL}`)
        .then(response => {
        if (!response.ok) {
             throw new Error('Erro na requisição: ' + response.status);
        }
            return response.json();
        })
        .then(dados => {
        console.log('Dados recebidos:', dados);
        preencherTabela(dados);
    })
    .catch(error => console.error('Erro ao buscar os dados:', error));
    }

    // Função para preencher a tabela com os dados
    function preencherTabela(dados){
      var tabela = document.getElementById('tabela-dados');
      var tbody = tabela.getElementsByTagName('tbody')[0];

      console.log(dados);

      for (var i = 0; i < dados.length; i++) {
        var dado = dados[i];
        var row = document.createElement('tr');

        // Coluna de Código
        var colCodigo = document.createElement('td');
        colCodigo.textContent = dado.codigo;
        row.appendChild(colCodigo);

        // Coluna de Nome
        var colNome = document.createElement('td');
        colNome.textContent = dado.nome;
        row.appendChild(colNome);

        // Coluna de Endereço
        var colEndereco = document.createElement('td');
        colEndereco.textContent = dado.endereco;
        row.appendChild(colEndereco);

        // Coluna de Data de Nascimento
        var colDataNascimento = document.createElement('td');
        //colDataNascimento.textContent = dado.dataNascimento;
        let data_nascimento = new Date(dado.dataNascimento);
        var dia = String(data_nascimento.getDate()).padStart(2, '0');
        var mes = String(data_nascimento.getMonth() + 1).padStart(2, '0');
        var ano = data_nascimento.getFullYear();
       
        var dataFormatada = dia + '-' + mes + '-' + ano;
        
        colDataNascimento.textContent = dataFormatada;
        row.appendChild(colDataNascimento);

        // Coluna de Telefone
        var colTelefone = document.createElement('td');
        colTelefone.textContent = dado.telefone;
        row.appendChild(colTelefone);

        // Coluna de Ações
        var colAcoes = document.createElement('td');
        var botaoEditar = document.createElement('button');
        botaoEditar.textContent = 'Editar';
        botaoEditar.classList.add("botao-editar");
        botaoEditar.addEventListener('click', function() {
            editarRegistro(dado.codigo);
        });
        colAcoes.appendChild(botaoEditar);

        var botaoDeletar = document.createElement('button');
        botaoDeletar.textContent = 'Deletar';
        botaoDeletar.classList.add("botao-deletar");
        botaoDeletar.addEventListener('click', function() {
            deletarRegistro(dado.codigo);
        });
        colAcoes.appendChild(botaoDeletar);

        row.appendChild(colAcoes);

        tbody.appendChild(row);
      }
    }
    buscarDados();