const perguntas = [
  {
    normal: "O que você costuma comer no café da manhã?",
    diferente: "O que você costuma comer à noite?"
  },
  {
    normal: "O que você faz quando chega em casa?",
    diferente: "O que você faz antes de sair de casa?"
  },
  {
    normal: "Qual filme você gosta de assistir?",
    diferente: "Qual filme você evita assistir?"
  },
  {
    normal: "O que você costuma fazer no fim de semana?",
    diferente: "O que você costuma fazer durante a semana?"
  },
  {
    normal: "Qual comida você escolheria para uma festa?",
    diferente: "Qual comida você escolheria para comer sozinho?"
  }
];

let jogadores = [];
let indiceAtual = 0;
let indiceDiferente = 0;
let perguntaSorteada = null;

function iniciarJogo() {
  jogadores = document
    .getElementById("nomesJogadores")
    .value
    .split(",")
    .map(n => n.trim())
    .filter(n => n !== "");

  if (jogadores.length < 2) {
    alert("Digite pelo menos dois jogadores.");
    return;
  }

  indiceAtual = 0;
  indiceDiferente = Math.floor(Math.random() * jogadores.length);
  perguntaSorteada =
    perguntas[Math.floor(Math.random() * perguntas.length)];

  document.getElementById("setup").classList.add("hidden");
  document.getElementById("jogo").classList.remove("hidden");

  atualizarJogador();
}

function atualizarJogador() {
  document.getElementById("jogadorTitulo").innerText =
    "Vez de: " + jogadores[indiceAtual];
}

function mostrarPergunta() {
  const pergunta =
    indiceAtual === indiceDiferente
      ? perguntaSorteada.diferente
      : perguntaSorteada.normal;

  alert(pergunta);

  indiceAtual++;

  if (indiceAtual >= jogadores.length) {
    document.getElementById("jogo").classList.add("hidden");
    document.getElementById("resultado").classList.remove("hidden");

    document.getElementById("perguntaFinal").innerText =
      perguntaSorteada.normal;
  } else {
    atualizarJogador();
  }
}
