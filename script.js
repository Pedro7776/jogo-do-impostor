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

function atualizarTitulo() {
  document.getElementById("jogadorTitulo").innerText =
    `Vez de: ${jogadores[jogadorAtual]}`;
}

function mostrarPergunta() {
  const nome = jogadores[jogadorAtual];

  if (jogadorAtual === impostorIndex) {
    alert(
      `${nome}, responda:\n\n${perguntaAtual.impostor}`
    );
  } else {
    alert(
      `${nome}, responda:\n\n${perguntaAtual.normal}`
    );
  }

  jogadorAtual++;

  if (jogadorAtual >= jogadores.length) {
    document.getElementById("jogo").classList.add("hidden");
    document.getElementById("resultado").classList.remove("hidden");
  } else {
    atualizarTitulo();
  }
}
