// A base de dados completa das cartas do jogo.
const cartas = [
    { nome: "Presencial de Outra Cidade", pontos: 0, tipo: "Coringa", tag: null, bonus: "Considere até dois Locais como apenas um", penalidade: null },
    { nome: "Mochila Petrobras", pontos: 0, tipo: "Coringa", tag: null, bonus: "Ao fim do jogo, pegue até um Item (carta extra) da área de descarte", penalidade: "-25 com Disney de Janeiro" },
    { nome: "PC/Richard", pontos: 0, tipo: "Coringa", tag: null, bonus: "Elimina todas as penalidades se tiver Curso de Formação", penalidade: null },
    { nome: "Nível", pontos: 0, tipo: "Coringa", tag: null, bonus: "+10 para cada Vix em Pó e Festa Anual", penalidade: "Anulada com Curso de Formação" },
    { nome: "Não pode ser real", pontos: 0, tipo: "Coringa", tag: null, bonus: "Anula uma penalidade", penalidade: null },
    { nome: "T5 Honorário", pontos: 0, tipo: "Coringa", tag: null, bonus: "Ao fim do jogo, pegue até um Personagem (carta extra) da área de descarte", penalidade: null },
    { nome: "Carona", pontos: 0, tipo: "Coringa", tag: null, bonus: "Você pode ter até cinco Personagens", penalidade: null },
    { nome: "Lista de Presença", pontos: 0, tipo: "Coringa", tag: null, bonus: "Você pode ter até seis Personagens", penalidade: null },
    { nome: "Amigo do Raul", pontos: 0, tipo: "Coringa", tag: null, bonus: "Pode duplicar qualquer Personagem do jogo", penalidade: null },
    { nome: "Modelo Híbrido", pontos: 0, tipo: "Coringa", tag: null, bonus: "Considere Presencial e Home-Office como apenas um Evento", penalidade: null },
    { nome: "CURSO DE FORMAÇÃO", pontos: 40, tipo: "Evento", tag: null, bonus: "+10 com Disney de Janeiro OU PC/Richard OU Lista de Presença", penalidade: null },
    { nome: "CHÁ DE FRALDAS", pontos: 40, tipo: "Evento", tag: null, bonus: null, penalidade: "-10 sem Pacote de Fraldas; Anulada sem Premium Care" },
    { nome: "VISITA TÉCNICA", pontos: 40, tipo: "Evento", tag: null, bonus: null, penalidade: "-10 a menos que tenha EPI Completo" },
    { nome: "FESTA ANUAL", pontos: 40, tipo: "Evento", tag: "Social", bonus: "+10 com qualquer Local ou com T5 Honorário", penalidade: null },
    { nome: "ALMOÇÃO", pontos: 40, tipo: "Evento", tag: "Social", bonus: "+20 com MaCaribe", penalidade: null },
    { nome: "INVADE HOUSE", pontos: 40, tipo: "Evento", tag: "Social", bonus: "+20 com MaCaribe", penalidade: null },
    { nome: "COFFEE DA CAROL", pontos: 40, tipo: "Evento", tag: null, bonus: "+15 para cada Comprovadamente Perdida e Chá de Fraldas", penalidade: "-15 sem Café" },
    { nome: "ANIVERSÁRIO DO ANDERSON", pontos: 40, tipo: "Evento", tag: null, bonus: "Não conta como um Evento", penalidade: null },
    { nome: "PRESENCIAL", pontos: 40, tipo: "Evento", tag: null, bonus: null, penalidade: "-10 com Pato Migratório" },
    { nome: "HOME-OFFICE", pontos: 40, tipo: "Evento", tag: null, bonus: null, penalidade: "-10 com Pato Migratório" },
    { nome: "Carregador de Notebook", pontos: 5, tipo: "Item/Meme", tag: "Perdido", bonus: null, penalidade: null },
    { nome: "Aplausos Constrangedores", pontos: 5, tipo: "Item/Meme", tag: null, bonus: "+5 para cada Personagem, Aniversário do Anderson, Curso de Formação", penalidade: null },
    { nome: "Comprovante", pontos: 5, tipo: "Item/Meme", tag: "Perdido", bonus: null, penalidade: null },
    { nome: "Contusão no Joelho", pontos: 10, tipo: "Item/Meme", tag: null, bonus: null, penalidade: "Anula um Personagem exceto Joabe-se quem Puder" },
    { nome: "Calebito Vai dar Certo", pontos: 5, tipo: "Item/Meme", tag: null, bonus: "+5 para cada Personagem", penalidade: "-10 para cada Ana Pimentão e Farmácia" },
    { nome: "BassaNews", pontos: 5, tipo: "Item/Meme", tag: null, bonus: "+10 com Bassani Sindical", penalidade: "-15 se hoje é sexta-feira" },
    { nome: "Feedback", pontos: 20, tipo: "Item/Meme", tag: null, bonus: null, penalidade: "-5 para cada Personagem, exceto Gerente Feedback Jr" },
    { nome: "Kit Churrasco", pontos: 5, tipo: "Item/Meme", tag: "Alimento", bonus: "+10 para cada Invade House, Aniversário do Anderson, Festa Anual", penalidade: null },
    { nome: "Dados Conflitantes", pontos: 5, tipo: "Item/Meme", tag: null, bonus: null, penalidade: "-10 com Curso de Formação ou Aniversário do Anderson" },
    { nome: "Não se preocupe com prova", pontos: 10, tipo: "Item/Meme", tag: null, bonus: null, penalidade: "-5 para cada Personagem se tiver Curso de Formação" },
    { nome: "Segura, Peão!", pontos: 14, tipo: "Item/Meme", tag: null, bonus: "+63 com MaCaribe ou +53 com Vix em Pó ou +43 com Grande Nordeste", penalidade: null },
    { nome: "Pão de Queijo", pontos: 5, tipo: "Item/Meme", tag: "Alimento", bonus: "+5 para cada Evento", penalidade: null },
    { nome: "Pato Migratório", pontos: 15, tipo: "Item/Meme", tag: null, bonus: "+10 com cada Invade House, Aniversário do Anderson, Almoção, Festa Anual", penalidade: null },
    { nome: "Ordem de Grandeza", pontos: 5, tipo: "Item/Meme", tag: null, bonus: "+10 com Número Mágico", penalidade: null },
    { nome: "Resumo da Carol", pontos: 5, tipo: "Item/Meme", tag: null, bonus: "+10 para cada Personagem se tiver Curso de Formação", penalidade: null },
    { nome: "Bolo de Aniversário", pontos: 5, tipo: "Item/Meme", tag: "Trigo", bonus: "+10 com qualquer Evento exceto Curso de Formação, Presencial e Home-Office", penalidade: null },
    { nome: "Check-list", pontos: 5, tipo: "Item/Meme", tag: null, bonus: "+5 para cada Aniversário do Anderson, Curso de Formação, Home-Office, Presencial", penalidade: null },
    { nome: "Câmera Ligada", pontos: 20, tipo: "Item/Meme", tag: null, bonus: null, penalidade: "-5 para cada Personagem, exceto Cameraman" },
    { nome: "Day Use", pontos: 5, tipo: "Item/Meme", tag: "Presente", bonus: null, penalidade: "-5 para cada Personagem exceto Segue o Link e Ana Pimentão" },
    { nome: "Piada Devastadora", pontos: 5, tipo: "Item/Meme", tag: null, bonus: "+25 para cada Evento", penalidade: null },
    { nome: "Filtro Solar", pontos: 5, tipo: "Item/Meme", tag: null, bonus: "+10 Gasparzinho Sundown", penalidade: null },
    { nome: "EPI Completo", pontos: 5, tipo: "Item/Meme", tag: null, bonus: null, penalidade: "-25 com Pergunta Sem Timing" },
    { nome: "Strip no Jet de Swap", pontos: 30, tipo: "Item/Meme", tag: null, bonus: null, penalidade: "-5 para cada Personagem" },
    { nome: "Pergunta Sem Timing", pontos: 5, tipo: "Item/Meme", tag: null, bonus: null, penalidade: "-15 para cada Curso de Formação" },
    { nome: "Tava Embarcado?", pontos: 30, tipo: "Item/Meme", tag: null, bonus: null, penalidade: "-5 para cada Personagem" },
    { nome: "Jaqueta no Verão", pontos: 5, tipo: "Item/Meme", tag: "Presente", bonus: "+10 com PC/Richard", penalidade: null },
    { nome: "Enquete", pontos: 25, tipo: "Item/Meme", tag: null, bonus: null, penalidade: "-10 para cada Evento e -5 para cada Presente" },
    { nome: "Café", pontos: 5, tipo: "Item/Meme", tag: null, bonus: "+10 com Coffee da Carol ou Curso de Formação ou Presencial ou Aniversário do Anderson", penalidade: null },
    { nome: "Discussão Pós-prova", pontos: 30, tipo: "Item/Meme", tag: null, bonus: null, penalidade: "-10 para cada Personagem" },
    { nome: "Garrafa", pontos: 5, tipo: "Item/Meme", tag: "Perdido", bonus: null, penalidade: null },
    { nome: "Chaveiro Ofensivo", pontos: 15, tipo: "Item/Meme", tag: "Presente", bonus: null, penalidade: "Anula PC/Richard" },
    { nome: "Herbalife", pontos: 5, tipo: "Item/Meme", tag: null, bonus: "+10 para cada Ana Pimentão, Clara Herculino, Prefeito Pimenta", penalidade: null },
    { nome: "Pacote de Fralda", pontos: 10, tipo: "Item/Meme", tag: null, bonus: "+10 com Chá de Fraldas", penalidade: "-5 para cada Personagem exceto Premium Care" },
    { nome: "É tudo a mesma Coisa", pontos: 5, tipo: "Item/Meme", tag: null, bonus: "+10 para as duplas Ana Pimentão e Comprovadamente Perdida, Caixeta de Zócolo e Zócolo na Caixeta, Uivo da Varanda e Tô Em Todas, Sósia do Caio e Amigo do Raul", penalidade: null },
    { nome: "Disney de Janeiro", pontos: 60, tipo: "Local", tag: null, bonus: "+10 se o jogador estiver de Chinelo ou Tomando Matte", penalidade: null },
    { nome: "Nikiti na Panela", pontos: 60, tipo: "Local", tag: null, bonus: "+10 se o jogador estiver vendo um grande Corpo de Água ou o Corcovado", penalidade: null },
    { nome: "Vix em Pó", pontos: 60, tipo: "Local", tag: null, bonus: "+10 se o jogador estiver comendo Caranguejo ou tiver Pó no pé/na roupa", penalidade: null },
    { nome: "Grande Nordeste", pontos: 60, tipo: "Local", tag: null, bonus: "+10 se o jogador estiver pegando Sol ou bebendo Água", penalidade: null },
    { nome: "MaCaribe", pontos: 60, tipo: "Local", tag: "Social", bonus: "+10 se o jogador estiver de Camiseta e pode ter até três Eventos", penalidade: null },
    { nome: "Itabompraí", pontos: 50, tipo: "Local", tag: null, bonus: "+20 se o jogador estiver de Bota ou com EPI Completo", penalidade: null },
    { nome: "Vereadora", pontos: 20, tipo: "Personagem", tag: null, bonus: "+5 com cada outro Personagem", penalidade: "-10 com qualquer Local, exceto Disney de Janeiro" },
    { nome: "MagnâniMO", pontos: 20, tipo: "Personagem", tag: "Premium Care", bonus: "+10 se o jogador fizer uma acrobacia", penalidade: "-10 se o jogador chorar no futebol" },
    { nome: "Rainha do Kahoot", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Kahoot", penalidade: "-10 para cada Social" },
    { nome: "Caô Amigo", pontos: 20, tipo: "Personagem", tag: "Premium Care", bonus: "+15 com Amigo do Raul, +5 para cada Social", penalidade: "-10 sem triplo R (Telepata de Ni + MãeCaé Tips)" },
    { nome: "História Sem Fim", pontos: 20, tipo: "Personagem", tag: null, bonus: "+80 com Procura Sem Fim", penalidade: "-10 com menos de 3 Renans" },
    { nome: "MãeCaé Tips", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com triplo R (Telepata de Ni + Caô Amigo)", penalidade: "-10 com qualquer Social" },
    { nome: "Scheid Filho", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Kahoot e +15 para cada Filho", penalidade: "-15 para cada Social" },
    { nome: "Tia Clarisse", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Disney de Janeiro", penalidade: "-10 com qualquer Social" },
    { nome: "Comprovadamente Perdida", pontos: 20, tipo: "Personagem", tag: "Perdido", bonus: "+30 se tiver os três Perdidos", penalidade: "-10 com menos de três Perdidos" },
    { nome: "Milionário Disfarçado", pontos: 20, tipo: "Personagem", tag: null, bonus: "+50 com Contador de Moedas", penalidade: "-10 com Segura, Peão!" },
    { nome: "Bassani Sindical", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Dados Conflitantes", penalidade: "-10 para cada Social, MaCaribe" },
    { nome: "Feliz Aniversário", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 para cada Bolo, Evento, MaCaribe, Check-list", penalidade: "-10 com Pergunta sem Timing ou sem Social" },
    { nome: "Sósia do Caio", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Disney de Janeiro ou +5 com MaCaribe", penalidade: "-10 com Café" },
    { nome: "Estratégia Cruel", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Vix em Pó", penalidade: "-10 para cada Social" },
    { nome: "Tromps dos Magos", pontos: 20, tipo: "Personagem", tag: "Soninho", bonus: "+10 para cada Nikiti na Panela, outro Soninho", penalidade: "-10 para cada Social" },
    { nome: "Número Mágico", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Ordem de Grandeza", penalidade: "-10 se o jogador não tentar um valor aproximado" },
    { nome: "Prefeito Pimenta", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 para cada Nikiti na Panela e Carona", penalidade: "-10 para cada Social" },
    { nome: "Guitarra de Suprimentos", pontos: 20, tipo: "Personagem", tag: null, bonus: "+80 com PDV e +10 com General Trigus Aurelius", penalidade: "-10 para cada Social" },
    { nome: "Joabe-se Quem Puder", pontos: 20, tipo: "Personagem", tag: "Premium Care", bonus: "+10 com Lista de Presença", penalidade: "-10 para cada Social" },
    { nome: "Super Sincera", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Guitarra de Suprimentos", penalidade: "-10 com cada Social" },
    { nome: "Vamos Marcar", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Pato Migratório", penalidade: "-10 para cada Social" },
    { nome: "Colheita Feliz", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Pato Migratório e +5 para cada Shinobi Campista, PETagoga e Vereadora", penalidade: "-10 com qualquer Social" },
    { nome: "Raulzito", pontos: 20, tipo: "Personagem", tag: "PetroBanda", bonus: "+10 com outro PetroBanda", penalidade: "-10 com qualquer Social" },
    { nome: "Renan Preso", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Pergunta Sem Timing, +5 com Renan Livre Leve", penalidade: "-10 com qualquer Social" },
    { nome: "Super Mario on IceCream", pontos: 20, tipo: "Personagem", tag: "Premium Care", bonus: "+10 com qualquer Não pode ser real, Calebito Vai dar Certo", penalidade: "-10 com Wario" },
    { nome: "Telepata de Ni", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com triplo R (Caô Amigo + MãeCae Tips)", penalidade: "-10 com Rita Lee" },
    { nome: "Espião do PC", pontos: 20, tipo: "Personagem", tag: null, bonus: "+50 com Apresentação do Projeto", penalidade: "-5 para cada outro Personagem" },
    { nome: "Bruce Weiner", pontos: 20, tipo: "Personagem", tag: null, bonus: "+50 com Alfred", penalidade: "-10 sem Labrador" },
    { nome: "CaretaPool", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Cruelrine", penalidade: "-10 com Pato Migratório" },
    { nome: "Série B", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Vix em Pó", penalidade: "-10 para cada Social" },
    { nome: "Média de Ouro", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 para cada Curso de Formação, Nikiti na Panela", penalidade: "-10 para cada Social" },
    { nome: "Clara Herculino", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Nikiti na Panela", penalidade: "-10 para cada Social, Enquete" },
    { nome: "Jorge Veludo", pontos: 20, tipo: "Personagem", tag: "Premium Care", bonus: "+10 com Disney de Janeiro", penalidade: "-10 para cada Social" },
    { nome: "Farmácia", pontos: 20, tipo: "Personagem", tag: null, bonus: "+5 para cada outro Personagem", penalidade: null },
    { nome: "Soneca Russa", pontos: 20, tipo: "Personagem", tag: "Soninho", bonus: "+10 para cada Disney de Janeiro, outro Soninho", penalidade: "-10 com Pergunta Sem Timing" },
    { nome: "Tô Em Todas", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 para qualquer Evento E Local", penalidade: "-15 para Aplausos Constrangedores" },
    { nome: "Pai do Regato", pontos: 20, tipo: "Personagem", tag: "Premium Care", bonus: "+10 com Camiseto", penalidade: "-10 para cada Social" },
    { nome: "Praieira de Minas", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Vix em Pó e +10 com Série B", penalidade: "-10 para cada Social" },
    { nome: "Solução Caseira", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 para cada Aniversário do Anderson, Festa Anual", penalidade: "-10 se tirar a barba" },
    { nome: "Rei da Rifa", pontos: 20, tipo: "Personagem", tag: null, bonus: "+50 com Rifa e +10 com Curso de Formação", penalidade: "-10 se tiver que repetir a explicação da matéria" },
    { nome: "Aí Vem O Desespero", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Discussão Pós-prova", penalidade: "-10 com cada Social, MaCaribe" },
    { nome: "ServiceNat", pontos: 20, tipo: "Personagem", tag: null, bonus: "+5 para cada outro Personagem; +10 com Nikiti na Panela", penalidade: "-10 para cada Social" },
    { nome: "Luiz de Lente", pontos: 20, tipo: "Personagem", tag: null, bonus: "+50 com Foto de Óculos", penalidade: "-10 para cada Social" },
    { nome: "Gasparzinho Sundown", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Filtro Solar", penalidade: "-10 sem EPI completo" },
    { nome: "Mari-RUN-a", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Disney de Janeiro", penalidade: "-10 com qualquer Soninho" },
    { nome: "Cruelrine", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com CaretaPool", penalidade: "-10 com qualquer Soninho" },
    { nome: "Gerente Feedback Jr", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Itabompraí", penalidade: "-10 sem EPI completo" },
    { nome: "New Saulo", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Kit Churrasco", penalidade: "-10 se precisar pegar Uber para cada Social" },
    { nome: "O Infiltrado", pontos: 20, tipo: "Personagem", tag: null, bonus: "+50 com Treinamento sem Convite", penalidade: "-10 com Saco Preto" },
    { nome: "Camiseto", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com cada Pai do Regato, Feliz Aniversário", penalidade: "-10 se jogador não estiver de Bermuda e/ou Regata" },
    { nome: "Renan Livre Leve", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 para cada Social, +5 com Renan Preso", penalidade: "-10 com menos de 3 Renans" },
    { nome: "Engenheiro Jr Sênior", pontos: 20, tipo: "Personagem", tag: "Premium Care", bonus: "+10 se for o Personagem mais \"antigo\" da mão", penalidade: "-10 com Neymar Contundido" },
    { nome: "Caôpixaba Modelo", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Vix em Pó e +25 com Vix em Pó E MaCaribe", penalidade: "-10 se o jogador não fizer \"A Pose\"" },
    { nome: "Meu nome não é Robison", pontos: 20, tipo: "Personagem", tag: "Premium Care", bonus: "+10 com Presencial de Outra Cidade", penalidade: "-10 se o jogador tiver nome composto" },
    { nome: "Toddynho", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Disney de Janeiro", penalidade: "-10 com qualquer Soninho" },
    { nome: "Uivo da Varanda", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 para qualquer Social", penalidade: "-10 com Curso de Formação" },
    { nome: "Soneca Infinita", pontos: 20, tipo: "Personagem", tag: "Soninho", bonus: "+10 para cada Disney de Janeiro, outro Soninho", penalidade: "-10 com Barrinha de Cereal" },
    { nome: "Enquetes Everywhere", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Enquete e +5 com Cameraman", penalidade: "-5 sem Mostra o RG" },
    { nome: "Come Nada", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com CaretaPool", penalidade: "-10 para cada Trigo, Alimento" },
    { nome: "Ana Pimentão", pontos: 20, tipo: "Personagem", tag: null, bonus: "+5 para cada outro Personagem", penalidade: null },
    { nome: "Trompete Tímido", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Shinobi Campista", penalidade: "-10 com MaCaribe" },
    { nome: "Humorista Espião", pontos: 20, tipo: "Personagem", tag: "Premium Care", bonus: "+10 para cada Nikiti na Panela, Aniversário do Anderson, Festa Anual", penalidade: "-10 sem Nikiti na Panela" },
    { nome: "Manager Face", pontos: 20, tipo: "Personagem", tag: "Premium Care", bonus: "+10 com Presencial de Outra Cidade", penalidade: "-10 se jogador não fizer \"Cara de Gerente\"" },
    { nome: "Skin Care Maromba", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Grande Nordeste", penalidade: "-10 se o jogador não treinou hoje" },
    { nome: "A Quem Muitos Amaro", pontos: 20, tipo: "Personagem", tag: "Premium Care", bonus: "+10 com Vix em Pó", penalidade: "-10 se o jogador não estiver com qualquer objeto na cor roxa" },
    { nome: "Mostra o RG", pontos: 20, tipo: "Personagem", tag: null, bonus: "+5 com qualquer Enquetes Everywhere, Cameraman", penalidade: "-5 sem Atrasilda" },
    { nome: "Eu Sou A Lenda", pontos: 20, tipo: "Personagem", tag: null, bonus: "+15 com Comprovante", penalidade: "-10 com Disney de Janeiro" },
    { nome: "Segue o Link", pontos: 20, tipo: "Personagem", tag: null, bonus: "+5 para cada outro Personagem", penalidade: null },
    { nome: "Max Milhas", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 se o jogador cantar por ao menos 10s", penalidade: "-10 se o jogador não voou/voar nos últimos/próximos 7 dias" },
    { nome: "Atrasilda", pontos: 20, tipo: "Personagem", tag: null, bonus: "+5 para cada Mostra o RG ou Enquetes Everywhere", penalidade: "-10 sem Cameraman" },
    { nome: "CarioCúcho", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Disney de Janeiro", penalidade: "-10 se jogador estiver sem chinelo e sem chimarrão" },
    { nome: "Olefinas", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Pato Migratório", penalidade: "-10 com Itabompraí" },
    { nome: "Tranquilo?", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Disney de Janeiro", penalidade: "-10 se o jogador não imitar o Personagem" },
    { nome: "Esqueceram de Mim", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 se a carga do celular do jogador for >79%", penalidade: "-10 se o jogador veio de ônibus de viagem" },
    { nome: "Zócolo na Caixeta", pontos: 20, tipo: "Personagem", tag: "Premium Care", bonus: "+10 com Piadas Devastadoras", penalidade: "-10 com Perguntas sem Timing" },
    { nome: "Jogador Colombiano", pontos: 20, tipo: "Personagem", tag: null, bonus: "+20 com Contusão no Joelho", penalidade: "-10 se o jogador nunca assistiu à série Narcos" },
    { nome: "Mochila de Alho", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Disney de Janeiro", penalidade: "-10 com Mochila Petrobras" },
    { nome: "Cameraman", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Atrasilda e +5 com Mostra o RG", penalidade: "-10 sem Câmera Ligada" },
    { nome: "Triplo Banho", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Grande Nordeste", penalidade: "-10 com Café" },
    { nome: "Cachacinha", pontos: 20, tipo: "Personagem", tag: "Soninho", bonus: "+10 para cada Disney de Janeiro, outro Soninho", penalidade: "-10 com Pergunta Sem Timing" },
    { nome: "Labrador", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Bruce Weiner", penalidade: "-10 com qualquer Soninho" },
    { nome: "Bigode Sem Tempo", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Disney de Janeiro", penalidade: "-10 com qualquer Social" },
    { nome: "Carioca do Brejo", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Disney de Janeiro ou +80 com Floripa", penalidade: "-15 sem Café" },
    { nome: "Caixeta de Zócolo", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Piadas Devastadoras", penalidade: "-10 com Perguntas sem Timing" },
    { nome: "Hermano Mullets", pontos: 20, tipo: "Personagem", tag: null, bonus: "+15 com Presencial de Outra Cidade", penalidade: "-15 com Presencial" },
    { nome: "Laboratórios Medley", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Grande Nordeste", penalidade: "-10 com qualquer Social" },
    { nome: "Laboratórios Achè", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Laboratórios Medley", penalidade: "-10 para cada Social" },
    { nome: "Ricardo Nervosinho", pontos: 20, tipo: "Personagem", tag: "Premium Care", bonus: "+10 para cada Evento, MaCaribe", penalidade: "-10 sem Social" },
    { nome: "Doceira de Nikiti", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Nikiti na Panela", penalidade: "-10 para cada Social" },
    { nome: "Mexido, Não Batido", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Nikiti na Panela", penalidade: "-10 para cada Social" },
    { nome: "Shinobi Campista", pontos: 20, tipo: "Personagem", tag: "Petrobanda", bonus: "+10 com outro Petrobanda", penalidade: "-10 para cada Social" },
    { nome: "General Trigus Aurelius", pontos: 20, tipo: "Personagem", tag: null, bonus: "+15 com Pão de Queijo e +5 com MaCaribe e Social", penalidade: "-10 para cada Trigo" },
    { nome: "PETagoga", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Vereadora e +5 para cada Colheita Feliz, Shinobi Campista e PET", penalidade: null },
    { nome: "Bibliotecário", pontos: 20, tipo: "Personagem", tag: null, bonus: "+50 com Biblioteca do EDIBH", penalidade: "-10 com Resumo da Carol" }
];

function encontrarCarta(nome) {
    return cartas.find(c => c.nome.toLowerCase() === nome.toLowerCase());
}

function validarMao(mao, interacoes) {
    const contagem = { Personagem: 0, Local: 0, Evento: 0, Coringa: 0, "Item/Meme": 0 };
    const coringasNaMao = mao.filter(c => c.tipo === "Coringa").map(c => c.nome);
    const eventosNaMao = mao.filter(c => c.tipo === "Evento").map(c => c.nome);
    const locaisNaMao = mao.filter(c => c.tipo === "Local").map(c => c.nome);
    const personagensNaMao = mao.filter(c => c.tipo === "Personagem").map(c => c.nome);
    const maCaribeNaMao = locaisNaMao.includes("MaCaribe");

    mao.forEach(carta => {
        if (contagem[carta.tipo] !== undefined) {
            contagem[carta.tipo]++;
        }
    });

    // Bônus do Aniversário do Anderson
    if (eventosNaMao.includes("ANIVERSÁRIO DO ANDERSON")) {
        contagem.Evento--;
    }

    // Bônus do Modelo Híbrido
    if (coringasNaMao.includes("Modelo Híbrido") && eventosNaMao.includes("PRESENCIAL") && eventosNaMao.includes("HOME-OFFICE")) {
        contagem.Evento--;
    }
    
    // Bônus do Presencial de Outra Cidade
    if (coringasNaMao.includes("Presencial de Outra Cidade")) {
        if (contagem.Local > 2) {
            return { valido: false, motivo: `Mão inválida: O bônus do Presencial de Outra Cidade permite até dois Locais, mas você tem ${contagem.Local}.` };
        } else if (contagem.Local === 2) {
             contagem.Local--;
        }
    }

    // Bônus do MaCaribe
    if (maCaribeNaMao) {
        if (contagem.Evento > 3) {
            return { valido: false, motivo: `Mão inválida: O bônus de MaCaribe permite até três Eventos, mas você tem ${contagem.Evento}.` };
        }
    }

    // Aplicações de coringas que alteram limites
    let limitePersonagens = 3;
    if (coringasNaMao.includes("Carona")) {
        limitePersonagens = 5;
    }
    if (coringasNaMao.includes("Lista de Presença")) {
        limitePersonagens = 6;
    }
    
    if (contagem.Personagem > limitePersonagens) {
        return { valido: false, motivo: `Mão inválida: Excesso de Personagens (${contagem.Personagem}/${limitePersonagens}).` };
    }
    if (contagem.Local > 1) {
        if (coringasNaMao.includes("Presencial de Outra Cidade") && contagem.Local <= 2) {
             // Válido
        } else {
            return { valido: false, motivo: `Mão inválida: Excesso de Locais (${contagem.Local}/1).` };
        }
    }
    if (contagem.Evento > 1) {
        if (coringasNaMao.includes("Modelo Híbrido") && eventosNaMao.includes("PRESENCIAL") && eventosNaMao.includes("HOME-OFFICE")) {
            // Válido
        } else if (maCaribeNaMao && contagem.Evento <= 3) {
            // Válido
        } else {
             return { valido: false, motivo: `Mão inválida: Excesso de Eventos (${contagem.Evento}/1).` };
        }
    }

    return { valido: true, motivo: "Mão válida." };
}

function calcularPontuacao() {
    const cartasInput = document.getElementById("cartasInput").value.split('\n').filter(Boolean).map(c => c.trim());
    const interacoesInput = document.getElementById("interacoesInput").value.split('\n').filter(Boolean).map(c => c.trim().toLowerCase());
    const resultadoDiv = document.getElementById("resultado");

    const mao = cartasInput.map(nome => encontrarCarta(nome)).filter(Boolean);

    // Validação da mão
    const validacao = validarMao(mao, interacoesInput);
    if (!validacao.valido) {
        resultadoDiv.innerHTML = `<p style="color:red;">**Mão Inválida:** ${validacao.motivo}</p>`;
        return;
    }

    let pontuacaoBase = 0;
    let bonusTotal = 0;
    let penalidadeTotal = 0;
    let detalhes = `<h3>Resultados</h3><p>Mão válida. Calculando...</p>`;
    
    const cartasEAnulacoes = {
        mao: [...mao],
        bonusAnulados: [],
        penalidadesAnuladas: []
    };

    // Lógica para coringas que afetam o cálculo
    const coringasNaMao = mao.filter(c => c.tipo === "Coringa").map(c => c.nome);
    const temNaoPodeSerReal = coringasNaMao.includes("Não pode ser real");
    const temPC_Richard = coringasNaMao.includes("PC/Richard");
    const temCursoDeFormacao = mao.some(c => c.nome === "CURSO DE FORMAÇÃO");
    const temChaveiroOfensivo = mao.some(c => c.nome === "Chaveiro Ofensivo");
    const temAmigoDoRaul = coringasNaMao.includes("Amigo do Raul");
    
    // Anulação de penalidades pelo PC/Richard e Chaveiro Ofensivo
    const pcRichardAnulado = temChaveiroOfensivo;

    // Passo 1: Pontuação Base
    mao.forEach(carta => {
        pontuacaoBase += carta.pontos;
        detalhes += `<p><strong>${carta.nome}</strong>: ${carta.pontos} pontos base.</p>`;
    });

    detalhes += `<hr><p><strong>Pontuação Base: ${pontuacaoBase}</strong></p><hr>`;
    
    // Passo 2: Bônus e Penalidades
    mao.forEach(carta => {
        let pontosCarta = 0;
        let bonusString = "";
        let penalidadeString = "";
        
        // Regra especial para 'É tudo a mesma Coisa'
        if (carta.nome === "É tudo a mesma Coisa") {
             if (mao.some(c => c.nome === "Ana Pimentão") && mao.some(c => c.nome === "Comprovadamente Perdida")) { pontosCarta += 10; bonusString += "+10 (Ana Pimentão + Comprovadamente Perdida). "; }
             if (mao.some(c => c.nome === "Caixeta de Zócolo") && mao.some(c => c.nome === "Zócolo na Caixeta")) { pontosCarta += 10; bonusString += "+10 (Caixeta de Zócolo + Zócolo na Caixeta). "; }
             if (mao.some(c => c.nome === "Uivo da Varanda") && mao.some(c => c.nome === "Tô Em Todas")) { pontosCarta += 10; bonusString += "+10 (Uivo da Varanda + Tô Em Todas). "; }
             if (mao.some(c => c.nome === "Sósia do Caio") && coringasNaMao.includes("Amigo do Raul")) { pontosCarta += 10; bonusString += "+10 (Sósia do Caio + Amigo do Raul). "; }
        }

        switch (carta.nome) {
            case "Mochila Petrobras":
                if (mao.some(c => c.nome === "Disney de Janeiro")) { pontosCarta -= 25; penalidadeString += "-25 (com Disney de Janeiro). "; }
                break;
            case "Nível":
                if (temCursoDeFormacao) { penalidadeString += "Anulada por Curso de Formação. "; }
                else {
                    const vixEmPoNaMao = mao.filter(c => c.nome === "Vix em Pó").length;
                    const festaAnualNaMao = mao.filter(c => c.nome === "FESTA ANUAL").length;
                    pontosCarta += (vixEmPoNaMao + festaAnualNaMao) * 10;
                    if (vixEmPoNaMao > 0) bonusString += `+${vixEmPoNaMao * 10} (Vix em Pó). `;
                    if (festaAnualNaMao > 0) bonusString += `+${festaAnualNaMao * 10} (Festa Anual). `;
                }
                break;
            case "CURSO DE FORMAÇÃO":
                if (mao.some(c => c.nome === "Disney de Janeiro") || (temPC_Richard && !pcRichardAnulado) || mao.some(c => c.nome === "Lista de Presença")) { pontosCarta += 10; bonusString += "+10 (Disney de Janeiro, PC/Richard ou Lista de Presença). "; }
                break;
            case "CHÁ DE FRALDAS":
                if (!mao.some(c => c.nome === "Pacote de Fralda")) { pontosCarta -= 10; penalidadeString += "-10 (sem Pacote de Fralda). "; }
                if (mao.filter(c => c.tag === "Premium Care").length === 0) { penalidadeString += "Anulada sem Premium Care. "; }
                break;
            case "VISITA TÉCNICA":
                if (!mao.some(c => c.nome === "EPI Completo")) { pontosCarta -= 10; penalidadeString += "-10 (sem EPI Completo). "; }
                break;
            case "FESTA ANUAL":
                if (mao.some(c => c.tipo === "Local") || coringasNaMao.includes("T5 Honorário")) { pontosCarta += 10; bonusString += "+10 (com Local ou T5 Honorário). "; }
                break;
            case "ALMOÇÃO":
            case "INVADE HOUSE":
                if (mao.some(c => c.nome === "MaCaribe")) { pontosCarta += 20; bonusString += "+20 (com MaCaribe). "; }
                break;
            case "COFFEE DA CAROL":
                const comprovadamentePerdida = mao.filter(c => c.nome === "Comprovadamente Perdida").length;
                const chaDeFraldas = mao.filter(c => c.nome === "CHÁ DE FRALDAS").length;
                pontosCarta += (comprovadamentePerdida + chaDeFraldas) * 15;
                if (comprovadamentePerdida > 0) bonusString += `+${comprovadamentePerdida * 15} (Comprovadamente Perdida). `;
                if (chaDeFraldas > 0) bonusString += `+${chaDeFraldas * 15} (Chá de Fraldas). `;
                if (!mao.some(c => c.nome === "Café")) { pontosCarta -= 15; penalidadeString += "-15 (sem Café). "; }
                break;
            case "PRESENCIAL":
            case "HOME-OFFICE":
                if (mao.some(c => c.nome === "Pato Migratório")) { pontosCarta -= 10; penalidadeString += "-10 (com Pato Migratório). "; }
                break;
            case "Aplausos Constrangedores":
                const numPersonagens = mao.filter(c => c.tipo === "Personagem").length;
                const numAniversarioAnderson = mao.filter(c => c.nome === "ANIVERSÁRIO DO ANDERSON").length;
                const numCursoFormacao = mao.filter(c => c.nome === "CURSO DE FORMAÇÃO").length;
                pontosCarta += (numPersonagens + numAniversarioAnderson + numCursoFormacao) * 5;
                bonusString += `+${pontosCarta} (por Personagens, Aniversário do Anderson e Curso de Formação). `;
                break;
            case "Contusão no Joelho":
                if (!mao.some(c => c.nome === "Joabe-se Quem Puder")) {
                    const numPersonagensAnulados = mao.filter(c => c.tipo === "Personagem" && c.nome !== "Joabe-se Quem Puder").length;
                    pontosCarta -= numPersonagensAnulados * carta.pontos; // Anula os pontos do personagem
                    detalhes += `<p style="color:red;">**Anulação:** Contusão no Joelho anula um personagem (Joabe-se Quem Puder não foi afetado).</p>`;
                }
                break;
            case "Calebito Vai dar Certo":
                const numPersonagensCalebito = mao.filter(c => c.tipo === "Personagem").length;
                pontosCarta += numPersonagensCalebito * 5;
                bonusString += `+${numPersonagensCalebito * 5} (por Personagens). `;
                if (mao.some(c => c.nome === "Ana Pimentão") || mao.some(c => c.nome === "Farmácia")) { pontosCarta -= 10; penalidadeString += "-10 (com Ana Pimentão ou Farmácia). "; }
                break;
            case "BassaNews":
                if (mao.some(c => c.nome === "Bassani Sindical")) { pontosCarta += 10; bonusString += "+10 (com Bassani Sindical). "; }
                if (interacoesInput.includes("hoje é sexta-feira")) { pontosCarta -= 15; penalidadeString += "-15 (hoje é sexta-feira). "; }
                break;
            case "Feedback":
                const numPersonagensFeedback = mao.filter(c => c.tipo === "Personagem" && c.nome !== "Gerente Feedback Jr").length;
                pontosCarta -= numPersonagensFeedback * 5;
                penalidadeString += `-${numPersonagensFeedback * 5} (por Personagens). `;
                break;
            case "Kit Churrasco":
                const eventosComBonusKit = mao.filter(c => ["INVADE HOUSE", "ANIVERSÁRIO DO ANDERSON", "FESTA ANUAL"].includes(c.nome)).length;
                pontosCarta += eventosComBonusKit * 10;
                bonusString += `+${eventosComBonusKit * 10} (com Invade House, Aniversário do Anderson ou Festa Anual). `;
                break;
            case "Dados Conflitantes":
                if (mao.some(c => c.nome === "CURSO DE FORMAÇÃO") || mao.some(c => c.nome === "ANIVERSÁRIO DO ANDERSON")) { pontosCarta -= 10; penalidadeString += "-10 (com Curso de Formação ou Aniversário do Anderson). "; }
                break;
            case "Não se preocupe com prova":
                if (temCursoDeFormacao) {
                    const numPersonagensProva = mao.filter(c => c.tipo === "Personagem").length;
                    pontosCarta -= numPersonagensProva * 5;
                    penalidadeString += `-${numPersonagensProva * 5} (com Curso de Formação). `;
                }
                break;
            case "Segura, Peão!":
                if (mao.some(c => c.nome === "MaCaribe")) { pontosCarta += 63; bonusString += "+63 (com MaCaribe). "; }
                else if (mao.some(c => c.nome === "Vix em Pó")) { pontosCarta += 53; bonusString += "+53 (com Vix em Pó). "; }
                else if (mao.some(c => c.nome === "Grande Nordeste")) { pontosCarta += 43; bonusString += "+43 (com Grande Nordeste). "; }
                break;
            case "Pão de Queijo":
                const numEventosPao = mao.filter(c => c.tipo === "Evento").length;
                pontosCarta += numEventosPao * 5;
                bonusString += `+${numEventosPao * 5} (por Eventos). `;
                break;
            case "Pato Migratório":
                const eventosPato = mao.filter(c => ["INVADE HOUSE", "ANIVERSÁRIO DO ANDERSON", "ALMOÇÃO", "FESTA ANUAL"].includes(c.nome)).length;
                pontosCarta += eventosPato * 10;
                bonusString += `+${eventosPato * 10} (com Invade House, Aniversário do Anderson, Almoção, Festa Anual). `;
                break;
            case "Ordem de Grandeza":
                if (mao.some(c => c.nome === "Número Mágico")) { pontosCarta += 10; bonusString += "+10 (com Número Mágico). "; }
                break;
            case "Resumo da Carol":
                if (temCursoDeFormacao) {
                    const numPersonagensResumo = mao.filter(c => c.tipo === "Personagem").length;
                    pontosCarta += numPersonagensResumo * 10;
                    bonusString += `+${numPersonagensResumo * 10} (com Curso de Formação). `;
                }
                break;
            case "Bolo de Aniversário":
                const eventosBolo = mao.filter(c => c.tipo === "Evento" && !["CURSO DE FORMAÇÃO", "PRESENCIAL", "HOME-OFFICE"].includes(c.nome)).length;
                pontosCarta += eventosBolo * 10;
                bonusString += `+${eventosBolo * 10} (com Eventos específicos). `;
                break;
            case "Check-list":
                const eventosChecklist = mao.filter(c => ["ANIVERSÁRIO DO ANDERSON", "CURSO DE FORMAÇÃO", "HOME-OFFICE", "PRESENCIAL"].includes(c.nome)).length;
                pontosCarta += eventosChecklist * 5;
                bonusString += `+${eventosChecklist * 5} (com Eventos específicos). `;
                break;
            case "Câmera Ligada":
                const numPersonagensCamera = mao.filter(c => c.tipo === "Personagem" && c.nome !== "Cameraman").length;
                pontosCarta -= numPersonagensCamera * 5;
                penalidadeString += `-${numPersonagensCamera * 5} (com Personagens). `;
                break;
            case "Day Use":
                const numPersonagensDayUse = mao.filter(c => c.tipo === "Personagem" && !["Segue o Link", "Ana Pimentão"].includes(c.nome)).length;
                pontosCarta -= numPersonagensDayUse * 5;
                penalidadeString += `-${numPersonagensDayUse * 5} (com Personagens). `;
                break;
            case "Piada Devastadora":
                const numEventosPiada = mao.filter(c => c.tipo === "Evento").length;
                pontosCarta += numEventosPiada * 25;
                bonusString += `+${numEventosPiada * 25} (com Eventos). `;
                break;
            case "Filtro Solar":
                if (mao.some(c => c.nome === "Gasparzinho Sundown")) { pontosCarta += 10; bonusString += "+10 (com Gasparzinho Sundown). "; }
                break;
            case "EPI Completo":
                if (mao.some(c => c.nome === "Pergunta Sem Timing")) { pontosCarta -= 25; penalidadeString += "-25 (com Pergunta Sem Timing). "; }
                break;
            case "Strip no Jet de Swap":
            case "Tava Embarcado?":
            case "Discussão Pós-prova":
                const numPersonagensItem = mao.filter(c => c.tipo === "Personagem").length;
                pontosCarta -= numPersonagensItem * 5;
                penalidadeString += `-${numPersonagensItem * 5} (com Personagens). `;
                break;
            case "Pergunta Sem Timing":
                if (temCursoDeFormacao) {
                    pontosCarta -= 15;
                    penalidadeString += "-15 (com Curso de Formação). ";
                }
                break;
            case "Jaqueta no Verão":
                if (temPC_Richard && !pcRichardAnulado) { pontosCarta += 10; bonusString += "+10 (com PC/Richard). "; }
                break;
            case "Enquete":
                const numEventosEnquete = mao.filter(c => c.tipo === "Evento").length;
                const numPresentesEnquete = mao.filter(c => c.tag === "Presente").length;
                pontosCarta -= numEventosEnquete * 10 + numPresentesEnquete * 5;
                penalidadeString += `-${numEventosEnquete * 10} (com Eventos) e -${numPresentesEnquete * 5} (com Presentes). `;
                break;
            case "Café":
                const eventosComCafe = mao.filter(c => ["Coffee da Carol", "CURSO DE FORMAÇÃO", "PRESENCIAL", "ANIVERSÁRIO DO ANDERSON"].includes(c.nome)).length;
                pontosCarta += eventosComCafe * 10;
                bonusString += `+${eventosComCafe * 10} (com Eventos). `;
                break;
            case "Chaveiro Ofensivo":
                if (temPC_Richard) { pontosCarta -= coringasNaMao.includes("PC/Richard") ? 0 : 20; penalidadeString += "Anula os pontos de PC/Richard. "; }
                break;
            case "Herbalife":
                const numAlvosHerbalife = mao.filter(c => ["Ana Pimentão", "Clara Herculino", "Prefeito Pimenta"].includes(c.nome)).length;
                pontosCarta += numAlvosHerbalife * 10;
                bonusString += `+${numAlvosHerbalife * 10} (com Ana Pimentão, Clara Herculino ou Prefeito Pimenta). `;
                break;
            case "Pacote de Fralda":
                if (mao.some(c => c.nome === "CHÁ DE FRALDAS")) { pontosCarta += 10; bonusString += "+10 (com Chá de Fraldas). "; }
                const numPersonagensPacote = mao.filter(c => c.tipo === "Personagem" && c.tag !== "Premium Care").length;
                pontosCarta -= numPersonagensPacote * 5;
                penalidadeString += `-${numPersonagensPacote * 5} (com Personagens não Premium Care). `;
                break;
            case "Disney de Janeiro":
                if (interacoesInput.includes("estava de chinelo") || interacoesInput.includes("tomando matte")) { pontosCarta += 10; bonusString += "+10 (ação do jogador). "; }
                break;
            case "Nikiti na Panela":
                if (interacoesInput.includes("estava vendo um grande corpo de agua") || interacoesInput.includes("estava vendo o corcovado")) { pontosCarta += 10; bonusString += "+10 (ação do jogador). "; }
                break;
            case "Vix em Pó":
                if (interacoesInput.includes("estava comendo caranguejo") || interacoesInput.includes("tinha po no pe/na roupa")) { pontosCarta += 10; bonusString += "+10 (ação do jogador). "; }
                break;
            case "Grande Nordeste":
                if (interacoesInput.includes("estava pegando sol") || interacoesInput.includes("bebendo agua")) { pontosCarta += 10; bonusString += "+10 (ação do jogador). "; }
                break;
            case "MaCaribe":
                if (interacoesInput.includes("estava de camiseta")) { pontosCarta += 10; bonusString += "+10 (ação do jogador). "; }
                break;
            case "Itabompraí":
                if (interacoesInput.includes("estava de bota") || mao.some(c => c.nome === "EPI Completo")) { pontosCarta += 20; bonusString += "+20 (ação do jogador ou com EPI Completo). "; }
                break;
            case "Vereadora":
                const outrosPersonagensVereadora = mao.filter(c => c.tipo === "Personagem" && c.nome !== carta.nome).length;
                pontosCarta += outrosPersonagensVereadora * 5;
                bonusString += `+${outrosPersonagensVereadora * 5} (por outros Personagens). `;
                if (mao.some(c => c.tipo === "Local" && c.nome !== "Disney de Janeiro")) { pontosCarta -= 10; penalidadeString += "-10 (com Local não Disney de Janeiro). "; }
                break;
            case "MagnâniMO":
                if (interacoesInput.includes("fez uma acrobacia")) { pontosCarta += 10; bonusString += "+10 (fez acrobacia). "; }
                if (interacoesInput.includes("chorou no futebol")) { pontosCarta -= 10; penalidadeString += "-10 (chorou no futebol). "; }
                break;
            case "Rainha do Kahoot":
                if (mao.some(c => c.nome === "Kahoot")) { pontosCarta += 10; bonusString += "+10 (com Kahoot). "; }
                const numSociaisRainha = mao.filter(c => c.tag === "Social").length;
                pontosCarta -= numSociaisRainha * 10;
                penalidadeString += `-${numSociaisRainha * 10} (por Sociais). `;
                break;
            case "Caô Amigo":
                if (coringasNaMao.includes("Amigo do Raul")) { pontosCarta += 15; bonusString += "+15 (com Amigo do Raul). "; }
                const numSociaisCao = mao.filter(c => c.tag === "Social").length;
                pontosCarta += numSociaisCao * 5;
                bonusString += `+${numSociaisCao * 5} (por Sociais). `;
                if (!(mao.some(c => c.nome === "Telepata de Ni") && mao.some(c => c.nome === "MãeCaé Tips"))) { pontosCarta -= 10; penalidadeString += "-10 (sem triplo R). "; }
                break;
            case "História Sem Fim":
                if (mao.some(c => c.nome === "Procura Sem Fim")) { pontosCarta += 80; bonusString += "+80 (com Procura Sem Fim). "; }
                if (mao.filter(c => c.nome.includes("Renan")).length < 3) { pontosCarta -= 10; penalidadeString += "-10 (sem 3 Renans). "; }
                break;
            case "MãeCaé Tips":
                if (mao.some(c => c.nome === "Telepata de Ni") && mao.some(c => c.nome === "Caô Amigo")) { pontosCarta += 10; bonusString += "+10 (com triplo R). "; }
                const numSociaisMaca = mao.filter(c => c.tag === "Social").length;
                pontosCarta -= numSociaisMaca * 10;
                penalidadeString += `-${numSociaisMaca * 10} (por Sociais). `;
                break;
            case "Scheid Filho":
                if (mao.some(c => c.nome === "Kahoot")) { pontosCarta += 10; bonusString += "+10 (com Kahoot). "; }
                const numFilhos = mao.filter(c => c.nome.includes("Filho")).length;
                pontosCarta += numFilhos * 15;
                bonusString += `+${numFilhos * 15} (por Filho). `;
                const numSociaisScheid = mao.filter(c => c.tag === "Social").length;
                pontosCarta -= numSociaisScheid * 15;
                penalidadeString += `-${numSociaisScheid * 15} (por Sociais). `;
                break;
            case "Tia Clarisse":
            case "Jorge Veludo":
            case "Mari-RUN-a":
            case "Toddynho":
            case "CarioCúcho":
            case "Tranquilo?":
            case "Mochila de Alho":
            case "Bigode Sem Tempo":
            case "Carioca do Brejo":
                if (mao.some(c => c.nome === "Disney de Janeiro")) { pontosCarta += 10; bonusString += "+10 (com Disney de Janeiro). "; }
                if (carta.nome !== "Carioca do Brejo" && mao.some(c => c.tag === "Social")) { pontosCarta -= 10; penalidadeString += "-10 (com Social). "; }
                break;
            case "Comprovadamente Perdida":
                const perdidos = mao.filter(c => c.tag === "Perdido").length;
                if (perdidos === 3) { pontosCarta += 30; bonusString += "+30 (com os três Perdidos). "; }
                if (perdidos < 3) { pontosCarta -= 10; penalidadeString += "-10 (sem 3 Perdidos). "; }
                break;
            case "Milionário Disfarçado":
                if (mao.some(c => c.nome === "Contador de Moedas")) { pontosCarta += 50; bonusString += "+50 (com Contador de Moedas). "; }
                if (mao.some(c => c.nome === "Segura, Peão!")) { pontosCarta -= 10; penalidadeString += "-10 (com Segura, Peão!). "; }
                break;
            case "Bassani Sindical":
                if (mao.some(c => c.nome === "Dados Conflitantes")) { pontosCarta += 10; bonusString += "+10 (com Dados Conflitantes). "; }
                if (mao.some(c => c.tag === "Social") || mao.some(c => c.nome === "MaCaribe")) { pontosCarta -= 10; penalidadeString += "-10 (com Social ou MaCaribe). "; }
                break;
            case "Feliz Aniversário":
                const numBolo = mao.filter(c => c.nome === "Bolo de Aniversário").length;
                const numEvento = mao.filter(c => c.tipo === "Evento").length;
                const numMaCaribe = mao.filter(c => c.nome === "MaCaribe").length;
                const numChecklist = mao.filter(c => c.nome === "Check-list").length;
                pontosCarta += (numBolo + numEvento + numMaCaribe + numChecklist) * 10;
                bonusString += `+${pontosCarta} (com Bolo, Evento, MaCaribe ou Check-list). `;
                if (mao.some(c => c.nome === "Pergunta Sem Timing") || !mao.some(c => c.tag === "Social")) { pontosCarta -= 10; penalidadeString += "-10 (com Pergunta Sem Timing ou sem Social). "; }
                break;
            case "Sósia do Caio":
                if (mao.some(c => c.nome === "Disney de Janeiro")) { pontosCarta += 10; bonusString += "+10 (com Disney de Janeiro). "; }
                else if (mao.some(c => c.nome === "MaCaribe")) { pontosCarta += 5; bonusString += "+5 (com MaCaribe). "; }
                if (mao.some(c => c.nome === "Café")) { pontosCarta -= 10; penalidadeString += "-10 (com Café). "; }
                break;
            case "Estratégia Cruel":
            case "Série B":
            case "A Quem Muitos Amaro":
                if (mao.some(c => c.nome === "Vix em Pó")) { pontosCarta += 10; bonusString += "+10 (com Vix em Pó). "; }
                if (mao.some(c => c.tag === "Social")) { pontosCarta -= 10; penalidadeString += "-10 (com Social). "; }
                break;
            case "Tromps dos Magos":
            case "Soneca Russa":
            case "Cachacinha":
            case "Soneca Infinita":
                const numNikitiTromps = mao.filter(c => c.nome === "Nikiti na Panela").length;
                const numSoninho = mao.filter(c => c.tag === "Soninho").length - 1;
                pontosCarta += numNikitiTromps * 10 + numSoninho * 10;
                bonusString += `+${numNikitiTromps * 10} (com Nikiti na Panela) e +${numSoninho * 10} (com outro Soninho). `;
                if (mao.some(c => c.tag === "Social") && carta.nome !== "Cachacinha") { pontosCarta -= 10; penalidadeString += "-10 (com Social). "; }
                if (carta.nome === "Soneca Infinita" && mao.some(c => c.nome === "Barrinha de Cereal")) { pontosCarta -= 10; penalidadeString += "-10 (com Barrinha de Cereal). "; }
                if (["Soneca Russa", "Cachacinha"].includes(carta.nome) && mao.some(c => c.nome === "Pergunta Sem Timing")) { pontosCarta -= 10; penalidadeString += "-10 (com Pergunta Sem Timing). "; }
                break;
            case "Número Mágico":
                if (mao.some(c => c.nome === "Ordem de Grandeza")) { pontosCarta += 10; bonusString += "+10 (com Ordem de Grandeza). "; }
                if (!interacoesInput.includes("tentou um valor aproximado")) { pontosCarta -= 10; penalidadeString += "-10 (não tentou valor aproximado). "; }
                break;
            case "Prefeito Pimenta":
                const numNikitiPrefeito = mao.filter(c => c.nome === "Nikiti na Panela").length;
                const numCarona = coringasNaMao.includes("Carona") ? 1 : 0;
                pontosCarta += numNikitiPrefeito * 10 + numCarona * 10;
                bonusString += `+${numNikitiPrefeito * 10} (com Nikiti na Panela) e +${numCarona * 10} (com Carona). `;
                const numSociaisPimenta = mao.filter(c => c.tag === "Social").length;
                pontosCarta -= numSociaisPimenta * 10;
                penalidadeString += `-${numSociaisPimenta * 10} (com Sociais). `;
                break;
            case "Guitarra de Suprimentos":
                if (mao.some(c => c.nome === "PDV")) { pontosCarta += 80; bonusString += "+80 (com PDV). "; }
                if (mao.some(c => c.nome === "General Trigus Aurelius")) { pontosCarta += 10; bonusString += "+10 (com General Trigus Aurelius). "; }
                const numSociaisGuitarra = mao.filter(c => c.tag === "Social").length;
                pontosCarta -= numSociaisGuitarra * 10;
                penalidadeString += `-${numSociaisGuitarra * 10} (com Sociais). `;
                break;
            case "Joabe-se Quem Puder":
                if (coringasNaMao.includes("Lista de Presença")) { pontosCarta += 10; bonusString += "+10 (com Lista de Presença). "; }
                const numSociaisJoabe = mao.filter(c => c.tag === "Social").length;
                pontosCarta -= numSociaisJoabe * 10;
                penalidadeString += `-${numSociaisJoabe * 10} (com Sociais). `;
                break;
            case "Super Sincera":
                if (mao.some(c => c.nome === "Guitarra de Suprimentos")) { pontosCarta += 10; bonusString += "+10 (com Guitarra de Suprimentos). "; }
                const numSociaisSincera = mao.filter(c => c.tag === "Social").length;
                pontosCarta -= numSociaisSincera * 10;
                penalidadeString += `-${numSociaisSincera * 10} (com Sociais). `;
                break;
            case "Vamos Marcar":
            case "Olefinas":
                if (mao.some(c => c.nome === "Pato Migratório")) { pontosCarta += 10; bonusString += "+10 (com Pato Migratório). "; }
                if (mao.some(c => c.tag === "Social") && carta.nome === "Vamos Marcar") { pontosCarta -= 10; penalidadeString += "-10 (com Social). "; }
                if (mao.some(c => c.nome === "Itabompraí") && carta.nome === "Olefinas") { pontosCarta -= 10; penalidadeString += "-10 (com Itabompraí). "; }
                break;
            case "Colheita Feliz":
                if (mao.some(c => c.nome === "Pato Migratório")) { pontosCarta += 10; bonusString += "+10 (com Pato Migratório). "; }
                const alvosColheita = mao.filter(c => ["Shinobi Campista", "PETagoga", "Vereadora"].includes(c.nome)).length;
                pontosCarta += alvosColheita * 5;
                bonusString += `+${alvosColheita * 5} (com Shinobi Campista, PETagoga e Vereadora). `;
                if (mao.some(c => c.tag === "Social")) { pontosCarta -= 10; penalidadeString += "-10 (com Social). "; }
                break;
            case "Raulzito":
            case "Shinobi Campista":
                const numPetrobanda = mao.filter(c => c.tag === "PetroBanda").length - 1;
                pontosCarta += numPetrobanda * 10;
                bonusString += `+${numPetrobanda * 10} (com outro PetroBanda). `;
                if (mao.some(c => c.tag === "Social")) { pontosCarta -= 10; penalidadeString += "-10 (com Social). "; }
                break;
            case "Renan Preso":
                if (mao.some(c => c.nome === "Pergunta Sem Timing")) { pontosCarta += 10; bonusString += "+10 (com Pergunta Sem Timing). "; }
                if (mao.some(c => c.nome === "Renan Livre Leve")) { pontosCarta += 5; bonusString += "+5 (com Renan Livre Leve). "; }
                if (mao.some(c => c.tag === "Social")) { pontosCarta -= 10; penalidadeString += "-10 (com Social). "; }
                break;
            case "Super Mario on IceCream":
                if (mao.some(c => c.nome === "Não pode ser real") || mao.some(c => c.nome === "Calebito Vai dar Certo")) { pontosCarta += 10; bonusString += "+10 (com Não pode ser real ou Calebito Vai dar Certo). "; }
                if (mao.some(c => c.nome === "Wario")) { pontosCarta -= 10; penalidadeString += "-10 (com Wario). "; }
                break;
            case "Telepata de Ni":
                if (mao.some(c => c.nome === "Caô Amigo") && mao.some(c => c.nome === "MãeCaé Tips")) { pontosCarta += 10; bonusString += "+10 (com triplo R). "; }
                if (mao.some(c => c.nome === "Rita Lee")) { pontosCarta -= 10; penalidadeString += "-10 (com Rita Lee). "; }
                break;
            case "Espião do PC":
                if (mao.some(c => c.nome === "Apresentação do Projeto")) { pontosCarta += 50; bonusString += "+50 (com Apresentação do Projeto). "; }
                const numOutrosPersonagens = mao.filter(c => c.tipo === "Personagem" && c.nome !== carta.nome).length;
                pontosCarta -= numOutrosPersonagens * 5;
                penalidadeString += `-${numOutrosPersonagens * 5} (por outros Personagens). `;
                break;
            case "Bruce Weiner":
                if (mao.some(c => c.nome === "Alfred")) { pontosCarta += 50; bonusString += "+50 (com Alfred). "; }
                if (!mao.some(c => c.nome === "Labrador")) { pontosCarta -= 10; penalidadeString += "-10 (sem Labrador). "; }
                break;
            case "CaretaPool":
                if (mao.some(c => c.nome === "Cruelrine")) { pontosCarta += 10; bonusString += "+10 (com Cruelrine). "; }
                if (mao.some(c => c.nome === "Pato Migratório")) { pontosCarta -= 10; penalidadeString += "-10 (com Pato Migratório). "; }
                break;
            case "Média de Ouro":
                const numEventosM = mao.filter(c => ["CURSO DE FORMAÇÃO", "Nikiti na Panela"].includes(c.nome)).length;
                pontosCarta += numEventosM * 10;
                bonusString += `+${numEventosM * 10} (com Curso de Formação ou Nikiti na Panela). `;
                if (mao.some(c => c.tag === "Social")) { pontosCarta -= 10; penalidadeString += "-10 (com Social). "; }
                break;
            case "Clara Herculino":
                if (mao.some(c => c.nome === "Nikiti na Panela")) { pontosCarta += 10; bonusString += "+10 (com Nikiti na Panela). "; }
                if (mao.some(c => c.tag === "Social") || mao.some(c => c.nome === "Enquete")) { pontosCarta -= 10; penalidadeString += "-10 (com Social ou Enquete). "; }
                break;
            case "Farmácia":
                const numOutrosPersonagensF = mao.filter(c => c.tipo === "Personagem" && c.nome !== carta.nome).length;
                pontosCarta += numOutrosPersonagensF * 5;
                bonusString += `+${numOutrosPersonagensF * 5} (por outros Personagens). `;
                break;
            case "Tô Em Todas":
                const eventosTTE = mao.filter(c => c.tipo === "Evento").length;
                const locaisTTE = mao.filter(c => c.tipo === "Local").length;
                if (eventosTTE > 0 && locaisTTE > 0) { pontosCarta += 10; bonusString += "+10 (com Evento e Local). "; }
                if (mao.some(c => c.nome === "Aplausos Constrangedores")) { pontosCarta -= 15; penalidadeString += "-15 (com Aplausos Constrangedores). "; }
                break;
            case "Pai do Regato":
                if (mao.some(c => c.nome === "Camiseto")) { pontosCarta += 10; bonusString += "+10 (com Camiseto). "; }
                if (mao.some(c => c.tag === "Social")) { pontosCarta -= 10; penalidadeString += "-10 (com Social). "; }
                break;
            case "Praieira de Minas":
                if (mao.some(c => c.nome === "Vix em Pó")) { pontosCarta += 10; bonusString += "+10 (com Vix em Pó). "; }
                if (mao.some(c => c.nome === "Série B")) { pontosCarta += 10; bonusString += "+10 (com Série B). "; }
                if (mao.some(c => c.tag === "Social")) { pontosCarta -= 10; penalidadeString += "-10 (com Social). "; }
                break;
            case "Solução Caseira":
                const eventosSC = mao.filter(c => ["ANIVERSÁRIO DO ANDERSON", "FESTA ANUAL"].includes(c.nome)).length;
                pontosCarta += eventosSC * 10;
                bonusString += `+${eventosSC * 10} (com Aniversário do Anderson ou Festa Anual). `;
                if (interacoesInput.includes("tirou a barba")) { pontosCarta -= 10; penalidadeString += "-10 (tirou a barba). "; }
                break;
            case "Rei da Rifa":
                if (mao.some(c => c.nome === "Rifa")) { pontosCarta += 50; bonusString += "+50 (com Rifa). "; }
                if (temCursoDeFormacao) { pontosCarta += 10; bonusString += "+10 (com Curso de Formação). "; }
                if (interacoesInput.includes("teve que repetir a explicação da matéria")) { pontosCarta -= 10; penalidadeString += "-10 (teve que repetir explicação). "; }
                break;
            case "Aí Vem O Desespero":
                if (mao.some(c => c.nome === "Discussão Pós-prova")) { pontosCarta += 10; bonusString += "+10 (com Discussão Pós-prova). "; }
                if (mao.some(c => c.tag === "Social") || mao.some(c => c.nome === "MaCaribe")) { pontosCarta -= 10; penalidadeString += "-10 (com Social ou MaCaribe). "; }
                break;
            case "ServiceNat":
                const outrosPersonagensSN = mao.filter(c => c.tipo === "Personagem" && c.nome !== carta.nome).length;
                pontosCarta += outrosPersonagensSN * 5;
                bonusString += `+${outrosPersonagensSN * 5} (por outros Personagens). `;
                if (mao.some(c => c.nome === "Nikiti na Panela")) { pontosCarta += 10; bonusString += "+10 (com Nikiti na Panela). "; }
                if (mao.some(c => c.tag === "Social")) { pontosCarta -= 10; penalidadeString += "-10 (com Social). "; }
                break;
            case "Luiz de Lente":
                if (mao.some(c => c.nome === "Foto de Óculos")) { pontosCarta += 50; bonusString += "+50 (com Foto de Óculos). "; }
                if (mao.some(c => c.tag === "Social")) { pontosCarta -= 10; penalidadeString += "-10 (com Social). "; }
                break;
            case "Gasparzinho Sundown":
                if (mao.some(c => c.nome === "Filtro Solar")) { pontosCarta += 10; bonusString += "+10 (com Filtro Solar). "; }
                if (!mao.some(c => c.nome === "EPI Completo")) { pontosCarta -= 10; penalidadeString += "-10 (sem EPI Completo). "; }
                break;
            case "Cruelrine":
                if (mao.some(c => c.nome === "Caretapool")) { pontosCarta += 10; bonusString += "+10 (com Caretapool). "; }
                if (mao.filter(c => c.tag === "Soninho").length > 0) { pontosCarta -= 10; penalidadeString += "-10 (com Soninho). "; }
                break;
            case "Gerente Feedback Jr":
                if (mao.some(c => c.nome === "Itabompraí")) { pontosCarta += 10; bonusString += "+10 (com Itabompraí). "; }
                if (!mao.some(c => c.nome === "EPI Completo")) { pontosCarta -= 10; penalidadeString += "-10 (sem EPI Completo). "; }
                break;
            case "New Saulo":
                if (mao.some(c => c.nome === "Kit Churrasco")) { pontosCarta += 10; bonusString += "+10 (com Kit Churrasco). "; }
                if (mao.some(c => c.tag === "Social") && interacoesInput.includes("precisou pegar uber")) { pontosCarta -= 10; penalidadeString += "-10 (precisou pegar Uber). "; }
                break;
            case "O Infiltrado":
                if (mao.some(c => c.nome === "Treinamento sem Convite")) { pontosCarta += 50; bonusString += "+50 (com Treinamento sem Convite). "; }
                if (mao.some(c => c.nome === "Saco Preto")) { pontosCarta -= 10; penalidadeString += "-10 (com Saco Preto). "; }
                break;
            case "Camiseto":
                if (mao.some(c => c.nome === "Pai do Regato") || mao.some(c => c.nome === "Feliz Aniversário")) { pontosCarta += 10; bonusString += "+10 (com Pai do Regato ou Feliz Aniversário). "; }
                if (!interacoesInput.includes("estava de bermuda e/ou regata")) { pontosCarta -= 10; penalidadeString += "-10 (não estava de bermuda/regata). "; }
                break;
            case "Renan Livre Leve":
                const numSociaisRenanL = mao.filter(c => c.tag === "Social").length;
                pontosCarta += numSociaisRenanL * 10;
                bonusString += `+${numSociaisRenanL * 10} (com Sociais). `;
                if (mao.some(c => c.nome === "Renan Preso")) { pontosCarta += 5; bonusString += "+5 (com Renan Preso). "; }
                if (mao.filter(c => c.nome.includes("Renan")).length < 3) { pontosCarta -= 10; penalidadeString += "-10 (sem 3 Renans). "; }
                break;
            case "Engenheiro Jr Sênior":
                if (interacoesInput.includes("personagem mais antigo na mao")) { pontosCarta += 10; bonusString += "+10 (personagem mais antigo). "; }
                if (mao.some(c => c.nome === "Neymar Contundido")) { pontosCarta -= 10; penalidadeString += "-10 (com Neymar Contundido). "; }
                break;
            case "Meu nome não é Robison":
                if (coringasNaMao.includes("Presencial de Outra Cidade")) { pontosCarta += 10; bonusString += "+10 (com Presencial de Outra Cidade). "; }
                if (interacoesInput.includes("jogador com nome composto")) { pontosCarta -= 10; penalidadeString += "-10 (jogador com nome composto). "; }
                break;
            case "Uivo da Varanda":
                const numSociaisUivo = mao.filter(c => c.tag === "Social").length;
                pontosCarta += numSociaisUivo * 10;
                bonusString += `+${numSociaisUivo * 10} (com Sociais). `;
                if (temCursoDeFormacao) { pontosCarta -= 10; penalidadeString += "-10 (com Curso de Formação). "; }
                break;
            case "Enquetes Everywhere":
                if (mao.some(c => c.nome === "Enquete")) { pontosCarta += 10; bonusString += "+10 (com Enquete). "; }
                if (mao.some(c => c.nome === "Cameraman")) { pontosCarta += 5; bonusString += "+5 (com Cameraman). "; }
                if (!mao.some(c => c.nome === "Mostra o RG")) { pontosCarta -= 5; penalidadeString += "-5 (sem Mostra o RG). "; }
                break;
            case "Come Nada":
                if (mao.some(c => c.nome === "Caretapool")) { pontosCarta += 10; bonusString += "+10 (com Caretapool). "; }
                const numAlimentoTrigo = mao.filter(c => c.tag === "Trigo" || c.tag === "Alimento").length;
                pontosCarta -= numAlimentoTrigo * 10;
                penalidadeString += `-${numAlimentoTrigo * 10} (com Trigo ou Alimento). `;
                break;
            case "Ana Pimentão":
            case "Farmácia":
            case "Segue o Link":
                const outrosPersonagensGeral = mao.filter(c => c.tipo === "Personagem" && c.nome !== carta.nome).length;
                pontosCarta += outrosPersonagensGeral * 5;
                bonusString += `+${outrosPersonagensGeral * 5} (por outros Personagens). `;
                break;
            case "Trompete Tímido":
                if (mao.some(c => c.nome === "Shinobi Campista")) { pontosCarta += 10; bonusString += "+10 (com Shinobi Campista). "; }
                if (mao.some(c => c.nome === "MaCaribe")) { pontosCarta -= 10; penalidadeString += "-10 (com MaCaribe). "; }
                break;
            case "Humorista Espião":
                const alvosHumorista = mao.filter(c => ["Nikiti na Panela", "ANIVERSÁRIO DO ANDERSON", "FESTA ANUAL"].includes(c.nome)).length;
                pontosCarta += alvosHumorista * 10;
                bonusString += `+${alvosHumorista * 10} (com Nikiti, Aniversário ou Festa Anual). `;
                if (!mao.some(c => c.nome === "Nikiti na Panela")) { pontosCarta -= 10; penalidadeString += "-10 (sem Nikiti na Panela). "; }
                break;
            case "Manager Face":
                if (coringasNaMao.includes("Presencial de Outra Cidade")) { pontosCarta += 10; bonusString += "+10 (com Presencial de Outra Cidade). "; }
                if (!interacoesInput.includes("fez cara de gerente")) { pontosCarta -= 10; penalidadeString += "-10 (não fez cara de gerente). "; }
                break;
            case "Skin Care Maromba":
                if (mao.some(c => c.nome === "Grande Nordeste")) { pontosCarta += 10; bonusString += "+10 (com Grande Nordeste). "; }
                if (!interacoesInput.includes("treinou hoje")) { pontosCarta -= 10; penalidadeString += "-10 (não treinou hoje). "; }
                break;
            case "Mostra o RG":
                if (mao.some(c => c.nome === "Enquetes Everywhere") || mao.some(c => c.nome === "Cameraman")) { pontosCarta += 5; bonusString += "+5 (com Enquetes Everywhere ou Cameraman). "; }
                if (!mao.some(c => c.nome === "Atrasilda")) { pontosCarta -= 5; penalidadeString += "-5 (sem Atrasilda). "; }
                break;
            case "Eu Sou A Lenda":
                if (mao.some(c => c.nome === "Comprovante")) { pontosCarta += 15; bonusString += "+15 (com Comprovante). "; }
                if (mao.some(c => c.nome === "Disney de Janeiro")) { pontosCarta -= 10; penalidadeString += "-10 (com Disney de Janeiro). "; }
                break;
            case "Max Milhas":
                if (interacoesInput.includes("cantou por 10s")) { pontosCarta += 10; bonusString += "+10 (cantou por 10s). "; }
                if (interacoesInput.includes("nao voou/voar")) { pontosCarta -= 10; penalidadeString += "-10 (não voou). "; }
                break;
            case "Atrasilda":
                if (mao.some(c => c.nome === "Mostra o RG") || mao.some(c => c.nome === "Enquetes Everywhere")) { pontosCarta += 5; bonusString += "+5 (com Mostra o RG ou Enquetes Everywhere). "; }
                if (!mao.some(c => c.nome === "Cameraman")) { pontosCarta -= 10; penalidadeString += "-10 (sem Cameraman). "; }
                break;
            case "Jogador Colombiano":
                if (mao.some(c => c.nome === "Contusão no Joelho")) { pontosCarta += 20; bonusString += "+20 (com Contusão no Joelho). "; }
                if (interacoesInput.includes("nunca assistiu a serie narcos")) { pontosCarta -= 10; penalidadeString += "-10 (não assistiu Narcos). "; }
                break;
            case "Esqueceram de Mim":
                if (interacoesInput.includes("celular >79%")) { pontosCarta += 10; bonusString += "+10 (celular >79%). "; }
                if (interacoesInput.includes("veio de onibus de viagem")) { pontosCarta -= 10; penalidadeString += "-10 (veio de onibus). "; }
                break;
            case "Zócolo na Caixeta":
            case "Caixeta de Zócolo":
                if (mao.some(c => c.nome === "Piada Devastadora")) { pontosCarta += 10; bonusString += "+10 (com Piada Devastadora). "; }
                if (mao.some(c => c.nome === "Pergunta Sem Timing")) { pontosCarta -= 10; penalidadeString += "-10 (com Pergunta Sem Timing). "; }
                break;
            case "Cameraman":
                if (mao.some(c => c.nome === "Atrasilda")) { pontosCarta += 10; bonusString += "+10 (com Atrasilda). "; }
                if (mao.some(c => c.nome === "Mostra o RG")) { pontosCarta += 5; bonusString += "+5 (com Mostra o RG). "; }
                if (!mao.some(c => c.nome === "Câmera Ligada")) { pontosCarta -= 10; penalidadeString += "-10 (sem Câmera Ligada). "; }
                break;
            case "Labrador":
                if (mao.some(c => c.nome === "Bruce Weiner")) { pontosCarta += 10; bonusString += "+10 (com Bruce Weiner). "; }
                if (mao.filter(c => c.tag === "Soninho").length > 0) { pontosCarta -= 10; penalidadeString += "-10 (com Soninho). "; }
                break;
            case "Hermano Mullets":
                if (coringasNaMao.includes("Presencial de Outra Cidade")) { pontosCarta += 15; bonusString += "+15 (com Presencial de Outra Cidade). "; }
                if (mao.some(c => c.nome === "PRESENCIAL")) { pontosCarta -= 15; penalidadeString += "-15 (com Presencial). "; }
                break;
            case "Laboratórios Medley":
                if (mao.some(c => c.nome === "Grande Nordeste")) { pontosCarta += 10; bonusString += "+10 (com Grande Nordeste). "; }
                if (mao.some(c => c.tag === "Social")) { pontosCarta -= 10; penalidadeString += "-10 (com Social). "; }
                break;
            case "Laboratórios Achè":
                if (mao.some(c => c.nome === "Laboratórios Medley")) { pontosCarta += 10; bonusString += "+10 (com Laboratórios Medley). "; }
                if (mao.some(c => c.tag === "Social")) { pontosCarta -= 10; penalidadeString += "-10 (com Social). "; }
                break;
            case "Ricardo Nervosinho":
                const eventosRicardo = mao.filter(c => c.tipo === "Evento").length;
                const maCaribeRicardo = mao.some(c => c.nome === "MaCaribe");
                if (eventosRicardo > 0 || maCaribeRicardo) {
                    pontosCarta += 10;
                    bonusString += "+10 (com Evento ou MaCaribe). ";
                }
                if (!mao.some(c => c.tag === "Social")) { pontosCarta -= 10; penalidadeString += "-10 (sem Social). "; }
                break;
            case "Doceira de Nikiti":
            case "Mexido, Não Batido":
                if (mao.some(c => c.nome === "Nikiti na Panela")) { pontosCarta += 10; bonusString += "+10 (com Nikiti na Panela). "; }
                if (mao.some(c => c.tag === "Social")) { pontosCarta -= 10; penalidadeString += "-10 (com Social). "; }
                break;
            case "General Trigus Aurelius":
                if (mao.some(c => c.nome === "Pão de Queijo")) { pontosCarta += 15; bonusString += "+15 (com Pão de Queijo). "; }
                if (mao.some(c => c.tag === "Social") || mao.some(c => c.nome === "MaCaribe")) { pontosCarta += 5; bonusString += "+5 (com MaCaribe ou Social). "; }
                const numTrigo = mao.filter(c => c.tag === "Trigo").length;
                pontosCarta -= numTrigo * 10;
                penalidadeString += `-${numTrigo * 10} (com Trigo). `;
                break;
            case "PETagoga":
                if (mao.some(c => c.nome === "Vereadora")) { pontosCarta += 10; bonusString += "+10 (com Vereadora). "; }
                const alvosPETagoga = mao.filter(c => ["Colheita Feliz", "Shinobi Campista", "PET"].includes(c.nome)).length;
                pontosCarta += alvosPETagoga * 5;
                bonusString += `+${alvosPETagoga * 5} (com Colheita Feliz, Shinobi Campista e PET). `;
                break;
            case "Bibliotecário":
                if (mao.some(c => c.nome === "Biblioteca do EDIBH")) { pontosCarta += 50; bonusString += "+50 (com Biblioteca do EDIBH). "; }
                if (mao.some(c => c.nome === "Resumo da Carol")) { pontosCarta -= 10; penalidadeString += "-10 (com Resumo da Carol). "; }
                break;
        }

        // Aplicação de bônus e penalidades anuladas por coringas
        if (temNaoPodeSerReal && penalidadeString.length > 0) {
            pontosCarta = 0; // Anula a penalidade
            penalidadeString = `Penalidade anulada por 'Não pode ser real'.`;
        }
        if (temPC_Richard && temCursoDeFormacao && penalidadeString.length > 0) {
            pontosCarta = 0; // Anula a penalidade
            penalidadeString = `Penalidade anulada por 'PC/Richard' com 'Curso de Formação'.`;
        }

        if (pontosCarta !== 0) {
            detalhes += `<p><strong>${carta.nome}</strong>: ${pontosCarta > 0 ? '+' : ''}${pontosCarta} (${bonusString}${penalidadeString}).</p>`;
            if (pontosCarta > 0) bonusTotal += pontosCarta;
            else penalidadeTotal += pontosCarta;
        }
    });

    detalhes += `<hr><p><strong>Total de Bônus: ${bonusTotal}</strong></p>`;
    detalhes += `<p><strong>Total de Penalidades: ${penalidadeTotal}</strong></p>`;

    const pontuacaoFinal = pontuacaoBase + bonusTotal + penalidadeTotal;
    detalhes += `<hr><h2>Pontuação Total: ${pontuacaoFinal} pontos</h2>`;

    resultadoDiv.innerHTML = detalhes;
}
