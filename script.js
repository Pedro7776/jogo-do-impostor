const banco = {
  filmes: [
    {
      palavra: "Frozen",
      dicas: ["isolamento", "frio emocional", "laço familiar"]
    },
    {
      palavra: "Toy Story",
      dicas: ["medo de ser esquecido", "vida secreta", "amizade construída"]
    },
    {
      palavra: "Rei Leão",
      dicas: ["culpa", "destino", "retorno necessário"]
    },
    {
      palavra: "Homem-Aranha",
      dicas: ["responsabilidade", "vida dupla", "sacrifício"]
    },
    {
      palavra: "Vingadores",
      dicas: ["grupo improvável", "união forçada", "ameaça maior"]
    },
    {
      palavra: "Jurassic Park",
      dicas: ["controle ilusório", "natureza indomável", "erro humano"]
    },
    {
      palavra: "Divertida Mente",
      dicas: ["emoções em conflito", "crescimento", "mudança interna"]
    },
    {
      palavra: "Monstros S.A.",
      dicas: ["medo como recurso", "trabalho repetitivo", "empatia"]
    },
    {
      palavra: "Aladdin",
      dicas: ["desejo", "identidade escondida", "liberdade"]
    },
    {
      palavra: "Cinderela",
      dicas: ["espera", "transformação", "tempo limitado"]
    }
  ],

  comida: [
    {
      palavra: "Maçã",
      dicas: ["queda simbólica", "conhecimento", "simplicidade enganosa"]
    },
    {
      palavra: "Pizza",
      dicas: ["compartilhamento", "coletividade", "escolhas"]
    },
    {
      palavra: "Chocolate",
      dicas: ["prazer imediato", "recompensa emocional", "culpa leve"]
    },
    {
      palavra: "Hambúrguer",
      dicas: ["excesso", "popularidade", "conforto rápido"]
    },
    {
      palavra: "Sorvete",
      dicas: ["alívio temporário", "infância", "fragilidade"]
    },
    {
      palavra: "Banana",
      dicas: ["energia rápida", "simplicidade", "cotidiano"]
    },
    {
      palavra: "Bolo",
      dicas: ["celebração", "ritual", "partilha"]
    },
    {
      palavra: "Arroz",
      dicas: ["base constante", "presença silenciosa", "rotina"]
    },
    {
      palavra: "Batata Frita",
      dicas: ["prazer simples", "vício leve", "companhia"]
    },
    {
      palavra: "Pão",
      dicas: ["essencial", "origem", "sustento"]
    }
  ],

  animais: [
    {
      palavra: "Cachorro",
      dicas: ["lealdade", "presença constante", "proteção"]
    },
    {
      palavra: "Gato",
      dicas: ["independência", "afeto imprevisível", "distância"]
    },
    {
      palavra: "Leão",
      dicas: ["autoridade", "isolamento", "força como dever"]
    },
    {
      palavra: "Elefante",
      dicas: ["memória", "peso simbólico", "presença marcante"]
    },
    {
      palavra: "Pássaro",
      dicas: ["liberdade observada", "distância", "movimento"]
    },
    {
      palavra: "Peixe",
      dicas: ["silêncio", "ambiente invisível", "fluxo"]
    },
    {
      palavra: "Cavalo",
      dicas: ["força guiada", "movimento", "trabalho"]
    },
    {
      palavra: "Tartaruga",
      dicas: ["tempo próprio", "resistência", "constância"]
    },
    {
      palavra: "Macaco",
      dicas: ["curiosidade", "imitação", "agilidade"]
    },
    {
      palavra: "Coruja",
      dicas: ["observação", "noite", "sabedoria silenciosa"]
    }
  ]
};

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

