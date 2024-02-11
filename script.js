function buscarCep() {
  const cep = document.getElementById('cep').value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
    .then(response => response.json())
    .then(data => exibirResultado(data))
    .catch(error => console.log(error));
}

function exibirResultado(data) {
  const resultadoDiv = document.getElementById('resultado');

  if (data.erro) {
    resultadoDiv.innerHTML = 'CEP não encontrado.';
  } else {
    resultadoDiv.innerHTML = `
      <p>CEP: ${data.cep}</p>
      <p>Logradouro: ${data.logradouro}</p>
      <p>Bairro: ${data.bairro}</p>
      <p>Cidade: ${data.localidade}</p>
      <p>Estado: ${data.uf}</p>
    `;
  }
}
