const input = document.querySelector("input"); // Selecionando o input do HTML para ser usado
const button = document.querySelector("button"); // Selecionando o botão do HTML
const result = document.querySelector(".result"); // Selecionando a div com a class result do HTML

// Criando um evento de clique no botão
button.addEventListener("click", async () => {
  const cep = input.value; // pegando o cep digitado pelo usuário

  // Consumindo a API
  const url = `https://brasilapi.com.br/api/cep/v2/${cep}`;

  // Obtendo os dados da API
  const response = await fetch(url);

  // Convertendo os dados para JSON
  const data = await response.json();

  // Exibindo os dados no HTML
  result.innerHTML = `
    <p>${data.cep}</p>
    <p>${data.street}</p>
    <p>${data.city}</p>
    <p>${data.neighborhood}</p>
    <p>${data.state}</p>
    `;

  // Limpar o input
  input.value = "";

  // Colocar o foco no input
  input.focus();
});
