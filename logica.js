/**
 * logicas.js
 * * Este arquivo contém a lógica de cálculo de pontuação do Jogo da T5.
 * O código foi gerado com base nas regras e validações fornecidas pelo usuário.
 * * Estrutura:
 * - cartas: Array de objetos com as propriedades de cada carta (nome, tipo, pontos e lógica).
 * - acoes: Array de strings com as ações do jogador que afetam a pontuação.
 * - calcularPontuacao: Função principal que calcula a pontuação da mão do jogador.
 */

// Cartas e suas lógicas
const cartas = [
  // --- Personagens ---
  {
    nome: "História Sem Fim",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 80, cartas: ["Procura Sem Fim"] },
        { tipo: "condicional", valor: 10, condicao: (mao) => mao.filter(c => c.nome.includes("Renan")).length === 3 }
      ],
      penalidades: [
        { tipo: "condicional", valor: 10, condicao: (mao) => mao.filter(c => c.nome.includes("Renan")).length < 3 }
      ]
    }
  },
  {
    nome: "MãeCaé Tips",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Telepata de Ni", "Caô Amigo"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Social"] }
      ]
    }
  },
  {
    nome: "Scheid Filho",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Kahoot"] },
        { tipo: "porTags", valor: 15, tags: ["Filho"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 15, tags: ["Social"] }
      ]
    }
  },
  {
    nome: "Tia Clarisse",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Disney de Janeiro"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Social"] }
      ]
    }
  },
  {
    nome: "Comprovadamente Perdida",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porTags", valor: 30, tags: ["Perdido"], contagem: 3 }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Perdido"], condicao: (mao) => mao.filter(c => c.tags && c.tags.includes("Perdido")).length < 3 }
      ]
    }
  },
  {
    nome: "Milionário Disfarçado",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 50, cartas: ["Contador de Moedas"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["Segura, Peão!"] }
      ]
    }
  },
  {
    nome: "Bassani Sindical",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Dados Conflitantes"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Social"] },
        { tipo: "porCartas", valor: 10, cartas: ["MaCaribe"] }
      ]
    }
  },
  {
    nome: "Feliz Aniversário",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porTipos", valor: 10, tipos: ["Evento"] },
        { tipo: "porCartas", valor: 10, cartas: ["Bolo de Aniversário", "MaCaribe", "Check-list"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["Pergunta sem Timing"] },
        { tipo: "condicional", valor: 10, condicao: (mao) => !mao.some(c => c.tags && c.tags.includes("Social")) }
      ]
    }
  },
  {
    nome: "Sósia do Caio",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Disney de Janeiro"] },
        { tipo: "porCartas", valor: 5, cartas: ["MaCaribe"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["Café"] }
      ]
    }
  },
  {
    nome: "Estratégia Cruel",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Vix em Pó"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Social"] }
      ]
    }
  },
  {
    nome: "Tromps dos Magos",
    tipo: "Personagem",
    pontos: 20,
    tags: ["Soninho"],
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Nikiti na Panela"] },
        { tipo: "porOutrasTags", valor: 10, tags: ["Soninho"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Social"] }
      ]
    }
  },
  {
    nome: "Número Mágico",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Ordem de Grandeza"] }
      ],
      penalidades: [
        { tipo: "porAcao", valor: 10, acao: "tentou valor aproximado", condicao: false }
      ]
    }
  },
  {
    nome: "Prefeito Pimenta",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Nikiti na Panela", "Carona"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Social"] }
      ]
    }
  },
  {
    nome: "Guitarra de Suprimentos",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 80, cartas: ["PDV"] },
        { tipo: "porCartas", valor: 10, cartas: ["General Trigus Aurelius"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Social"] }
      ]
    }
  },
  {
    nome: "Joabe-se Quem Puder",
    tipo: "Personagem",
    pontos: 20,
    tags: ["Premium Care"],
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Lista de Presença"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Social"] }
      ]
    }
  },
  {
    nome: "Super Sincera",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Guitarra de Suprimentos"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Social"] }
      ]
    }
  },
  {
    nome: "Vamos Marcar",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Pato Migratório"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Social"] }
      ]
    }
  },
  {
    nome: "Colheita Feliz",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Pato Migratório"] },
        { tipo: "multiplicativo", valor: 5, cartas: ["Shinobi Campista", "PETagoga", "Vereadora"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Social"] }
      ]
    }
  },
  {
    nome: "Raulzito",
    tipo: "Personagem",
    pontos: 20,
    tags: ["PetroBanda"],
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porOutrasTags", valor: 10, tags: ["PetroBanda"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Social"] }
      ]
    }
  },
  {
    nome: "Renan Preso",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "condicional", valor: 10, condicao: (mao) => mao.filter(c => c.nome.includes("Renan")).length === 3 }
      ],
      penalidades: [
        { tipo: "condicional", valor: 10, condicao: (mao) => mao.filter(c => c.nome.includes("Renan")).length < 3 }
      ]
    }
  },
  {
    nome: "Super Mario on IceCream",
    tipo: "Personagem",
    pontos: 20,
    tags: ["Premium Care"],
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Não pode ser real", "Calebito Vai dar Certo"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["Wario"] }
      ]
    }
  },
  {
    nome: "Telepata de Ni",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Caô Amigo", "MãeCaé Tips"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["Rita Lee"] }
      ]
    }
  },
  {
    nome: "Espião do PC",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 50, cartas: ["Apresentação do Projeto"] }
      ],
      penalidades: [
        { tipo: "porOutrosTipos", valor: 5, tipos: ["Personagem"] }
      ]
    }
  },
  {
    nome: "Bruce Weiner",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 50, cartas: ["Alfred"] }
      ],
      penalidades: [
        { tipo: "naoTiverCarta", valor: 10, cartas: ["Labrador"] }
      ]
    }
  },
  {
    nome: "CaretaPool",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Cruelrine"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["Pato Migratório"] }
      ]
    }
  },
  {
    nome: "Série B",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Vix em Pó"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Social"] }
      ]
    }
  },
  {
    nome: "Média de Ouro",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Curso de Formação", "Nikiti na Panela"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Social"] }
      ]
    }
  },
  {
    nome: "Clara Herculino",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Nikiti na Panela"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Social"] },
        { tipo: "porCartas", valor: 10, cartas: ["Enquete"] }
      ]
    }
  },
  {
    nome: "Jorge Veludo",
    tipo: "Personagem",
    pontos: 20,
    tags: ["Premium Care"],
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Disney de Janeiro"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Social"] }
      ]
    }
  },
  {
    nome: "Farmácia",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porOutrosTipos", valor: 5, tipos: ["Personagem"] }
      ]
    }
  },
  {
    nome: "Soneca Russa",
    tipo: "Personagem",
    pontos: 20,
    tags: ["Soninho"],
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Disney de Janeiro"] },
        { tipo: "porOutrasTags", valor: 10, tags: ["Soninho"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["Pergunta sem Timing"] }
      ]
    }
  },
  {
    nome: "Tô Em Todas",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "condicional", valor: 10, condicao: (mao) => mao.some(c => c.tipo === "Evento") && mao.some(c => c.tipo === "Local") }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 15, cartas: ["Aplausos Constrangedores"] }
      ]
    }
  },
  {
    nome: "Pai do Regato",
    tipo: "Personagem",
    pontos: 20,
    tags: ["Premium Care"],
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Camiseto"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Social"] }
      ]
    }
  },
  {
    nome: "Praieira de Minas",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Vix em Pó", "Série B"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Social"] }
      ]
    }
  },
  {
    nome: "Solução Caseira",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Aniversário do Anderson", "Festa Anual"] }
      ],
      penalidades: [
        { tipo: "porAcao", valor: 10, acao: "tirou a barba" }
      ]
    }
  },
  {
    nome: "Rei da Rifa",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 50, cartas: ["Rifa"] },
        { tipo: "porCartas", valor: 10, cartas: ["Curso de Formação"] }
      ],
      penalidades: [
        { tipo: "porAcao", valor: 10, acao: "repetiu a explicação da matéria" }
      ]
    }
  },
  {
    nome: "Aí Vem O Desespero",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Discussão Pós-prova"] }
      ],
      penalidades: [
        { tipo: "multiplicativo", valor: 10, cartas: ["MaCaribe"], tags: ["Social"] }
      ]
    }
  },
  {
    nome: "ServiceNat",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porOutrosTipos", valor: 5, tipos: ["Personagem"] },
        { tipo: "porCartas", valor: 10, cartas: ["Nikiti na Panela"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Social"] }
      ]
    }
  },
  {
    nome: "Luiz de Lente",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 50, cartas: ["Foto de Óculos"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Social"] }
      ]
    }
  },
  {
    nome: "Gasparzinho Sundown",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Filtro Solar"] }
      ],
      penalidades: [
        { tipo: "naoTiverCarta", valor: 10, cartas: ["EPI Completo"] }
      ]
    }
  },
  {
    nome: "Mari-RUN-a",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Disney de Janeiro"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Soninho"] }
      ]
    }
  },
  {
    nome: "Cruelrine",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["CaretaPool"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Soninho"] }
      ]
    }
  },
  {
    nome: "Gerente Feedback Jr",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Itabompraí"] }
      ],
      penalidades: [
        { tipo: "naoTiverCarta", valor: 10, cartas: ["EPI Completo"] }
      ]
    }
  },
  {
    nome: "New Saulo",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Kit Churrasco"] }
      ],
      penalidades: [
        { tipo: "porAcao", valor: 10, acao: "pegou Uber para Social" }
      ]
    }
  },
  {
    nome: "O Infiltrado",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 50, cartas: ["Treinamento sem Convite"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["Saco Preto"] }
      ]
    }
  },
  {
    nome: "Camiseto",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Pai do Regato", "Feliz Aniversário"] }
      ],
      penalidades: [
        { tipo: "porAcao", valor: 10, acao: "estava de bermuda ou de regata", condicao: false }
      ]
    }
  },
  {
    nome: "Renan Livre Leve",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "condicional", valor: 10, condicao: (mao) => mao.filter(c => c.nome.includes("Renan")).length === 3 },
        { tipo: "porTags", valor: 10, tags: ["Social"] }
      ],
      penalidades: [
        { tipo: "condicional", valor: 10, condicao: (mao) => mao.filter(c => c.nome.includes("Renan")).length < 3 }
      ]
    }
  },
  {
    nome: "Engenheiro Jr Sênior",
    tipo: "Personagem",
    pontos: 20,
    tags: ["Premium Care"],
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porAcao", valor: 10, acao: "é o mais antigo da mão" }
      ],
      penalidades: [
        { tipo: "porAcao", valor: 10, acao: "Neymar Contundido" }
      ]
    }
  },
  {
    nome: "Caôpixaba Modelo",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "condicional", valor: 25, condicao: (mao) => mao.some(c => c.nome === "Vix em Pó") && mao.some(c => c.nome === "MaCaribe") },
        { tipo: "porCartas", valor: 10, cartas: ["Vix em Pó"], condicao: (mao) => !mao.some(c => c.nome === "MaCaribe") }
      ],
      penalidades: [
        { tipo: "porAcao", valor: 10, acao: "fez A Pose", condicao: false }
      ]
    }
  },
  {
    nome: "Meu nome não é Robison",
    tipo: "Personagem",
    pontos: 20,
    tags: ["Premium Care"],
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Presencial de Outra Cidade"] }
      ],
      penalidades: [
        { tipo: "porAcao", valor: 10, acao: "tem nome composto" }
      ]
    }
  },
  {
    nome: "Toddynho",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Disney de Janeiro"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Soninho"] }
      ]
    }
  },
  {
    nome: "Uivo da Varanda",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porTags", valor: 10, tags: ["Social"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["Curso de Formação"] }
      ]
    }
  },
  {
    nome: "Soneca Infinita",
    tipo: "Personagem",
    pontos: 20,
    tags: ["Soninho"],
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Disney de Janeiro"] },
        { tipo: "porOutrasTags", valor: 10, tags: ["Soninho"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["Barrinha de Cereal"] }
      ]
    }
  },
  {
    nome: "Enquetes Everywhere",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Enquete"] },
        { tipo: "porCartas", valor: 5, cartas: ["Cameraman"] }
      ],
      penalidades: [
        { tipo: "naoTiverCarta", valor: 5, cartas: ["Mostra o RG"] }
      ]
    }
  },
  {
    nome: "Come Nada",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["CaretaPool"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Trigo", "Alimento"] }
      ]
    }
  },
  {
    nome: "Ana Pimentão",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porOutrosTipos", valor: 5, tipos: ["Personagem"] }
      ]
    }
  },
  {
    nome: "Trompete Tímido",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Shinobi Campista"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["MaCaribe"] }
      ]
    }
  },
  {
    nome: "Humorista Espião",
    tipo: "Personagem",
    pontos: 20,
    tags: ["Premium Care", "PetroBanda"],
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Nikiti na Panela", "Aniversário do Anderson", "Festa Anual"] }
      ],
      penalidades: [
        { tipo: "naoTiverCarta", valor: 10, cartas: ["Nikiti na Panela"] }
      ]
    }
  },
  {
    nome: "Manager Face",
    tipo: "Personagem",
    pontos: 20,
    tags: ["Premium Care"],
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Presencial de Outra Cidade"] }
      ],
      penalidades: [
        { tipo: "porAcao", valor: 10, acao: "fez Cara de Gerente", condicao: false }
      ]
    }
  },
  {
    nome: "Skin Care Maromba",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Grande Nordeste"] }
      ],
      penalidades: [
        { tipo: "porAcao", valor: 10, acao: "não treinou hoje" }
      ]
    }
  },
  {
    nome: "A Quem Muitos Amaro",
    tipo: "Personagem",
    pontos: 20,
    tags: ["Premium Care"],
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Vix em Pó"] }
      ],
      penalidades: [
        { tipo: "porAcao", valor: 10, acao: "não estava com objeto roxo" }
      ]
    }
  },
  {
    nome: "Mostra o RG",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 5, cartas: ["Enquetes Everywhere", "Cameraman"] }
      ],
      penalidades: [
        { tipo: "naoTiverCarta", valor: 5, cartas: ["Atrasilda"] }
      ]
    }
  },
  {
    nome: "Eu Sou A Lenda",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 15, cartas: ["Comprovante"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["Disney de Janeiro"] }
      ]
    }
  },
  {
    nome: "Segue o Link",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porOutrosTipos", valor: 5, tipos: ["Personagem"] }
      ]
    }
  },
  {
    nome: "Max Milhas",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porAcao", valor: 10, acao: "cantou por 10s" }
      ],
      penalidades: [
        { tipo: "porAcao", valor: 10, acao: "não voou nos últimos 7 dias" }
      ]
    }
  },
  {
    nome: "Atrasilda",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 5, cartas: ["Mostra o RG", "Enquetes Everywhere"] }
      ],
      penalidades: [
        { tipo: "naoTiverCarta", valor: 10, cartas: ["Cameraman"] }
      ]
    }
  },
  {
    nome: "CarioCúcho",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Disney de Janeiro"] }
      ],
      penalidades: [
        { tipo: "porAcao", valor: 10, acao: "estava sem chinelo e chimarrão" }
      ]
    }
  },
  {
    nome: "Olefinas",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Pato Migratório"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["Itabompraí"] }
      ]
    }
  },
  {
    nome: "Tranquilo?",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Disney de Janeiro"] }
      ],
      penalidades: [
        { tipo: "porAcao", valor: 10, acao: "não imitou o Personagem" }
      ]
    }
  },
  {
    nome: "Esqueceram de Mim",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porAcao", valor: 10, acao: "celular >79%" }
      ],
      penalidades: [
        { tipo: "porAcao", valor: 10, acao: "veio de ônibus" }
      ]
    }
  },
  {
    nome: "Zócolo na Caixeta",
    tipo: "Personagem",
    pontos: 20,
    tags: ["Premium Care"],
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Piada Devastadora"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["Pergunta sem Timing"] }
      ]
    }
  },
  {
    nome: "Jogador Colombiano",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 20, cartas: ["Contusão no Joelho"] }
      ],
      penalidades: [
        { tipo: "porAcao", valor: 10, acao: "nunca assistiu Narcos" }
      ]
    }
  },
  {
    nome: "Mochila de Alho",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Disney de Janeiro"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["Mochila Petrobras"] }
      ]
    }
  },
  {
    nome: "Cameraman",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Atrasilda"] },
        { tipo: "porCartas", valor: 5, cartas: ["Mostra o RG"] }
      ],
      penalidades: [
        { tipo: "porAcao", valor: 10, acao: "câmera ligada", condicao: false }
      ]
    }
  },
  {
    nome: "Triplo Banho",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Grande Nordeste"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["Café"] }
      ]
    }
  },
  {
    nome: "Cachacinha",
    tipo: "Personagem",
    pontos: 20,
    tags: ["Soninho"],
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Disney de Janeiro"] },
        { tipo: "porOutrasTags", valor: 10, tags: ["Soninho"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["Pergunta sem Timing"] }
      ]
    }
  },
  {
    nome: "Labrador",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Bruce Weiner"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Soninho"] }
      ]
    }
  },
  {
    nome: "Bigode Sem Tempo",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Disney de Janeiro"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Social"] }
      ]
    }
  },
  {
    nome: "Carioca do Brejo",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Disney de Janeiro"] }
      ],
      penalidades: [
        { tipo: "naoTiverCarta", valor: 15, cartas: ["Café"] }
      ]
    }
  },
  {
    nome: "Caixeta de Zócolo",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Piada Devastadora"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["Pergunta sem Timing"] }
      ]
    }
  },
  {
    nome: "Hermano Mullets",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 15, cartas: ["Presencial de Outra Cidade"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 15, cartas: ["PRESENCIAL"] }
      ]
    }
  },
  {
    nome: "Laboratórios Medley",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Grande Nordeste"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Social"] }
      ]
    }
  },
  {
    nome: "Laboratórios Achè",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Laboratórios Medley"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Social"] }
      ]
    }
  },
  {
    nome: "Ricardo Nervosinho",
    tipo: "Personagem",
    pontos: 20,
    tags: ["Premium Care"],
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porTipos", valor: 10, tipos: ["Evento", "MaCaribe"] }
      ],
      penalidades: [
        { tipo: "condicional", valor: 10, condicao: (mao) => !mao.some(c => c.tags && c.tags.includes("Social")) }
      ]
    }
  },
  {
    nome: "Doceira de Nikiti",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Nikiti na Panela"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Social"] }
      ]
    }
  },
  {
    nome: "Mexido, Não Batido",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Nikiti na Panela"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Social"] }
      ]
    }
  },
  {
    nome: "Shinobi Campista",
    tipo: "Personagem",
    pontos: 20,
    tags: ["PetroBanda"],
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porOutrasTags", valor: 10, tags: ["PetroBanda"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Social"] }
      ]
    }
  },
  {
    nome: "General Trigus Aurelius",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 15, cartas: ["Pão de Queijo"] },
        { tipo: "condicional", valor: 5, condicao: (mao) => mao.some(c => c.nome === "MaCaribe") && mao.some(c => c.tags && c.tags.includes("Social")) }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Trigo"] }
      ]
    }
  },
  {
    nome: "PETagoga",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Vereadora"] },
        { tipo: "multiplicativo", valor: 5, cartas: ["Colheita Feliz", "Shinobi Campista"], tags: ["PET"] }
      ],
      penalidades: [
        { tipo: "porTags", valor: 10, tags: ["Social"] }
      ]
    }
  },
  {
    nome: "Bibliotecário",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 50, cartas: ["Biblioteca do EDIBH"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["Resumo da Carol"] }
      ]
    }
  },
  // --- Locais ---
  {
    nome: "Disney de Janeiro",
    tipo: "Local",
    pontos: 60,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porAcao", valor: 10, acao: "estava de chinelo" },
        { tipo: "porAcao", valor: 10, acao: "estava tomando mate" }
      ],
    }
  },
  {
    nome: "Nikiti na Panela",
    tipo: "Local",
    pontos: 60,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porAcao", valor: 10, acao: "via corpo de água" },
        { tipo: "porAcao", valor: 10, acao: "via Corcovado" }
      ]
    }
  },
  {
    nome: "Vix em Pó",
    tipo: "Local",
    pontos: 60,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porAcao", valor: 10, acao: "comeu caranguejo" },
        { tipo: "porAcao", valor: 10, acao: "tinha pó no pé ou na roupa" }
      ]
    }
  },
  {
    nome: "Grande Nordeste",
    tipo: "Local",
    pontos: 60,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porAcao", valor: 10, acao: "pegou sol" },
        { tipo: "porAcao", valor: 10, acao: "bebeu água" }
      ]
    }
  },
  {
    nome: "MaCaribe",
    tipo: "Local",
    pontos: 60,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porAcao", valor: 10, acao: "estava de camiseta" }
      ],
      regraEspecial: (mao) => {
        const eventosNaMao = mao.filter(c => c.tipo === "Evento").length;
        return eventosNaMao <= 3;
      }
    }
  },
  {
    nome: "Itabompraí",
    tipo: "Local",
    pontos: 50,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porAcao", valor: 20, acao: "estava de bota" },
        { tipo: "porAcao", valor: 20, acao: "Estar de EPI Completo" }
      ]
    }
  },
  // --- Itens/Memes ---
  {
    nome: "Herbalife",
    tipo: "Item/Meme",
    pontos: 5,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "multiplicativo", valor: 10, cartas: ["Ana Pimentão", "Clara Herculino", "Prefeito Pimenta"] }
      ]
    }
  },
  {
    nome: "Pacote de Fralda",
    tipo: "Item/Meme",
    pontos: 10,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["CHÁ DE FRALDAS"] }
      ],
      penalidades: [
        { tipo: "porTipos", valor: 5, tipos: ["Personagem"], tagsIgnoradas: ["Premium Care"] }
      ]
    }
  },
  {
    nome: "É tudo a mesma Coisa",
    tipo: "Item/Meme",
    pontos: 5,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "condicional", valor: 10, condicao: (mao) => mao.some(c => c.nome === "Ana Pimentão") && mao.some(c => c.nome === "Comprovadamente Perdida") },
        { tipo: "condicional", valor: 10, condicao: (mao) => mao.some(c => c.nome === "Caixeta de Zócolo") && mao.some(c => c.nome === "Zócolo na Caixeta") },
        { tipo: "condicional", valor: 10, condicao: (mao) => mao.some(c => c.nome === "Uivo da Varanda") && mao.some(c => c.nome === "Tô Em Todas") },
        { tipo: "condicional", valor: 10, condicao: (mao) => mao.some(c => c.nome === "Sósia do Caio") && mao.some(c => c.nome === "Amigo do Raul") },
      ]
    }
  },
  {
    nome: "Resumo da Carol",
    tipo: "Item/Meme",
    pontos: 10,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "condicional", valor: 10, condicao: (mao) => mao.filter(c => c.tipo === "Item/Meme").length === 1 }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["Bibliotecário"] }
      ]
    }
  },
  {
    nome: "Contusão no Joelho",
    tipo: "Item/Meme",
    pontos: 10,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 20, cartas: ["Jogador Colombiano"] }
      ]
    }
  },
  {
    nome: "Pergunta sem Timing",
    tipo: "Item/Meme",
    pontos: 10,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["MaCaribe"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["Caixeta de Zócolo", "Zócolo na Caixeta"] },
        { tipo: "condicional", valor: 10, condicao: (mao) => mao.filter(c => c.tipo === "Personagem").length < 3 },
        { tipo: "porCartas", valor: 10, cartas: ["Cachacinha", "Soneca Russa"] }
      ]
    }
  },
  {
    nome: "Mochila Petrobras",
    tipo: "Item/Meme",
    pontos: 10,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Itabompraí"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["Mochila de Alho"] }
      ]
    }
  },
  {
    nome: "Bolo de Aniversário",
    tipo: "Item/Meme",
    pontos: 10,
    tags: ["Trigo", "Alimento"],
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Feliz Aniversário"] }
      ],
      penalidades: [
        { tipo: "porAcao", valor: 10, acao: "não comeu bolo" }
      ]
    }
  },
  {
    nome: "Filtro Solar",
    tipo: "Item/Meme",
    pontos: 10,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Gasparzinho Sundown"] }
      ],
      penalidades: [
        { tipo: "porAcao", valor: 10, acao: "não usou filtro solar" }
      ]
    }
  },
  {
    nome: "EPI Completo",
    tipo: "Item/Meme",
    pontos: 10,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Itabompraí"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["Gasparzinho Sundown", "Gerente Feedback Jr"] }
      ]
    }
  },
  {
    nome: "Kit Churrasco",
    tipo: "Item/Meme",
    pontos: 10,
    tags: ["Alimento"],
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["New Saulo"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["Come Nada"] }
      ]
    }
  },
  {
    nome: "Comprovante",
    tipo: "Item/Meme",
    pontos: 10,
    tags: ["Perdido"],
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porAcao", valor: 10, acao: "perdeu o comprovante" }
      ],
      penalidades: [
        { tipo: "porAcao", valor: 10, acao: "tinha a nota fiscal" }
      ]
    }
  },
  {
    nome: "Garrafa",
    tipo: "Item/Meme",
    pontos: 10,
    tags: ["Perdido"],
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Carregador de Notebook", "Comprovante"] }
      ]
    }
  },
  {
    nome: "Carregador de Notebook",
    tipo: "Item/Meme",
    pontos: 10,
    tags: ["Perdido"],
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Garrafa", "Comprovante"] }
      ]
    }
  },
  {
    nome: "Café",
    tipo: "Item/Meme",
    pontos: 10,
    tags: ["Alimento"],
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Sósia do Caio"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["Triplo Banho"] },
        { tipo: "porCartas", valor: 15, cartas: ["Carioca do Brejo"] }
      ]
    }
  },
  {
    nome: "Piada Devastadora",
    tipo: "Item/Meme",
    pontos: 5,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Caixeta de Zócolo", "Zócolo na Caixeta"] }
      ]
    }
  },
  {
    nome: "Saco Preto",
    tipo: "Item/Meme",
    pontos: 10,
    prontoParaUso: true,
    logica: {
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["O Infiltrado"] }
      ]
    }
  },
  {
    nome: "Caô Amigo",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["MãeCaé Tips", "Telepata de Ni"] }
      ]
    }
  },
  {
    nome: "Kahoot",
    tipo: "Item/Meme",
    pontos: 5,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Scheid Filho"] }
      ]
    }
  },
  {
    nome: "Segura, Peão!",
    tipo: "Item/Meme",
    pontos: 5,
    prontoParaUso: true,
    logica: {
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["Milionário Disfarçado"] }
      ]
    }
  },
  {
    nome: "Dados Conflitantes",
    tipo: "Item/Meme",
    pontos: 5,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Bassani Sindical"] }
      ]
    }
  },
  {
    nome: "Check-list",
    tipo: "Item/Meme",
    pontos: 5,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Feliz Aniversário"] }
      ]
    }
  },
  {
    nome: "Ordem de Grandeza",
    tipo: "Item/Meme",
    pontos: 5,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Número Mágico"] }
      ]
    }
  },
  {
    nome: "Carona",
    tipo: "Item/Meme",
    pontos: 5,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Prefeito Pimenta"] }
      ]
    }
  },
  {
    nome: "Pato Migratório",
    tipo: "Personagem",
    pontos: 20,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Vamos Marcar", "Colheita Feliz", "Olefinas"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["CaretaPool"] }
      ]
    }
  },
  {
    nome: "Não pode ser real",
    tipo: "Item/Meme",
    pontos: 5,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Super Mario on IceCream"] }
      ]
    }
  },
  {
    nome: "Calebito Vai dar Certo",
    tipo: "Item/Meme",
    pontos: 5,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Super Mario on IceCream"] }
      ]
    }
  },
  {
    nome: "Curso de Formação",
    tipo: "Item/Meme",
    pontos: 10,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Média de Ouro", "Rei da Rifa"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["Uivo da Varanda"] }
      ]
    }
  },
  {
    nome: "Enquete",
    tipo: "Item/Meme",
    pontos: 5,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Enquetes Everywhere"] }
      ],
      penalidades: [
        { tipo: "porCartas", valor: 10, cartas: ["Clara Herculino"] }
      ]
    }
  },
  {
    nome: "Discussão Pós-prova",
    tipo: "Item/Meme",
    pontos: 5,
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Aí Vem O Desespero"] }
      ]
    }
  },
  {
    nome: "Presencial de Outra Cidade",
    tipo: "Evento",
    pontos: 10,
    tags: ["Social"],
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Meu nome não é Robison", "Manager Face", "Hermano Mullets"] }
      ]
    }
  },
  {
    nome: "Aniversário do Anderson",
    tipo: "Evento",
    pontos: 10,
    tags: ["Social"],
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Solução Caseira", "Humorista Espião"] }
      ]
    }
  },
  {
    nome: "Festa Anual",
    tipo: "Evento",
    pontos: 10,
    tags: ["Social"],
    prontoParaUso: true,
    logica: {
      bonus: [
        { tipo: "porCartas", valor: 10, cartas: ["Solução Caseira", "Humorista Espião"] }
      ]
    }
  },
  {
    nome: "PRESENCIAL",
    tipo: "Evento",
    pontos: 10,
    tags: ["Social"],
    prontoParaUso: true,
    logica: {
      penalidades: [
        { tipo: "porCartas", valor: 15, cartas: ["Hermano Mullets"] }
      ]
    }
  },
  // --- Cartas com Lógica Pendente ---
  { nome: "Procura Sem Fim", tipo: "Item/Meme", pontos: 10, prontoParaUso: false, logica: {} },
  { nome: "Aplausos Constrangedores", tipo: "Item/Meme", pontos: 5, prontoParaUso: false, logica: {} },
  { nome: "Wario", tipo: "Personagem", pontos: 20, prontoParaUso: false, logica: {} },
  { nome: "Rita Lee", tipo: "Item/Meme", pontos: 5, prontoParaUso: false, logica: {} },
  { nome: "Amigo do Raul", tipo: "Personagem", pontos: 20, prontoParaUso: false, logica: {} },
  { nome: "Rifa", tipo: "Item/Meme", pontos: 5, prontoParaUso: false, logica: {} },
  { nome: "Apresentação do Projeto", tipo: "Item/Meme", pontos: 10, prontoParaUso: false, logica: {} },
  { nome: "Alfred", tipo: "Item/Meme", pontos: 5, prontoParaUso: false, logica: {} },
  { nome: "Foto de Óculos", tipo: "Item/Meme", pontos: 5, prontoParaUso: false, logica: {} },
  { nome: "Treinamento sem Convite", tipo: "Item/Meme", pontos: 10, prontoParaUso: false, logica: {} },
  { nome: "Pão de Queijo", tipo: "Item/Meme", pontos: 5, prontoParaUso: false, logica: {} },
  { nome: "Vereadora", tipo: "Personagem", pontos: 20, prontoParaUso: false, logica: {} },
  { nome: "Biblioteca do EDIBH", tipo: "Local", pontos: 80, prontoParaUso: false, logica: {} },
  { nome: "Lista de Presença", tipo: "Item/Meme", pontos: 5, prontoParaUso: false, logica: {} },
  { nome: "Barrinha de Cereal", tipo: "Item/Meme", pontos: 5, prontoParaUso: false, logica: {} },
  { nome: "Contador de Moedas", tipo: "Item/Meme", pontos: 5, prontoParaUso: false, logica: {} }
];

// Ações do jogador para as condições selecionáveis
const acoes = [
  { nome: "estava de chinelo", cartas: ["Disney de Janeiro"] },
  { nome: "estava tomando mate", cartas: ["Disney de Janeiro"] },
  { nome: "comeu caranguejo", cartas: ["Vix em Pó"] },
  { nome: "tinha pó no pé ou na roupa", cartas: ["Vix em Pó"] },
  { nome: "pegou sol", cartas: ["Grande Nordeste"] },
  { nome: "bebeu água", cartas: ["Grande Nordeste"] },
  { nome: "estava de camiseta", cartas: ["MaCaribe"] },
  { nome: "estava de bota", cartas: ["Itabompraí"] },
  { nome: "Estar de EPI Completo", cartas: ["Itabompraí"] },
  { nome: "tirou a barba", cartas: ["Solução Caseira"] },
  { nome: "repetiu a explicação da matéria", cartas: ["Rei da Rifa"] },
  { nome: "pegou Uber para Social", cartas: ["New Saulo"] },
  { nome: "estava de bermuda ou de regata", cartas: ["Camiseto"] },
  { nome: "é o mais antigo da mão", cartas: ["Engenheiro Jr Sênior"] },
  { nome: "Neymar Contundido", cartas: ["Engenheiro Jr Sênior"] },
  { nome: "fez A Pose", cartas: ["Caôpixaba Modelo"] },
  { nome: "tem nome composto", cartas: ["Meu nome não é Robison"] },
  { nome: "fez Cara de Gerente", cartas: ["Manager Face"] },
  { nome: "não treinou hoje", cartas: ["Skin Care Maromba"] },
  { nome: "não estava com objeto roxo", cartas: ["A Quem Muitos Amaro"] },
  { nome: "cantou por 10s", cartas: ["Max Milhas"] },
  { nome: "não voou nos últimos 7 dias", cartas: ["Max Milhas"] },
  { nome: "estava sem chinelo e chimarrão", cartas: ["CarioCúcho"] },
  { nome: "não imitou o Personagem", cartas: ["Tranquilo?"] },
  { nome: "celular >79%", cartas: ["Esqueceram de Mim"] },
  { nome: "veio de ônibus", cartas: ["Esqueceram de Mim"] },
  { nome: "nunca assistiu Narcos", cartas: ["Jogador Colombiano"] },
  { nome: "câmera ligada", cartas: ["Cameraman"] },
  { nome: "não comeu bolo", cartas: ["Bolo de Aniversário"] },
  { nome: "não usou filtro solar", cartas: ["Filtro Solar"] },
  { nome: "perdeu o comprovante", cartas: ["Comprovante"] },
  { nome: "tinha a nota fiscal", cartas: ["Comprovante"] },
  { nome: "tentou valor aproximado", cartas: ["Número Mágico"] }
];

// Função principal de cálculo
function calcularPontuacao(mao, acoesJogador) {
  let pontuacaoTotal = 0;
  
  // Regra especial da MaCaribe para validar a mão
  const maCaribePresente = mao.some(c => c.nome === "MaCaribe");
  const eventosNaMao = mao.filter(c => c.tipo === "Evento").length;
  if (maCaribePresente && eventosNaMao > 3) {
      return 0; // Mão inválida
  } else if (!maCaribePresente && eventosNaMao > 1) {
      return 0; // Mão inválida
  }
  
  mao.forEach(carta => {
    // 1. Adiciona pontos base
    pontuacaoTotal += carta.pontos;
    
    // 2. Aplica bônus
    if (carta.logica.bonus) {
      carta.logica.bonus.forEach(bonus => {
        switch (bonus.tipo) {
          case "porCartas":
            pontuacaoTotal += mao.filter(c => bonus.cartas.includes(c.nome)).length * bonus.valor;
            break;
          case "porTags":
            pontuacaoTotal += mao.filter(c => c.tags && bonus.tags.some(tag => c.tags.includes(tag))).length * bonus.valor;
            break;
          case "porOutrosTipos":
            pontuacaoTotal += mao.filter(c => c.nome !== carta.nome && bonus.tipos.includes(c.tipo)).length * bonus.valor;
            break;
          case "porOutrasTags":
            pontuacaoTotal += mao.filter(c => c.nome !== carta.nome && c.tags && bonus.tags.some(tag => c.tags.includes(tag))).length * bonus.valor;
            break;
          case "multiplicativo":
            let multBonus = 0;
            if(bonus.cartas) {
                multBonus += mao.filter(c => bonus.cartas.includes(c.nome)).length * bonus.valor;
            }
            if(bonus.tags) {
                multBonus += mao.filter(c => c.tags && bonus.tags.some(tag => c.tags.includes(tag))).length * bonus.valor;
            }
            pontuacaoTotal += multBonus;
            break;
          case "porAcao":
            if (acoesJogador.includes(bonus.acao)) {
                pontuacaoTotal += bonus.valor;
            }
            break;
          case "condicional":
            if (bonus.condicao(mao, acoesJogador)) {
              pontuacaoTotal += bonus.valor;
            }
            break;
          case "porTipos":
            let tipoBonus = 0;
            if(bonus.tipos) {
              tipoBonus = mao.filter(c => bonus.tipos.includes(c.tipo)).length * bonus.valor;
            }
            pontuacaoTotal += tipoBonus;
            break;
        }
      });
    }

    // 3. Aplica penalidades
    if (carta.logica.penalidades) {
      carta.logica.penalidades.forEach(penalidade => {
        let aplicarPenalidade = true;
        let valorPenalidade = penalidade.valor;
        
        // Verifica se a penalidade é anulada (para CHÁ DE FRALDAS)
        if (penalidade.tipo === "condicionalAnulavel" && penalidade.anuladaPor(mao)) {
            aplicarPenalidade = false;
        }

        if(aplicarPenalidade) {
            switch (penalidade.tipo) {
              case "porCartas":
                pontuacaoTotal -= mao.filter(c => penalidade.cartas.includes(c.nome)).length * valorPenalidade;
                break;
              case "porTags":
                pontuacaoTotal -= mao.filter(c => c.tags && penalidade.tags.some(tag => c.tags.includes(tag))).length * valorPenalidade;
                break;
              case "porOutrosTipos":
                pontuacaoTotal -= mao.filter(c => c.nome !== carta.nome && penalidade.tipos.includes(c.tipo)).length * valorPenalidade;
                break;
              case "naoTiverCarta":
                if (!mao.some(c => penalidade.cartas.includes(c.nome))) {
                  pontuacaoTotal -= valorPenalidade;
                }
                break;
              case "porAcao":
                if (acoesJogador.includes(penalidade.acao)) {
                  pontuacaoTotal -= valorPenalidade;
                }
                break;
              case "condicional":
                if (penalidade.condicao(mao, acoesJogador)) {
                  pontuacaoTotal -= valorPenalidade;
                }
                break;
            }
        }
      });
    }
  });

  return pontuacaoTotal;
}

// Funções utilitárias para o front-end
function getAcoesDisponiveis(mao) {
    const acoesDisponiveis = new Set();
    const cartasNaMao = mao.map(c => c.nome);

    acoes.forEach(acao => {
        if (acao.cartas && acao.cartas.some(c => cartasNaMao.includes(c))) {
            acoesDisponiveis.add(acao.nome);
        }
    });

    return Array.from(acoesDisponiveis);
}
