const cartas = [
    { nome: "Presencial de Outra Cidade", tipo: "Coringa", pontos: 0, bonus: "[B] Considere até dois Locais como apenas um", penalidades: "", tag: "", deck: "Amarelo", naipe: "Copas", numero: "A" },
    { nome: "Mochila Petrobras", tipo: "Coringa", pontos: 0, bonus: "[B] Ao fim do jogo, pegue até um Item (carta extra) da área de descarte", penalidades: "[P] -25 com Disney de Janeiro", tag: "", deck: "Branco", naipe: "Copas", numero: "A" },
    { nome: "PC/Richard", tipo: "Coringa", pontos: 0, bonus: "[B] Elimina todas as penalidades se tiver Curso de Formação", penalidades: "", tag: "", deck: "Verde", naipe: "Copas", numero: "A" },
    { nome: "Nível", tipo: "Coringa", pontos: 0, bonus: "[B] +10 para cada Vix em Pó e Festa Anual. [P] Anulada com Curso de Formação.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Espadas", numero: "A" },
    { nome: "Não pode ser real", tipo: "Coringa", pontos: 0, bonus: "[B] Anula uma penalidade", penalidades: "", tag: "", deck: "Amarelo", naipe: "Ouros", numero: "A" },
    { nome: "T5 Honorário", tipo: "Coringa", pontos: 0, bonus: "[B] Ao fim do jogo, pegue até um Personagem (carta extra) da área de descarte", penalidades: "", tag: "", deck: "Branco", naipe: "Ouros", numero: "A" },
    { nome: "Carona", tipo: "Coringa", pontos: 0, bonus: "[B] Você pode ter até cinco Personagens", penalidades: "", tag: "", deck: "Verde", naipe: "Ouros", numero: "A" },
    { nome: "Lista de Presença", tipo: "Coringa", pontos: 0, bonus: "[B] Você pode ter até seis Personagens", penalidades: "", tag: "", deck: "Amarelo", naipe: "Paus", numero: "A" },
    { nome: "Amigo do Raul", tipo: "Coringa", pontos: 0, bonus: "[B] Pode duplicar qualquer Personagem do jogo. Não afeta bônus, penalidade e força básica da carta copiada.", penalidades: "", tag: "", deck: "Branco", naipe: "Paus", numero: "A" },
    { nome: "Modelo Híbrido", tipo: "Coringa", pontos: 0, bonus: "[B] Considere Presencial e Home-Office como apenas um Evento", penalidades: "", tag: "", deck: "Verde", naipe: "Paus", numero: "A" },
    { nome: "CURSO DE FORMAÇÃO", tipo: "Evento", pontos: 40, bonus: "[B] +10 com Disney de Janeiro OU PC/Richard OU Lista de Presença", penalidades: "", tag: "", deck: "Amarelo", naipe: "Copas", numero: "10" },
    { nome: "CHÁ DE FRALDAS", tipo: "Evento", pontos: 40, bonus: "", penalidades: "[P] -10 sem Pacote de Fraldas. [P] Anulada sem Premium Care", tag: "", deck: "Branco", naipe: "Copas", numero: "10" },
    { nome: "VISITA TÉCNICA", tipo: "Evento", pontos: 40, bonus: "", penalidades: "[P] -10 a menos que tenha EPI Completo", tag: "", deck: "Verde", naipe: "Copas", numero: "10" },
    { nome: "FESTA ANUAL", tipo: "Evento", pontos: 40, bonus: "[B] +10 com qualquer Local ou com T5 Honorário", penalidades: "", tag: "Social", deck: "Branco", naipe: "Espadas", numero: "A" },
    { nome: "ALMOÇÃO", tipo: "Evento", pontos: 40, bonus: "[B] +20 com MaCaribe", penalidades: "", tag: "Social", deck: "Verde", naipe: "Espadas", numero: "A" },
    { nome: "INVADE HOUSE", tipo: "Evento", pontos: 40, bonus: "[B] +20 com MaCaribe", penalidades: "", tag: "Social", deck: "Amarelo", naipe: "Ouros", numero: "10" },
    { nome: "COFFEE DA CAROL", tipo: "Evento", pontos: 40, bonus: "[B] +15 para cada Comprovadamente Perdida e Chá de Fraldas. [P] -15 sem Café", penalidades: "", tag: "", deck: "Branco", naipe: "Ouros", numero: "10" },
    { nome: "ANIVERSÁRIO DO ANDERSON", tipo: "Evento", pontos: 40, bonus: "[B] Não conta como um Evento", penalidades: "", tag: "", deck: "Amarelo", naipe: "Paus", numero: "10" },
    { nome: "PRESENCIAL", tipo: "Evento", pontos: 40, bonus: "", penalidades: "[P] -10 com Pato Migratório", tag: "", deck: "Branco", naipe: "Paus", numero: "10" },
    { nome: "HOME-OFFICE", tipo: "Evento", pontos: 40, bonus: "", penalidades: "[P] -10 com Pato Migratório", tag: "", deck: "Verde", naipe: "Paus", numero: "10" },
    { nome: "Carregador de Notebook", tipo: "Item/Meme", pontos: 5, bonus: "Já sabe quem perdeu, né? :D", penalidades: "", tag: "Perdido", deck: "Amarelo", naipe: "Copas", numero: "J" },
    { nome: "Aplausos Constrangedores", tipo: "Item/Meme", pontos: 5, bonus: "[B] +5 para cada Personagem, Aniversário do Anderson, Curso de Formação", penalidades: "", tag: "", deck: "Amarelo", naipe: "Copas", numero: "K" },
    { nome: "Comprovante", tipo: "Item/Meme", pontos: 5, bonus: "Só 2 pessoas recebem ;)", penalidades: "", tag: "Perdido", deck: "Amarelo", naipe: "Copas", numero: "Q" },
    { nome: "Contusão no Joelho", tipo: "Item/Meme", pontos: 10, bonus: "", penalidades: "[P] Anula um Personagem exceto Joabe-se quem Puder", tag: "", deck: "Branco", naipe: "Copas", numero: "J" },
    { nome: "Calebito Vai dar Certo", tipo: "Item/Meme", pontos: 5, bonus: "[B] +5 para cada Personagem. [P] -10 para cada Ana Pimentão e Farmácia", penalidades: "", tag: "", deck: "Branco", naipe: "Copas", numero: "K" },
    { nome: "BassaNews", tipo: "Item/Meme", pontos: 5, bonus: "[B] +10 com Bassani Sindical. [P] -15 se hoje é sexta-feira.", penalidades: "", tag: "", deck: "Branco", naipe: "Copas", numero: "Q" },
    { nome: "Feedback", tipo: "Item/Meme", pontos: 20, bonus: "", penalidades: "[P] -5 para cada Personagem, exceto Gerente Feedback Jr", tag: "", deck: "Verde", naipe: "Copas", numero: "J" },
    { nome: "Kit Churrasco", tipo: "Item/Meme", pontos: 5, bonus: "[B] +10 para cada Invade House, Aniversário do Anderson, Festa Anual", penalidades: "", tag: "Alimento", deck: "Verde", naipe: "Copas", numero: "K" },
    { nome: "Dados Conflitantes", tipo: "Item/Meme", pontos: 5, bonus: "", penalidades: "[P] -10 com Curso de Formação ou Aniversário do Anderson", tag: "", deck: "Verde", naipe: "Copas", numero: "Q" },
    { nome: "Não se preocupe com prova", tipo: "Item/Meme", pontos: 10, bonus: "", penalidades: "[P] -5 para cada Personagem se tiver Curso de Formação", tag: "", deck: "Amarelo", naipe: "Espadas", numero: "J" },
    { nome: "Segura, Peão!", tipo: "Item/Meme", pontos: 14, bonus: "[B] +63 com MaCaribe ou +53 com Vix em Pó ou +43 com Grande Nordeste", penalidades: "", tag: "", deck: "Amarelo", naipe: "Espadas", numero: "K" },
    { nome: "Pão de Queijo", tipo: "Item/Meme", pontos: 5, bonus: "[B] +5 para cada Evento", penalidades: "", tag: "Alimento", deck: "Amarelo", naipe: "Espadas", numero: "Q" },
    { nome: "Pato Migratório", tipo: "Item/Meme", pontos: 15, bonus: "[B] +10 com cada Invade House, Aniversário do Anderson, Almoção, Festa Anual.", penalidades: "", tag: "", deck: "Branco", naipe: "Espadas", numero: "J" },
    { nome: "Ordem de Grandeza", tipo: "Item/Meme", pontos: 5, bonus: "[B] +10 com Número Mágico", penalidades: "", tag: "", deck: "Branco", naipe: "Espadas", numero: "K" },
    { nome: "Resumo da Carol", tipo: "Item/Meme", pontos: 5, bonus: "[B] +10 para cada Personagem se tiver Curso de Formação", penalidades: "", tag: "", deck: "Branco", naipe: "Espadas", numero: "Q" },
    { nome: "Bolo de Aniversário", tipo: "Item/Meme", pontos: 5, bonus: "[B] +10 com qualquer Evento exceto Curso de Formação, Presencial e Home-Office", penalidades: "", tag: "Trigo", deck: "Verde", naipe: "Espadas", numero: "J" },
    { nome: "Check-list", tipo: "Item/Meme", pontos: 5, bonus: "[B] +5 para cada Aniversário do Anderson, Curso de Formação, Home-Office, Presencial", penalidades: "", tag: "", deck: "Verde", naipe: "Espadas", numero: "K" },
    { nome: "Câmera Ligada", tipo: "Item/Meme", pontos: 20, bonus: "", penalidades: "[P] -5 para cada Personagem, exceto Cameraman", tag: "", deck: "Verde", naipe: "Espadas", numero: "Q" },
    { nome: "Day Use", tipo: "Item/Meme", pontos: 5, bonus: "", penalidades: "[P] -5 para cada Personagem exceto Segue o Link e Ana Pimentão", tag: "Presente", deck: "Amarelo", naipe: "Ouros", numero: "J" },
    { nome: "Piada Devastadora", tipo: "Item/Meme", pontos: 5, bonus: "[B] +25 para cada Evento", penalidades: "", tag: "", deck: "Amarelo", naipe: "Ouros", numero: "K" },
    { nome: "Filtro Solar", tipo: "Item/Meme", pontos: 5, bonus: "[B] +10 Gasparzinho Sundown", penalidades: "", tag: "", deck: "Amarelo", naipe: "Ouros", numero: "Q" },
    { nome: "EPI Completo", tipo: "Item/Meme", pontos: 5, bonus: "", penalidades: "[P] -25 com Pergunta Sem Timing", tag: "", deck: "Branco", naipe: "Ouros", numero: "J" },
    { nome: "Strip no Jet de Swap", tipo: "Item/Meme", pontos: 30, bonus: "", penalidades: "[P] -5 para cada Personagem", tag: "", deck: "Branco", naipe: "Ouros", numero: "K" },
    { nome: "Kahoot", tipo: "Item/Meme", pontos: 5, bonus: "[B] +10 com qualquer Personagem", penalidades: "", tag: "", deck: "Branco", naipe: "Ouros", numero: "Q" },
    { nome: "Saco Preto", tipo: "Item/Meme", pontos: 30, bonus: "", penalidades: "[P] -5 para cada Personagem e -25 com Itabompraí.", tag: "", deck: "Verde", naipe: "Ouros", numero: "J" },
    { nome: "Pergunta Sem Timing", tipo: "Item/Meme", pontos: 5, bonus: "", penalidades: "[P] -15 para cada Curso de Formação", tag: "", deck: "Verde", naipe: "Ouros", numero: "K" },
    { nome: "Tava Embarcado?", tipo: "Item/Meme", pontos: 30, bonus: "", penalidades: "[P] -5 para cada Personagem", tag: "", deck: "Verde", naipe: "Ouros", numero: "Q" },
    { nome: "Jaqueta no Verão", tipo: "Item/Meme", pontos: 5, bonus: "[B]  +10 com PC/Richard", penalidades: "", tag: "Presente", deck: "Amarelo", naipe: "Paus", numero: "J" },
    { nome: "Enquete", tipo: "Item/Meme", pontos: 25, bonus: "", penalidades: "[P] -10 para cada Evento e -5 para cada Presente", tag: "", deck: "Amarelo", naipe: "Paus", numero: "K" },
    { nome: "Café", tipo: "Item/Meme", pontos: 5, bonus: "[B] +10 com Coffee da Carol ou Curso de Formação ou Presencial ou Aniversário do Anderson", penalidades: "", tag: "", deck: "Amarelo", naipe: "Paus", numero: "Q" },
    { nome: "Discussão Pós-prova", tipo: "Item/Meme", pontos: 30, bonus: "", penalidades: "[P] -10 para cada Personagem", tag: "", deck: "Branco", naipe: "Paus", numero: "J" },
    { nome: "Garrafa", tipo: "Item/Meme", pontos: 5, bonus: "Já sabe quem perdeu, né? :D", penalidades: "", tag: "Perdido", deck: "Branco", naipe: "Paus", numero: "K" },
    { nome: "Chaveiro Ofensivo", tipo: "Item/Meme", pontos: 15, bonus: "", penalidades: "[P] Anula PC/Richard", tag: "Presente", deck: "Branco", naipe: "Paus", numero: "Q" },
    { nome: "Herbalife", tipo: "Item/Meme", pontos: 5, bonus: "[B] +10 para cada Ana Pimentão, Clara Herculino, Prefeito Pimenta", penalidades: "", tag: "", deck: "Verde", naipe: "Paus", numero: "J" },
    { nome: "Pacote de Fralda", tipo: "Item/Meme", pontos: 10, bonus: "[B] +10 com Chá de Fraldas. [P] -5 para cada Personagem exceto Premium Care", penalidades: "", tag: "", deck: "Verde", naipe: "Paus", numero: "K" },
    { nome: "É tudo a mesma Coisa", tipo: "Item/Meme", pontos: 5, bonus: "[B] +10 para as duplas Ana Pimentão e Comprovadamente Perdida, Caixeta de Zócolo e Zócolo na Caixeta, Uivo da Varanda e Tô Em Todas,  Sósia do Caio e Amigo do Raul", penalidades: "", tag: "", deck: "Verde", naipe: "Paus", numero: "Q" },
    { nome: "Disney de Janeiro", tipo: "Local", pontos: 60, bonus: "[B] +10 se o jogador estiver de Chinelo ou Tomando Matte", penalidades: "", tag: "", deck: "Amarelo", naipe: "Copas", numero: "9" },
    { nome: "Nikiti na Panela", tipo: "Local", pontos: 60, bonus: "[B] +10 se o jogador estiver vendo um grande Corpo de Água ou o Corcovado", penalidades: "", tag: "", deck: "Branco", naipe: "Copas", numero: "9" },
    { nome: "Vix em Pó", tipo: "Local", pontos: 60, bonus: "[B] +10 se o jogador estiver comendo Caranguejo ou tiver Pó no pé/na roupa", penalidades: "", tag: "", deck: "Amarelo", naipe: "Espadas", numero: "10" },
    { nome: "Grande Nordeste", tipo: "Local", pontos: 60, bonus: "[B] +10 se o jogador estiver pegando Sol ou bebendo Água", penalidades: "", tag: "", deck: "Branco", naipe: "Espadas", numero: "10" },
    { nome: "MaCaribe", tipo: "Local", pontos: 60, bonus: "[B] +10 se o jogador estiver de Camiseta e pode ter até três Eventos", penalidades: "", tag: "", deck: "Verde", naipe: "Espadas", numero: "10" },
    { nome: "Itabompraí", tipo: "Local", pontos: 50, bonus: "[B] +20 se o jogador estiver de Bota ou com EPI Completo", penalidades: "", tag: "", deck: "Verde", naipe: "Ouros", numero: "10" },
    { nome: "Vereadora", tipo: "Personagem", pontos: 20, bonus: "[B] +5 com cada outro personagem. [P] -10 com qualquer Local, exceto Disney de Janeiro.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Copas", numero: "2" },
    { nome: "MagnâniMO", tipo: "Personagem", pontos: 20, bonus: "[B] +10 se o jogador fizer uma acrobacia. [P] -10 se o jogador chorar no futebol.", penalidades: "", tag: "Premium Care", deck: "Amarelo", naipe: "Copas", numero: "3" },
    { nome: "Rainha do Kahoot", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Kahoot. [P] -10 para cada Social", penalidades: "", tag: "", deck: "Amarelo", naipe: "Copas", numero: "4" },
    { nome: "Caô Amigo", tipo: "Personagem", pontos: 20, bonus: "[B] +15 com Amigo do Raul, +5 para cada Social. [P] -10 sem triplo R (Telepata de Ni + MãeCaé Tips)", penalidades: "", tag: "Premium Care", deck: "Amarelo", naipe: "Copas", numero: "5" },
    { nome: "História Sem Fim", tipo: "Personagem", pontos: 20, bonus: "[B] +80 com Procura Sem Fim. [P] -10 com menos de 3 Renans.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Copas", numero: "6" },
    { nome: "MãeCaé Tips", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com triplo R (Telepata de Ni + Caô Amigo). [P] -10 com qualquer Social.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Copas", numero: "7" },
    { nome: "Scheid Filho", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Kahoot e +15 para cada Filho. [P] -15 para cada Social", penalidades: "", tag: "", deck: "Amarelo", naipe: "Copas", numero: "8" },
    { nome: "Tia Clarisse", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Disney de Janeiro. [P] -10 com qualquer Social.", penalidades: "", tag: "", deck: "Branco", naipe: "Copas", numero: "2" },
    { nome: "Comprovadamente Perdida", tipo: "Personagem", pontos: 20, bonus: "[B] +30 se tiver os três Perdidos. [P] -10 com menos de três Perdidos.", penalidades: "", tag: "", deck: "Branco", naipe: "Copas", numero: "3" },
    { nome: "Milionário Disfarçado", tipo: "Personagem", pontos: 20, bonus: "[B] +50 com Contador de Moedas. [P] -10 com Segura, Peão!", penalidades: "", tag: "", deck: "Branco", naipe: "Copas", numero: "4" },
    { nome: "Bassani Sindical", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Dados Conflitantes. [P] -10 para cada Social, MaCaribe.", penalidades: "", tag: "", deck: "Branco", naipe: "Copas", numero: "5" },
    { nome: "Feliz Aniversário", tipo: "Personagem", pontos: 20, bonus: "[B] +10 para cada Bolo, Evento, MaCaribe, Check-list. [P] -10 com Pergunta sem Timing ou sem Social.", penalidades: "", tag: "", deck: "Branco", naipe: "Copas", numero: "6" },
    { nome: "Sósia do Caio", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Disney de Janeiro ou +5 com MaCaribe. [P] -10 com Café.", penalidades: "", tag: "", deck: "Branco", naipe: "Copas", numero: "7" },
    { nome: "Estratégia Cruel", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Vix em Pó. [P] -10 para cada Social.", penalidades: "", tag: "", deck: "Branco", naipe: "Copas", numero: "8" },
    { nome: "Tromps dos Magos", tipo: "Personagem", pontos: 20, bonus: "[B] +10 para cada Nikiti na Panela, outro Soninho. [P] -10 para cada Social", penalidades: "", tag: "Soninho", deck: "Verde", naipe: "Copas", numero: "2" },
    { nome: "Número Mágico", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Ordem de Grandeza. [P] -10 se o jogador não tentar um valor aproximado.", penalidades: "", tag: "", deck: "Verde", naipe: "Copas", numero: "3" },
    { nome: "Prefeito Pimenta", tipo: "Personagem", pontos: 20, bonus: "[B] +10 para cada Nikiti na Panela e Carona. [P] -10 para cada Social.", penalidades: "", tag: "", deck: "Verde", naipe: "Copas", numero: "4" },
    { nome: "Guitarra de Suprimentos", tipo: "Personagem", pontos: 20, bonus: "[B] +80 com PDV e +10 com General Trigus Aurelius. [P] -10 para cada Social.", penalidades: "", tag: "", deck: "Verde", naipe: "Copas", numero: "5" },
    { nome: "Joabe-se Quem Puder", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Lista de Presença. [P] -10 para cada Social.", penalidades: "", tag: "Premium Care", deck: "Verde", naipe: "Copas", numero: "6" },
    { nome: "Super Sincera", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Guitarra de Suprimentos. [P] -10 com cada Social.", penalidades: "", tag: "", deck: "Verde", naipe: "Copas", numero: "7" },
    { nome: "Vamos Marcar", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Pato Migratório. [P] -10 para cada Social.", penalidades: "", tag: "", deck: "Verde", naipe: "Copas", numero: "8" },
    { nome: "Colheita Feliz", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Pato Migratório e +5 para cada Shinobi Campista, PETagoga e Vereadora. [P] -10 com qualquer Social", penalidades: "", tag: "", deck: "Verde", naipe: "Copas", numero: "9" },
    { nome: "Raulzito", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com outro PetroBanda. [P] -10 com qualquer Social", penalidades: "", tag: "PetroBanda", deck: "Amarelo", naipe: "Espadas", numero: "2" },
    { nome: "Renan Preso", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Pergunta Sem Timing, +5 com Renan Livre Leve. [P] -10 com qualquer Social.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Espadas", numero: "3" },
    { nome: "Super Mario on IceCream", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com qualquer Não pode ser real, Calebito Vai dar Certo. [P] -10 com Wario.", penalidades: "", tag: "Premium Care", deck: "Amarelo", naipe: "Espadas", numero: "4" },
    { nome: "Telepata de Ni", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com triplo R (Caô Amigo + MãeCae Tips). [P] -10 com Rita Lee.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Espadas", numero: "5" },
    { nome: "Espião do PC", tipo: "Personagem", pontos: 20, bonus: "[B] +50 com Apresentação do Projeto. [P] -5 para cada outro Personagem.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Espadas", numero: "6" },
    { nome: "Bruce Weiner", tipo: "Personagem", pontos: 20, bonus: "[B] +50 com Alfred. [P] -10 sem Labrador.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Espadas", numero: "7" },
    { nome: "CaretaPool", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Cruelrine. [P] -10 com Pato Migratório", penalidades: "", tag: "", deck: "Amarelo", naipe: "Espadas", numero: "8" },
    { nome: "Série B", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Vix em Pó. [P] -10 para cada Social.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Espadas", numero: "9" },
    { nome: "Média de Ouro", tipo: "Personagem", pontos: 20, bonus: "[B] +10 para cada Curso de Formação, Nikiti na Panela. [P] -10 para cada Social.", penalidades: "", tag: "", deck: "Branco", naipe: "Espadas", numero: "2" },
    { nome: "Clara Herculino", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Nikiti na Panela. [P] -10 para cada Social, Enquete", penalidades: "", tag: "", deck: "Branco", naipe: "Espadas", numero: "3" },
    { nome: "Jorge Veludo", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Disney de Janeiro. [P] -10 para cada Social.", penalidades: "", tag: "Premium Care", deck: "Branco", naipe: "Espadas", numero: "4" },
    { nome: "Farmácia", tipo: "Personagem", pontos: 20, bonus: "[B] +5 para cada outro Personagem", penalidades: "", tag: "", deck: "Branco", naipe: "Espadas", numero: "5" },
    { nome: "Soneca Russa", tipo: "Personagem", pontos: 20, bonus: "[B] +10 para cada Disney de Janeiro, outro Soninho. [P] -10 com Pergunta Sem Timing.", penalidades: "", tag: "Soninho", deck: "Branco", naipe: "Espadas", numero: "6" },
    { nome: "Tô Em Todas", tipo: "Personagem", pontos: 20, bonus: "[B] +10 para qualquer Evento E Local. [P] -15 para Aplausos Constrangedores", penalidades: "", tag: "", deck: "Branco", naipe: "Espadas", numero: "7" },
    { nome: "Pai do Regato", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Camiseto. [P] -10 para cada Social.", penalidades: "", tag: "Premium Care", deck: "Branco", naipe: "Espadas", numero: "8" },
    { nome: "Praieira de Minas", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Vix em Pó e +10 com Série B. [P] -10 para cada Social.", penalidades: "", tag: "", deck: "Branco", naipe: "Espadas", numero: "9" },
    { nome: "Solução Caseira", tipo: "Personagem", pontos: 20, bonus: "[B] +10 para cada Aniversário do Anderson, Festa Anual. [P] -10 se tirar a barba.", penalidades: "", tag: "", deck: "Verde", naipe: "Espadas", numero: "2" },
    { nome: "Rei da Rifa", tipo: "Personagem", pontos: 20, bonus: "[B] +50 com Rifa e +10 com Curso de Formação. [P] -10 se tiver que repetir a explicação da matéria.", penalidades: "", tag: "", deck: "Verde", naipe: "Espadas", numero: "3" },
    { nome: "Aí Vem O Desespero", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Discussão Pós-prova. [P] -10 com cada Social, MaCaribe.", penalidades: "", tag: "", deck: "Verde", naipe: "Espadas", numero: "4" },
    { nome: "ServiceNat", tipo: "Personagem", pontos: 20, bonus: "[B] +5 para cada outro Personagem. [B] +10 com Nikiti na Panela. [P] -10 para cada Social.", penalidades: "", tag: "", deck: "Verde", naipe: "Espadas", numero: "5" },
    { nome: "Luiz de Lente", tipo: "Personagem", pontos: 20, bonus: "[B] +50 com Foto de Óculos. [P] -10 para cada Social.", penalidades: "", tag: "", deck: "Verde", naipe: "Espadas", numero: "6" },
    { nome: "Gasparzinho Sundown", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Filtro Solar. [P] -10 sem EPI completo.", penalidades: "", tag: "", deck: "Verde", naipe: "Espadas", numero: "7" },
    { nome: "Mari-RUN-a", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Disney de Janeiro. [P] -10 com qualquer Soninho.", penalidades: "", tag: "", deck: "Verde", naipe: "Espadas", numero: "8" },
    { nome: "Cruelrine", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com CaretaPool. [P] -10 com qualquer Soninho.", penalidades: "", tag: "", deck: "Verde", naipe: "Espadas", numero: "9" },
    { nome: "Gerente Feedback Jr", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Itabomprai. [P] -10 sem EPI completo.", penalidades: "", tag: "Premium Care", deck: "Amarelo", naipe: "Ouros", numero: "2" },
    { nome: "New Saulo", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Kit Churrasco. [P] -10 se precisar pegar Uber para cada Social.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Ouros", numero: "3" },
    { nome: "O Infiltrado", tipo: "Personagem", pontos: 20, bonus: "[B] +50 com Treinamento sem Convite. [P] -10 com Saco Preto.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Ouros", numero: "4" },
    { nome: "Camiseto", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com cada Pai do Regato, Feliz Aniversário. [P] -10 se jogador não estiver de Bermuda e/ou Regata.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Ouros", numero: "5" },
    { nome: "Renan Livre Leve", tipo: "Personagem", pontos: 20, bonus: "[B] +10 para cada Social, +5 com Renan Preso. [P] -10 com menos de 3 Renans.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Ouros", numero: "6" },
    { nome: "Engenheiro Jr Sênior", tipo: "Personagem", pontos: 20, bonus: "[B] +10 se for o Personagem mais \"antigo\" da mão. [P] -10 com Neymar Contundido.", penalidades: "", tag: "Premium Care", deck: "Amarelo", naipe: "Ouros", numero: "7" },
    { nome: "Caôpixaba Modelo", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Vix em Pó e +25 com Vix em Pó E MaCaribe. [P] -10 se o jogador não fizer \"A Pose\".", penalidades: "", tag: "", deck: "Amarelo", naipe: "Ouros", numero: "8" },
    { nome: "Meu nome não é Robison", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Presencial de Outra Cidade. [P] -10 se o jogador tiver nome composto.", penalidades: "", tag: "Premium Care", deck: "Amarelo", naipe: "Ouros", numero: "9" },
    { nome: "Toddynho", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Disney de Janeiro. [P] -10 com qualquer Soninho", penalidades: "", tag: "", deck: "Branco", naipe: "Ouros", numero: "2" },
    { nome: "Uivo da Varanda", tipo: "Personagem", pontos: 20, bonus: "[B] +10 para qualquer Social. [P] -10 com Curso de Formação.", penalidades: "", tag: "", deck: "Branco", naipe: "Ouros", numero: "3" },
    { nome: "Soneca Infinita", tipo: "Personagem", pontos: 20, bonus: "[B] +10 para cada Disney de Janeiro, outro Soninho. [P] -10 com Barrinha de Cereal.", penalidades: "", tag: "Soninho", deck: "Branco", naipe: "Ouros", numero: "4" },
    { nome: "Enquetes Everywhere", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Enquete e +5 com Cameraman. [P] -5 sem Mostra o RG.", penalidades: "", tag: "", deck: "Branco", naipe: "Ouros", numero: "5" },
    { nome: "Come Nada", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com CaretaPool. [P] -10 para cada Trigo, Alimento.", penalidades: "", tag: "", deck: "Branco", naipe: "Ouros", numero: "6" },
    { nome: "Ana Pimentão", tipo: "Personagem", pontos: 20, bonus: "[B] +5 para cada outro Personagem", penalidades: "", tag: "", deck: "Branco", naipe: "Ouros", numero: "7" },
    { nome: "Trompete Tímido", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Shinobi Campista. [P] -10 com MaCaribe.", penalidades: "", tag: "", deck: "Branco", naipe: "Ouros", numero: "8" },
    { nome: "Humorista Espião", tipo: "Personagem", pontos: 20, bonus: "[B] +10 para cada Nikiti na Panela, Aniversário do Anderson, Festa Anual. [P] -10 sem Nikiti na Panela", penalidades: "", tag: "Premium Care", deck: "Branco", naipe: "Ouros", numero: "9" },
    { nome: "Manager Face", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Presencial de Outra Cidade. [P] -10 se jogador não fizer \"Cara de Gerente\".", penalidades: "", tag: "Premium Care", deck: "Verde", naipe: "Ouros", numero: "2" },
    { nome: "Skin Care Maromba", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Grande Nordeste. [P] -10 se o jogador não treinou hoje.", penalidades: "", tag: "", deck: "Verde", naipe: "Ouros", numero: "3" },
    { nome: "A Quem Muitos Amaro", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Vix em Pó. [P] -10 se o jogador não estiver com qualquer objeto na cor roxa.", penalidades: "", tag: "Premium Care", deck: "Verde", naipe: "Ouros", numero: "4" },
    { nome: "Mostra o RG", tipo: "Personagem", pontos: 20, bonus: "[B] +5 com qualquer Enquetes Everywhere, Cameraman. [P] -5 sem Atrasilda.", penalidades: "", tag: "", deck: "Verde", naipe: "Ouros", numero: "5" },
    { nome: "Eu Sou A Lenda", tipo: "Personagem", pontos: 20, bonus: "[B] +15 com Comprovante. [P] -10 com Disney de Janeiro.", penalidades: "", tag: "", deck: "Verde", naipe: "Ouros", numero: "6" },
    { nome: "Segue o Link", tipo: "Personagem", pontos: 20, bonus: "[B] +5 para cada outro Personagem", penalidades: "", tag: "", deck: "Verde", naipe: "Ouros", numero: "7" },
    { nome: "Max Milhas", tipo: "Personagem", pontos: 20, bonus: "[B] +10 se o jogador cantar por ao menos 10s. [P] -10 se o jogador não voou/voar nos últimos/próximos 7 dias.", penalidades: "", tag: "", deck: "Verde", naipe: "Ouros", numero: "8" },
    { nome: "Atrasilda", tipo: "Personagem", pontos: 20, bonus: "[B]  +5 para cada Mostra o RG ou Enquetes Everywhere. [P] -10 sem Cameraman.", penalidades: "", tag: "", deck: "Verde", naipe: "Ouros", numero: "9" },
    { nome: "CarioCúcho", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Disney de Janeiro. [P] -10 se jogador estiver sem chinelo e sem chimarrão.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Paus", numero: "2" },
    { nome: "Olefinas", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Pato Migratório. [P] -10 com Itabompraí.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Paus", numero: "3" },
    { nome: "Tranquilo?", tipo: "Personagem", pontos: 20, bonus: "[B] +10 se o jogador não imitar o Personagem.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Paus", numero: "4" },
    { nome: "Esqueceram de Mim", tipo: "Personagem", pontos: 20, bonus: "[B] +10 se a carga do celular do jogador for >79%. [P] -10 se o jogador veio de ônibus de viagem.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Paus", numero: "5" },
    { nome: "Zócolo na Caixeta", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Piadas Devastadoras. [P] -10 com Perguntas sem Timing.", penalidades: "", tag: "Premium Care", deck: "Amarelo", naipe: "Paus", numero: "6" },
    { nome: "Jogador Colombiano", tipo: "Personagem", pontos: 20, bonus: "[B] +20 com Contusão no Joelho. [P] -10 se o jogador nunca assistiu à série Narcos.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Paus", numero: "7" },
    { nome: "Mochila de Alho", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Disney de Janeiro. [P] -10 com Mochila Petrobras.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Paus", numero: "8" },
    { nome: "Cameraman", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Atrasilda e +5 com Mostra o RG. [P] -10 sem Câmera Ligada.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Paus", numero: "9" },
    { nome: "Triplo Banho", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Grande Nordeste. [P] -10 com Café.", penalidades: "", tag: "", deck: "Branco", naipe: "Paus", numero: "2" },
    { nome: "Cachacinha", tipo: "Personagem", pontos: 20, bonus: "[B] +10 para cada Disney de Janeiro, outro Soninho. [P] -10 com Pergunta Sem Timing.", penalidades: "", tag: "Soninho", deck: "Branco", naipe: "Paus", numero: "3" },
    { nome: "Labrador", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Bruce Weiner. [P] -10 com qualquer Soninho.", penalidades: "", tag: "", deck: "Branco", naipe: "Paus", numero: "4" },
    { nome: "Bigode Sem Tempo", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Disney de Janeiro. [P] -10 com qualquer Social.", penalidades: "", tag: "", deck: "Branco", naipe: "Paus", numero: "5" },
    { nome: "Carioca do Brejo", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Disney de Janeiro ou +80 com Floripa. [P] -15 sem Café.", penalidades: "", tag: "", deck: "Branco", naipe: "Paus", numero: "6" },
    { nome: "Caixeta de Zócolo", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Piadas Devastadoras. [P] -10 com Perguntas sem Timing.", penalidades: "", tag: "", deck: "Branco", naipe: "Paus", numero: "7" },
    { nome: "Hermano Mullets", tipo: "Personagem", pontos: 20, bonus: "[B] +15 com Presencial de Outra Cidade. [P] -15 com Presencial", penalidades: "", tag: "", deck: "Branco", naipe: "Paus", numero: "8" },
    { nome: "Laboratórios Medley", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Grande Nordeste. [P] -10 com qualquer Social.", penalidades: "", tag: "", deck: "Branco", naipe: "Paus", numero: "9" },
    { nome: "Laboratórios Achè", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Laboratórios Medley. [P] -10 para cada Social.", penalidades: "", tag: "", deck: "Verde", naipe: "Paus", numero: "2" },
    { nome: "Ricardo Nervosinho", tipo: "Personagem", pontos: 20, bonus: "[B] +10 para cada Evento, MaCaribe. [P] -10 sem Social.", penalidades: "", tag: "Premium Care", deck: "Verde", naipe: "Paus", numero: "3" },
    { nome: "Doceira de Nikiti", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Nikiti na Panela. [P] -10 para cada Social.", penalidades: "", tag: "", deck: "Verde", naipe: "Paus", numero: "4" },
    { nome: "Mexido, Não Batido", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Nikiti na Panela. [P] -10 para cada Social.", penalidades: "", tag: "", deck: "Verde", naipe: "Paus", numero: "5" },
    { nome: "Shinobi Campista", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com outro Petrobanda. [P] -10 para cada Social", penalidades: "", tag: "Petrobanda", deck: "Verde", naipe: "Paus", numero: "6" },
    { nome: "General Trigus Aurelius", tipo: "Personagem", pontos: 20, bonus: "[B] +15 com Pão de Queijo e +5 com MaCaribe e Social. [P] -10 para cada Trigo.", penalidades: "", tag: "", deck: "Verde", naipe: "Paus", numero: "7" },
    { nome: "PETagoga", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Vereadora e +5 para cada Colheita Feliz, Shinobi Campista e PET. [P] -10 para cada Social", penalidades: "", tag: "", deck: "Verde", naipe: "Paus", numero: "8" },
    { nome: "Bibliotecário", tipo: "Personagem", pontos: 20, bonus: "[B] +50 com Biblioteca do EDIBH. [P] -10 com Resumo da Carol.", penalidades: "", tag: "", deck: "Verde", naipe: "Paus", numero: "9" }
];

const acoes = [
    { id: "chinelo-ou-matte", nome: "Estou de chinelo ou tomando Matte" },
    { id: "caranguejo-ou-po", nome: "Estou comendo caranguejo ou tenho pó no pé/na roupa" },
    { id: "sol-ou-agua", nome: "Estou pegando Sol ou bebendo Água" },
    { id: "camiseta", nome: "Estou de camiseta" },
    { id: "bota-ou-epi", nome: "Estou de Bota ou com EPI Completo" },
    { id: "fez-a-pose", nome: "Fiz 'A Pose'" },
    { id: "fez-acrobacia", nome: "Fiz uma acrobacia" },
    { id: "chorou-no-futebol", nome: "Chorei no futebol" },
    { id: "sem-imitar-personagem", nome: "Não imitei o Personagem" },
    { id: "carga-celular-alta", nome: "Carga do celular >79%" },
    { id: "veio-onibus-viagem", nome: "Vim de ônibus de viagem" },
    { id: "cantou-10s", nome: "Cantei por ao menos 10s" },
    { id: "nao-viajou-7dias", nome: "Não voei nos últimos/próximos 7 dias" },
    { id: "treinou-hoje", nome: "Treinei hoje" },
    { id: "objeto-roxo", nome: "Estou com um objeto na cor roxa" },
    { id: "tentou-valor-aproximado", nome: "Tentei um valor aproximado" },
    { id: "sem-chinelo-chimarrao", nome: "Estou sem chinelo e sem chimarrão" },
    { id: "nao-assistiu-narcos", nome: "Nunca assisti à série Narcos" },
    { id: "nao-estou-bermuda-regata", nome: "Não estou de Bermuda e/ou Regata" },
    { id: "nome-composto", nome: "Tenho nome composto" },
    { id: "nao-fez-cara-gerente", nome: "Não fiz 'Cara de Gerente'" },
    { id: "nao-treinou-hoje", nome: "Não treinei hoje" },
    { id: "sem-epi-completo", nome: "Estou sem EPI completo" },
    { id: "tirou-a-barba", nome: "Tirei a barba" },
    { id: "repetiu-explicacao", nome: "Tive que repetir a explicação da matéria" }
];


function normalizarNome(nome) {
    if (!nome) return '';
    return nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "");
}

function inicializarCalculadora() {
    const tipos = ["Coringa", "Personagem", "Item/Meme", "Evento", "Local"];
    const decks = ["Branco", "Amarelo", "Verde"];
    const container = document.getElementById('card-selection-container');

    for (let i = 1; i <= 7; i++) {
        const cardSelectionDiv = document.createElement('div');
        cardSelectionDiv.className = 'card-selection';
        
        const label = document.createElement('label');
        label.textContent = `Carta ${i}:`;
        cardSelectionDiv.appendChild(label);

        const typeSelect = document.createElement('select');
        typeSelect.id = `carta-${i}-tipo`;
        
        // Adiciona a opção "Selecione o tipo..."
        const defaultOption = document.createElement('option');
        defaultOption.value = "";
        defaultOption.textContent = "Selecione o tipo...";
        typeSelect.appendChild(defaultOption);

        tipos.forEach(tipo => {
            const option = document.createElement('option');
            option.value = tipo;
            option.textContent = tipo;
            typeSelect.appendChild(option);
        });
        cardSelectionDiv.appendChild(typeSelect);

        const deckSelect = document.createElement('select');
        deckSelect.id = `carta-${i}-deck`;
        deckSelect.disabled = true;
        cardSelectionDiv.appendChild(deckSelect);

        const cardSelect = document.createElement('select');
        cardSelect.id = `carta-${i}-nome`;
        cardSelect.disabled = true;
        cardSelectionDiv.appendChild(cardSelect);
        
        container.appendChild(cardSelectionDiv);

        // Adiciona event listeners para encadear os selects
        typeSelect.addEventListener('change', () => {
            popularDeckSelect(deckSelect, typeSelect.value);
            cardSelect.disabled = true;
            cardSelect.innerHTML = '<option value="">Selecione a carta...</option>';
        });
        
        deckSelect.addEventListener('change', () => {
            popularCardSelect(cardSelect, typeSelect.value, deckSelect.value);
        });
    }

    popularChecklistAcoes();
}


function popularDeckSelect(deckSelect, tipo) {
    const decks = ["Branco", "Amarelo", "Verde"];
    const cardsDoTipo = cartas.filter(c => c.tipo === tipo);
    const decksDisponiveis = [...new Set(cardsDoTipo.map(c => c.deck))];
    
    deckSelect.innerHTML = '<option value="">Selecione o deck...</option>';
    decksDisponiveis.forEach(deck => {
        const option = document.createElement('option');
        option.value = deck;
        option.textContent = deck;
        deckSelect.appendChild(option);
    });

    deckSelect.disabled = false;
}

function popularCardSelect(cardSelect, tipo, deck) {
    const cardsDoDeck = cartas.filter(c => c.tipo === tipo && c.deck === deck);
    
    cardSelect.innerHTML = '<option value="">Selecione a carta...</option>';
    cardsDoDeck.forEach(carta => {
        const option = document.createElement('option');
        option.value = normalizarNome(carta.nome);
        option.textContent = carta.nome;
        cardSelect.appendChild(option);
    });

    cardSelect.disabled = false;
}


function popularChecklistAcoes() {
    const checklistDiv = document.getElementById('acoes-jogador-checklist');
    acoes.forEach(acao => {
        const div = document.createElement('div');
        const input = document.createElement('input');
        input.type = "checkbox";
        input.id = acao.id;
        input.dataset.acao = acao.nome;
        const label = document.createElement('label');
        label.htmlFor = acao.id;
        label.textContent = acao.nome;
        div.appendChild(input);
        div.appendChild(label);
        checklistDiv.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    inicializarCalculadora();
});

function calcularPontuacao() {
    const nomesCartasNaMao = [];
    const nomesCartasNaMaoNorm = [];
    
    for (let i = 1; i <= 7; i++) {
        const cardSelect = document.getElementById(`carta-${i}-nome`);
        if (cardSelect && cardSelect.value) {
            nomesCartasNaMao.push(cardSelect.options[cardSelect.selectedIndex].text);
            nomesCartasNaMaoNorm.push(cardSelect.value);
        }
    }
    
    const resultadoDiv = document.getElementById('resultado');
    if (nomesCartasNaMao.length === 0) {
        resultadoDiv.innerHTML = "Por favor, selecione pelo menos uma carta.";
        return;
    }

    const unicos = new Set(nomesCartasNaMaoNorm);
    if (unicos.size !== nomesCartasNaMaoNorm.length) {
        resultadoDiv.innerHTML = "Mão inválida. Cartas duplicadas não são permitidas.";
        return;
    }

    const cartasNaMao = nomesCartasNaMaoNorm.map(nome => cartas.find(c => normalizarNome(c.nome) === nome));
    
    let pontuacaoBase = 0;
    let pontuacaoBonus = 0;
    let pontuacaoPenalidade = 0;
    let detalhesBonus = [];
    let detalhesPenalidades = [];

    const tipos = cartasNaMao.map(c => c.tipo);
    const tags = cartasNaMao.flatMap(c => c.tag ? c.tag.split(',').map(t => t.trim()) : []);

    const contagemTipo = tipos.reduce((acc, tipo) => {
        acc[tipo] = (acc[tipo] || 0) + 1;
        return acc;
    }, {});
    const contagemTag = tags.reduce((acc, tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
        return acc;
    }, {});
    
    const acoesExternas = Array.from(document.querySelectorAll('#acoes-jogador-checklist input[type="checkbox"]:checked')).map(checkbox => checkbox.dataset.acao.toLowerCase());

    // Regras Especiais para Cartas Extras
    let cartaExtraItem = null;
    let cartaExtraPersonagem = null;

    if (nomesCartasNaMaoNorm.includes("mochila petrobras")) {
        const extraItemSelect = document.getElementById('extra-item-select');
        const extraItemNome = extraItemSelect.options[extraItemSelect.selectedIndex].text;
        if (extraItemNome) {
            cartaExtraItem = cartas.find(c => normalizarNome(c.nome) === normalizarNome(extraItemNome));
            if (cartaExtraItem) {
                pontuacaoBase += cartaExtraItem.pontos;
                detalhesBonus.push(`+${cartaExtraItem.pontos} (Mochila Petrobras - Carta extra: ${cartaExtraItem.nome})`);
            }
        }
    }

    if (nomesCartasNaMaoNorm.includes("t5 honorario")) {
        const extraPersonagemSelect = document.getElementById('extra-personagem-select');
        const extraPersonagemNome = extraPersonagemSelect.options[extraPersonagemSelect.selectedIndex].text;
        if (extraPersonagemNome) {
            cartaExtraPersonagem = cartas.find(c => normalizarNome(c.nome) === normalizarNome(extraPersonagemNome));
            if (cartaExtraPersonagem) {
                pontuacaoBase += cartaExtraPersonagem.pontos;
                detalhesBonus.push(`+${cartaExtraPersonagem.pontos} (T5 Honorário - Carta extra: ${cartaExtraPersonagem.nome})`);
            }
        }
    }


    // Lógica principal de cálculo
    cartasNaMao.forEach(carta => {
        pontuacaoBase += carta.pontos;

        // Lógica de Bônus e Penalidades (mantida e corrigida)
        // Por exemplo, a lógica para "Caôpixaba Modelo"
        if (normalizarNome(carta.nome) === "caôpixaba modelo") {
            if (nomesCartasNaMaoNorm.includes("vix em pó")) {
                if (nomesCartasNaMaoNorm.includes("macaribe")) {
                    pontuacaoBonus += 35;
                    detalhesBonus.push("+35 (Caôpixaba Modelo + Vix em Pó + MaCaribe)");
                } else {
                    pontuacaoBonus += 10;
                    detalhesBonus.push("+10 (Caôpixaba Modelo + Vix em Pó)");
                }
            }
            if (!acoesExternas.includes("fez a pose")) {
                pontuacaoPenalidade -= 10;
                detalhesPenalidades.push("-10 (Caôpixaba Modelo sem a pose)");
            }
        }
        // ... (Adicionar as lógicas para todas as outras cartas aqui)
    });
    
    // ... Lógica de penalidades e bônus que dependem do conjunto de cartas (count, etc)
    
    // Exibição dos resultados
    let resultadoHTML = "<h2>Resultados</h2>";
    resultadoHTML += "Mão válida. Calculando...<br><br>";

    resultadoHTML += "<h3>Pontuação por Cartas</h3>";
    cartasNaMao.forEach(carta => {
        resultadoHTML += `<strong>${carta.nome}</strong>: ${carta.pontos} pontos base.<br>`;
    });
    
    if (cartaExtraItem) {
        resultadoHTML += `<strong>${cartaExtraItem.nome}</strong>: ${cartaExtraItem.pontos} pontos (Carta Extra).<br>`;
    }
    if (cartaExtraPersonagem) {
        resultadoHTML += `<strong>${cartaExtraPersonagem.nome}</strong>: ${cartaExtraPersonagem.pontos} pontos (Carta Extra).<br>`;
    }

    resultadoHTML += `<hr>Pontuação Base: ${pontuacaoBase}<br>`;

    if (detalhesBonus.length > 0) {
        const totalBonus = detalhesBonus.reduce((sum, item) => sum + parseInt(item.match(/[-+]?\d+/)[0]), 0);
        resultadoHTML += `Total de Bônus: ${totalBonus} (${detalhesBonus.join('; ')}).<br>`;
    } else {
        resultadoHTML += `Total de Bônus: 0<br>`;
    }

    if (detalhesPenalidades.length > 0) {
        const totalPenalidades = detalhesPenalidades.reduce((sum, item) => sum + parseInt(item.match(/[-+]?\d+/)[0]), 0);
        resultadoHTML += `Total de Penalidades: ${totalPenalidades} (${detalhesPenalidades.join('; ')}).<br>`;
    } else {
        resultadoHTML += `Total de Penalidades: 0<br>`;
    }

    const pontuacaoTotal = pontuacaoBase + pontuacaoBonus + pontuacaoPenalidade;
    resultadoHTML += `<br>Pontuação Total: <strong>${pontuacaoTotal} pontos</strong>`;

    document.getElementById('resultado').innerHTML = resultadoHTML;
}

// Inicializa a calculadora ao carregar a página
inicializarCalculadora();
