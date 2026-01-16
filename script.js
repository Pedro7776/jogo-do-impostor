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
    normal: "Qual música você gosta de ouvir?",
    diferente: "Qual música você sempre pula?"
  },
  {
    normal: "O que você faz no tempo livre?",
    diferente: "O que você evita fazer no tempo livre?"
  },
  {
    normal: "Qual comida você gosta muito?",
    diferente: "Qual comida você não suporta?"
  },
  {
    normal: "Qual lugar você gosta de ir?",
    diferente: "Qual lugar você evita ir?"
  },
  {
    normal: "O que você costuma fazer nos fins de semana?",
    diferente: "O que você nunca faz nos fins de semana?"
  },
  {
    normal: "Qual aplicativo você mais usa?",
    diferente: "Qual aplicativo você menos usa?"
  },
  {
    normal: "O que você faz quando está entediado?",
    diferente: "O que você faz quando está muito ocupado?"
  },
  {
    normal: "Qual série você gosta de assistir?",
    diferente: "Qual série você abandonou?"
  },
  {
    normal: "O que te deixa feliz?",
    diferente: "O que te deixa irritado?"
  },
  {
    normal: "O que você costuma beber durante o dia?",
    diferente: "O que você evita beber?"
  },
  {
    normal: "Qual matéria você gosta mais?",
    diferente: "Qual matéria você menos gosta?"
  },
  {
    normal: "O que você faz quando não consegue dormir?",
    diferente: "O que você faz logo ao acordar?"
  },
  {
    normal: "Qual jogo você gosta de jogar?",
    diferente: "Qual jogo você não gosta de jogar?"
  },
  {
    normal: "O que você costuma fazer no celular?",
    diferente: "O que você quase nunca faz no celular?"
  },
  {
    normal: "Qual clima você prefere?",
    diferente: "Qual clima você detesta?"
  },
  {
    normal: "O que você gosta de comprar?",
    diferente: "O que você evita comprar?"
  },
  {
    normal: "Qual horário do dia você prefere?",
    diferente: "Qual horário do dia você menos gosta?"
  },
  {
    normal: "O que você faz quando está animado?",
    diferente: "O que você faz quando está desanimado?"
  },
  {
    normal: "Qual tipo de filme você gosta?",
    diferente: "Qual tipo de filme você evita?"
  },
  {
    normal: "O que você costuma fazer sozinho?",
    diferente: "O que você prefere fazer acompanhado?"
  },
  {
    normal: "Qual rede social você mais usa?",
    diferente: "Qual rede social você quase não usa?"
  },
  {
    normal: "O que você gosta de aprender?",
    diferente: "O que você não tem vontade de aprender?"
  }

];

let jogadores = [];
let indiceAtual = 0;
let indiceDiferente = 0;
let perguntaSorteada = null;

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("btnIniciar")
    .addEventListener("click", iniciarJogo);

  document
    .getElementById("btnPergunta")
    .addEventListener("click", mostrarPergunta);
});

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

