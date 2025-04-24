let expressao = "";
const tela = document.getElementById("tela");

function adicionar(valor) {
  if (tela.textContent === "0" && valor !== '+' && valor !== '-' && valor !== '/') {
    expressao = valor;
  } else {
    expressao += valor;
  }
  tela.textContent = expressao;
}

function limpar() {
  expressao = "";
  tela.textContent = "0";
}

function calcular() {
  try {
    const resultado = eval(expressao);
    tela.textContent = resultado;
    expressao = resultado.toString();
  } catch {
    tela.textContent = "Erro";
    expressao = "";
  }
}
