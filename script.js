// ===============================
// BANCO DE DADOS
// ===============================

const banco = {
  filmes: [
    {
      palavra: "Frozen",
      dicas: [
        "isolamento emocional",
        "frio constante",
        "amor que quebra bloqueios",
        "poder difícil de controlar"
      ]
    },
    {
      palavra: "Toy Story",
      dicas: [
        "medo de ser esquecido",
        "vida secreta",
        "ciúmes",
        "amizade construída"
      ]
    },
    {
      palavra: "Rei Leão",
      dicas: [
        "culpa pelo passado",
        "destino inevitável",
        "fuga",
        "retorno necessário"
      ]
    },
    {
      palavra: "Homem-Aranha",
      dicas: [
        "responsabilidade excessiva",
        "vida dupla",
        "sacrifício pessoal",
        "culpa por não agir"
      ]
    }
  ],

  comida: [
    {
      palavra: "Maçã",
      dicas: [
        "queda que muda tudo",
        "conhecimento proibido",
        "algo simples e simbólico"
      ]
    },
    {
      palavra: "Pizza",
      dicas: [
        "divisão",
        "coletividade",
        "diferenças num mesmo todo"
      ]
    }
  ],

  animais: [
    {
      palavra: "Cachorro",
      dicas: [
        "lealdade sem cálculo",
        "proteção constante",
        "presença fiel"
      ]
    },
    {
      palavra: "Gato",
      dicas: [
        "independência",
        "afeto imprevisível",
        "presença silenciosa"
      ]
    }
  ]
};

// ===============================
// ESTADO DO JOGO
// ===============================

let jogadores = [];
let jogadorAtual = 0;
let impostorIndex = 0;
let palavraSorteada = null;
let dicaImpostor = "";

// ===============================
// INICIAR JOGO
// ===============================

function iniciarJogo() {
  const nomesInput = document.getElementById("nomesJogadores").value;
  const tema = document.getElementById("tema").value;

  jogadores = nomesInput
    .split(",")
    .map(nome => nome.trim())
    .filter(nome => nome.length > 0);

  if (jogadores.length < 3) {
    alert("Digite pelo menos 3 jogadores.");
    return;
  }

  const listaTema = banco[tema];
  palavraSorteada = listaTema[Math.floor(Math.random() * listaTema.length)];
  dicaImpostor =
    palavraSorteada.dicas[
      Math.floor(Math.random() * palavraSorteada.dicas.length)
    ];

  impostorIndex = Math.floor(Math.random() * jogadores.length);
  jogadorAtual = 0;

  document.getElementById("setup").classList.add("hidden");
  document.getElementById("jogo").classList.remove("hidden");

  atualizarTitulo();
}

// ===============================
// ATUALIZA NOME DO JOGADOR
// ===============================

function atualizarTitulo() {
  document.getElementById("jogadorTitulo").innerText =
    `Vez de: ${jogadores[jogadorAtual]}`;
}

// ===============================
// MOSTRAR PALAVRA OU IMPOSTOR
// ===============================

function mostrarPalavra() {
  const nome = jogadores[jogadorAtual];

  if (jogadorAtual === impostorIndex) {
    alert(
      ` ${nome}, VOCÊ É O IMPOSTOR \n\nDica: ${dicaImpostor}`
    );
  } else {
    alert(
      `🎭 ${nome}, sua palavra é:\n\n${palavraSorteada.palavra}`
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
