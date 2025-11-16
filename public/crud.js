const tabela = document.querySelector("#tabelaFilmes tbody");
const url = "http://localhost:3000/filmes";

function carregarFilmes() {
  fetch(url)
    .then(res => res.json())
    .then(filmes => {
      tabela.innerHTML = "";
      filmes.forEach(filme => {
        tabela.innerHTML += `
          <tr>
            <td>${filme.id}</td>
            <td>${filme.titulo}</td>
            <td>${filme.descricao}</td>
            <td>
              <button onclick="editarFilme(${filme.id})">Editar</button>
              <button onclick="deletarFilme(${filme.id})">Excluir</button>
            </td>
          </tr>
        `;
      });
    });
}

function configurarFormulario() {
  const form = document.getElementById("formFilme");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const novoFilme = {
      titulo: form.titulo.value,
      descricao: form.descricao.value,
      imagem: form.imagem.value
    };
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoFilme)
    }).then(() => {
      form.reset();
      carregarFilmes();
    });
  });
}

function deletarFilme(id) {
  fetch(`${url}/${id}`, { method: "DELETE" })
    .then(() => carregarFilmes());
}

configurarFormulario();
carregarFilmes();
