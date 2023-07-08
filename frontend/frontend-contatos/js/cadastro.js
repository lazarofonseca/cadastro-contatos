
const frm = document.querySelector("form");
const url = "http://localhost:8080/contatos"

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const nome = frm.inNome.value;
    const endereco = frm.inEndereco.value;
    const dataNascimento = frm.inData.value;
    const telefone = frm.inTelefone.value;

    const dados = {
        nome : nome,
        endereco : endereco,
        dataNascimento : dataNascimento,
        telefone : telefone
    }   
    
    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.status);
          }
          return response.json();
        })
        .then(resposta => {
          console.log('Resposta da API:', resposta);
          // Faça o que for necessário com a resposta
        })
        .catch(error => console.error('Erro ao enviar os dados:', error));

        alert("Cadastro realizado com sucesso!");
        window.location.href = "http://127.0.0.1:5500/index.html";
        //frm.reset();
    })

    
