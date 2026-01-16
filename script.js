const banco = [
  {
    normal: "O que você costuma comer no café da manhã?",
    impostor: "O que você costuma comer no jantar?"
  },
  {
    normal: "O que você faz quando chega em casa?",
    impostor: "O que você faz antes de sair de casa?"
  },
  {
    normal: "Que tipo de filme você assiste para se divertir?",
    impostor: "Que tipo de filme você assiste por obrigação?"
  },
  {
    normal: "O que você costuma fazer no fim de semana?",
    impostor: "O que você costuma fazer durante a semana?"
  },
  {
    normal: "Qual comida você escolheria para uma festa?",
    impostor: "Qual comida você escolheria para comer sozinho?"
  },
  {
    normal: "Que filme você assistiria com amigos?",
    impostor: "Que filme você assistiria sozinho?"
  },
  {
    normal: "O que você faz quando está entediado?",
    impostor: "O que você faz quando está com pressa?"
  },
  {
    normal: "O que você costuma pedir em um restaurante?",
    impostor: "O que você costuma pedir em casa?"
  },
  {
    normal: "Qual filme você já viu várias vezes?",
    impostor: "Qual filme você viu apenas uma vez?"
  },
  {
    normal: "O que você faz quando quer relaxar?",
    impostor: "O que você faz quando precisa se concentrar?"
  }
];

let jogadores = [];
let jogadorAtual = 0;
let impostorIndex = 0;
let perguntaAtual = null;

function iniciarJogo() {
  const nomesInput = document.getElementById("nomesJogadores").value;

  jogadores = nomesInput
    .split(",")
    .map(n => n.trim())
    .filter(n => n.length > 0);

  if (jogadores.length < 3) {
    alert("Digite pelo menos 3 jogadores.");
    return;
  }

  perguntaAtual = banco[Math.floor(Math.random() * banco.length)];
  impostorIndex = Math.floor(Math.random() * jogadores.length);
  jogadorAtual = 0;

  document.getElementById("setup").classList.add("hidden");
  document.getElementById("jogo").classList.remove("hidden");

  atualizarTitulo();
}
