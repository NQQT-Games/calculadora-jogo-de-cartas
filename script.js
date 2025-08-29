// Tabela de Cartas e Pontuações - Tabela completa, fornecida pelo usuário.

const cartas = [
    { nome: "Presencial de Outra Cidade", figura: "", tipo: "Coringa", pontos: 0, bonus: "[B] Considere até dois Locais como apenas um", penalidades: "", tag: "", deck: "Amarelo", naipe: "Copas", numero: "A" },
    { nome: "Mochila Petrobras", figura: "", tipo: "Coringa", pontos: 0, bonus: "[B] Ao fim do jogo, pegue até um Item (carta extra) da área de descarte", penalidades: "[P] -25 com Disney de Janeiro", tag: "", deck: "Branco", naipe: "Copas", numero: "A" },
    { nome: "PC/Richard", figura: "", tipo: "Coringa", pontos: 0, bonus: "[B] Elimina todas as penalidades se tiver Curso de Formação", penalidades: "", tag: "", deck: "Verde", naipe: "Copas", numero: "A" },
    { nome: "Nível", figura: "", tipo: "Coringa", pontos: 0, bonus: "[B] +10 para cada Vix em Pó e Festa Anual. [P] Anulada com Curso de Formação.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Espadas", numero: "A" },
    { nome: "Não pode ser real", figura: "", tipo: "Coringa", pontos: 0, bonus: "[B] Anula uma penalidade", penalidades: "", tag: "", deck: "Amarelo", naipe: "Ouros", numero: "A" },
    { nome: "T5 Honorário", figura: "", tipo: "Coringa", pontos: 0, bonus: "[B] Ao fim do jogo, pegue até um Personagem (carta extra) da área de descarte", penalidades: "", tag: "", deck: "Branco", naipe: "Ouros", numero: "A" },
    { nome: "Carona", figura: "", tipo: "Coringa", pontos: 0, bonus: "[B] Você pode ter até cinco Personagens", penalidades: "", tag: "", deck: "Verde", naipe: "Ouros", numero: "A" },
    { nome: "Lista de Presença", figura: "", tipo: "Coringa", pontos: 0, bonus: "[B] Você pode ter até seis Personagens", penalidades: "", tag: "", deck: "Amarelo", naipe: "Paus", numero: "A" },
    { nome: "Amigo do Raul", figura: "", tipo: "Coringa", pontos: 0, bonus: "[B] Pode duplicar qualquer Personagem do jogo. Não afeta bônus, penalidade e força básica da carta copiada.", penalidades: "", tag: "", deck: "Branco", naipe: "Paus", numero: "A" },
    { nome: "Modelo Híbrido", figura: "", tipo: "Coringa", pontos: 0, bonus: "[B] Considere Presencial e Home-Office como apenas um Evento", penalidades: "", tag: "", deck: "Verde", naipe: "Paus", numero: "A" },
    { nome: "CURSO DE FORMAÇÃO", figura: "", tipo: "Evento", pontos: 40, bonus: "[B] +10 com Disney de Janeiro OU PC/Richard OU Lista de Presença", penalidades: "", tag: "", deck: "Amarelo", naipe: "Copas", numero: "10" },
    { nome: "CHÁ DE FRALDAS", figura: "", tipo: "Evento", pontos: 40, bonus: "", penalidades: "[P] -10 sem Pacote de Fraldas. [P] Anulada sem Premium Care", tag: "", deck: "Branco", naipe: "Copas", numero: "10" },
    { nome: "VISITA TÉCNICA", figura: "", tipo: "Evento", pontos: 40, bonus: "", penalidades: "[P] -10 a menos que tenha EPI Completo", tag: "", deck: "Verde", naipe: "Copas", numero: "10" },
    { nome: "FESTA ANUAL", figura: "", tipo: "Evento", pontos: 40, bonus: "[B] +10 com qualquer Local ou com T5 Honorário", penalidades: "", tag: "Social", deck: "Branco", naipe: "Espadas", numero: "A" },
    { nome: "ALMOÇÃO", figura: "", tipo: "Evento", pontos: 40, bonus: "[B] +20 com MaCaribe", penalidades: "", tag: "Social", deck: "Verde", naipe: "Espadas", numero: "A" },
    { nome: "INVADE HOUSE", figura: "", tipo: "Evento", pontos: 40, bonus: "[B] +20 com MaCaribe", penalidades: "", tag: "Social", deck: "Amarelo", naipe: "Ouros", numero: "10" },
    { nome: "COFFEE DA CAROL", figura: "", tipo: "Evento", pontos: 40, bonus: "[B] +15 para cada Comprovadamente Perdida e Chá de Fraldas. [P] -15 sem Café", penalidades: "", tag: "", deck: "Branco", naipe: "Ouros", numero: "10" },
    { nome: "ANIVERSÁRIO DO ANDERSON", figura: "", tipo: "Evento", pontos: 40, bonus: "[B] Não conta como um Evento", penalidades: "", tag: "", deck: "Amarelo", naipe: "Paus", numero: "10" },
    { nome: "PRESENCIAL", figura: "", tipo: "Evento", pontos: 40, bonus: "", penalidades: "[P] -10 com Pato Migratório", tag: "", deck: "Branco", naipe: "Paus", numero: "10" },
    { nome: "HOME-OFFICE", figura: "", tipo: "Evento", pontos: 40, bonus: "", penalidades: "[P] -10 com Pato Migratório", tag: "", deck: "Verde", naipe: "Paus", numero: "10" },
    { nome: "Carregador de Notebook", figura: "", tipo: "Item/Meme", pontos: 5, bonus: "Já sabe quem perdeu, né? :D", penalidades: "", tag: "Perdido", deck: "Amarelo", naipe: "Copas", numero: "J" },
    { nome: "Aplausos Constrangedores", figura: "", tipo: "Item/Meme", pontos: 5, bonus: "[B] +5 para cada Personagem, Aniversário do Anderson, Curso de Formação", penalidades: "", tag: "", deck: "Amarelo", naipe: "Copas", numero: "K" },
    { nome: "Comprovante", figura: "", tipo: "Item/Meme", pontos: 5, bonus: "Só 2 pessoas recebem ;)", penalidades: "", tag: "Perdido", deck: "Amarelo", naipe: "Copas", numero: "Q" },
    { nome: "Contusão no Joelho", figura: "", tipo: "Item/Meme", pontos: 10, bonus: "", penalidades: "[P] Anula um Personagem exceto Joabe-se quem Puder", tag: "", deck: "Branco", naipe: "Copas", numero: "J" },
    { nome: "Calebito Vai dar Certo", figura: "", tipo: "Item/Meme", pontos: 5, bonus: "[B] +5 para cada Personagem. [P] -10 para cada Ana Pimentão e Farmácia", penalidades: "", tag: "", deck: "Branco", naipe: "Copas", numero: "K" },
    { nome: "BassaNews", figura: "", tipo: "Item/Meme", pontos: 5, bonus: "[B] +10 com Bassani Sindical. [P] -15 se hoje é sexta-feira.", penalidades: "", tag: "", deck: "Branco", naipe: "Copas", numero: "Q" },
    { nome: "Feedback", figura: "", tipo: "Item/Meme", pontos: 20, bonus: "", penalidades: "[P] -5 para cada Personagem, exceto Gerente Feedback Jr", tag: "", deck: "Verde", naipe: "Copas", numero: "J" },
    { nome: "Kit Churrasco", figura: "", tipo: "Item/Meme", pontos: 5, bonus: "[B] +10 para cada Invade House, Aniversário do Anderson, Festa Anual", penalidades: "", tag: "Alimento", deck: "Verde", naipe: "Copas", numero: "K" },
    { nome: "Dados Conflitantes", figura: "", tipo: "Item/Meme", pontos: 5, bonus: "", penalidades: "[P] -10 com Curso de Formação ou Aniversário do Anderson", tag: "", deck: "Verde", naipe: "Copas", numero: "Q" },
    { nome: "Não se preocupe com prova", figura: "", tipo: "Item/Meme", pontos: 10, bonus: "", penalidades: "[P] -5 para cada Personagem se tiver Curso de Formação", tag: "", deck: "Amarelo", naipe: "Espadas", numero: "J" },
    { nome: "Segura, Peão!", figura: "", tipo: "Item/Meme", pontos: 14, bonus: "[B] +63 com MaCaribe ou +53 com Vix em Pó ou +43 com Grande Nordeste", penalidades: "", tag: "", deck: "Amarelo", naipe: "Espadas", numero: "K" },
    { nome: "Pão de Queijo", figura: "", tipo: "Item/Meme", pontos: 5, bonus: "[B] +5 para cada Evento", penalidades: "", tag: "Alimento", deck: "Amarelo", naipe: "Espadas", numero: "Q" },
    { nome: "Pato Migratório", figura: "", tipo: "Item/Meme", pontos: 15, bonus: "[B] +10 com cada Invade House, Aniversário do Anderson, Almoção, Festa Anual.", penalidades: "", tag: "", deck: "Branco", naipe: "Espadas", numero: "J" },
    { nome: "Ordem de Grandeza", figura: "", tipo: "Item/Meme", pontos: 5, bonus: "[B] +10 com Número Mágico", penalidades: "", tag: "", deck: "Branco", naipe: "Espadas", numero: "K" },
    { nome: "Resumo da Carol", figura: "", tipo: "Item/Meme", pontos: 5, bonus: "[B] +10 para cada Personagem se tiver Curso de Formação", penalidades: "", tag: "", deck: "Branco", naipe: "Espadas", numero: "Q" },
    { nome: "Bolo de Aniversário", figura: "", tipo: "Item/Meme", pontos: 5, bonus: "[B] +10 com qualquer Evento exceto Curso de Formação, Presencial e Home-Office", penalidades: "", tag: "Trigo", deck: "Verde", naipe: "Espadas", numero: "J" },
    { nome: "Check-list", figura: "", tipo: "Item/Meme", pontos: 5, bonus: "[B] +5 para cada Aniversário do Anderson, Curso de Formação, Home-Office, Presencial", penalidades: "", tag: "", deck: "Verde", naipe: "Espadas", numero: "K" },
    { nome: "Câmera Ligada", figura: "", tipo: "Item/Meme", pontos: 20, bonus: "", penalidades: "[P] -5 para cada Personagem, exceto Cameraman", tag: "", deck: "Verde", naipe: "Espadas", numero: "Q" },
    { nome: "Day Use", figura: "", tipo: "Item/Meme", pontos: 5, bonus: "", penalidades: "[P] -5 para cada Personagem exceto Segue o Link e Ana Pimentão", tag: "Presente", deck: "Amarelo", naipe: "Ouros", numero: "J" },
    { nome: "Piada Devastadora", figura: "", tipo: "Item/Meme", pontos: 5, bonus: "[B] +25 para cada Evento", penalidades: "", tag: "", deck: "Amarelo", naipe: "Ouros", numero: "K" },
    { nome: "Filtro Solar", figura: "", tipo: "Item/Meme", pontos: 5, bonus: "[B] +10 Gasparzinho Sundown", penalidades: "", tag: "", deck: "Amarelo", naipe: "Ouros", numero: "Q" },
    { nome: "EPI Completo", figura: "", tipo: "Item/Meme", pontos: 5, bonus: "", penalidades: "[P] -25 com Pergunta Sem Timing", tag: "", deck: "Branco", naipe: "Ouros", numero: "J" },
    { nome: "Strip no Jet de Swap", figura: "", tipo: "Item/Meme", pontos: 30, bonus: "", penalidades: "[P] -5 para cada Personagem", tag: "", deck: "Branco", naipe: "Ouros", numero: "K" },
    { nome: "Kahoot", figura: "", tipo: "Item/Meme", pontos: 5, bonus: "[B] +10 com qualquer Personagem", penalidades: "", tag: "", deck: "Branco", naipe: "Ouros", numero: "Q" },
    { nome: "Saco Preto", figura: "", tipo: "Item/Meme", pontos: 30, bonus: "", penalidades: "[P] -5 para cada Personagem e -25 com Itabompraí.", tag: "", deck: "Verde", naipe: "Ouros", numero: "J" },
    { nome: "Pergunta Sem Timing", figura: "", tipo: "Item/Meme", pontos: 5, bonus: "", penalidades: "[P] -15 para cada Curso de Formação", tag: "", deck: "Verde", naipe: "Ouros", numero: "K" },
    { nome: "Tava Embarcado?", figura: "", tipo: "Item/Meme", pontos: 30, bonus: "", penalidades: "[P] -5 para cada Personagem", tag: "", deck: "Verde", naipe: "Ouros", numero: "Q" },
    { nome: "Jaqueta no Verão", figura: "", tipo: "Item/Meme", pontos: 5, bonus: "[B]  +10 com PC/Richard", penalidades: "", tag: "Presente", deck: "Amarelo", naipe: "Paus", numero: "J" },
    { nome: "Enquete", figura: "", tipo: "Item/Meme", pontos: 25, bonus: "", penalidades: "[P] -10 para cada Evento e -5 para cada Presente", tag: "", deck: "Amarelo", naipe: "Paus", numero: "K" },
    { nome: "Café", figura: "", tipo: "Item/Meme", pontos: 5, bonus: "[B] +10 com Coffee da Carol ou Curso de Formação ou Presencial ou Aniversário do Anderson", penalidades: "", tag: "", deck: "Amarelo", naipe: "Paus", numero: "Q" },
    { nome: "Discussão Pós-prova", figura: "", tipo: "Item/Meme", pontos: 30, bonus: "", penalidades: "[P] -10 para cada Personagem", tag: "", deck: "Branco", naipe: "Paus", numero: "J" },
    { nome: "Garrafa", figura: "", tipo: "Item/Meme", pontos: 5, bonus: "Já sabe quem perdeu, né? :D", penalidades: "", tag: "Perdido", deck: "Branco", naipe: "Paus", numero: "K" },
    { nome: "Chaveiro Ofensivo", figura: "", tipo: "Item/Meme", pontos: 15, bonus: "", penalidades: "[P] Anula PC/Richard", tag: "Presente", deck: "Branco", naipe: "Paus", numero: "Q" },
    { nome: "Herbalife", figura: "", tipo: "Item/Meme", pontos: 5, bonus: "[B] +10 para cada Ana Pimentão, Clara Herculino, Prefeito Pimenta", penalidades: "", tag: "", deck: "Verde", naipe: "Paus", numero: "J" },
    { nome: "Pacote de Fralda", figura: "", tipo: "Item/Meme", pontos: 10, bonus: "[B] +10 com Chá de Fraldas. [P] -5 para cada Personagem exceto Premium Care", penalidades: "", tag: "", deck: "Verde", naipe: "Paus", numero: "K" },
    { nome: "É tudo a mesma Coisa", figura: "", tipo: "Item/Meme", pontos: 5, bonus: "[B] +10 para as duplas Ana Pimentão e Comprovadamente Perdida, Caixeta de Zócolo e Zócolo na Caixeta, Uivo da Varanda e Tô Em Todas,  Sósia do Caio e Amigo do Raul", penalidades: "", tag: "", deck: "Verde", naipe: "Paus", numero: "Q" },
    { nome: "Disney de Janeiro", figura: "", tipo: "Local", pontos: 60, bonus: "[B] +10 se o jogador estiver de Chinelo ou Tomando Matte", penalidades: "", tag: "", deck: "Amarelo", naipe: "Copas", numero: "9" },
    { nome: "Nikiti na Panela", figura: "", tipo: "Local", pontos: 60, bonus: "[B] +10 se o jogador estiver vendo um grande Corpo de Água ou o Corcovado", penalidades: "", tag: "", deck: "Branco", naipe: "Copas", numero: "9" },
    { nome: "Vix em Pó", figura: "", tipo: "Local", pontos: 60, bonus: "[B] +10 se o jogador estiver comendo Caranguejo ou tiver Pó no pé/na roupa", penalidades: "", tag: "", deck: "Amarelo", naipe: "Espadas", numero: "10" },
    { nome: "Grande Nordeste", figura: "", tipo: "Local", pontos: 60, bonus: "[B] +10 se o jogador estiver pegando Sol ou bebendo Água", penalidades: "", tag: "", deck: "Branco", naipe: "Espadas", numero: "10" },
    { nome: "MaCaribe", figura: "", tipo: "Local", pontos: 60, bonus: "[B] +10 se o jogador estiver de Camiseta e pode ter até três Eventos", penalidades: "", tag: "", deck: "Verde", naipe: "Espadas", numero: "10" },
    { nome: "Itabompraí", figura: "", tipo: "Local", pontos: 50, bonus: "[B] +20 se o jogador estiver de Bota ou com EPI Completo", penalidades: "", tag: "", deck: "Verde", naipe: "Ouros", numero: "10" },
    { nome: "Vereadora", figura: "Tainan de Farias Nogueira", tipo: "Personagem", pontos: 20, bonus: "[B] +5 com cada outro personagem. [P] -10 com qualquer Local, exceto Disney de Janeiro.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Copas", numero: "2" },
    { nome: "MagnâniMO", figura: "Thiago Muniz Magnani", tipo: "Personagem", pontos: 20, bonus: "[B] +10 se o jogador fizer uma acrobacia. [P] -10 se o jogador chorar no futebol.", penalidades: "", tag: "Premium Care", deck: "Amarelo", naipe: "Copas", numero: "3" },
    { nome: "Rainha do Kahoot", figura: "Nathalia Tavares da Gama Lima", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Kahoot. [P] -10 para cada Social", penalidades: "", tag: "", deck: "Amarelo", naipe: "Copas", numero: "4" },
    { nome: "Caô Amigo", figura: "Raul Victor Azevedo Barrozo do Couto", tipo: "Personagem", pontos: 20, bonus: "[B] +15 com Amigo do Raul, +5 para cada Social. [P] -10 sem triplo R (Telepata de Ni + MãeCaé Tips)", penalidades: "", tag: "Premium Care", deck: "Amarelo", naipe: "Copas", numero: "5" },
    { nome: "História Sem Fim", figura: "Renan Puebla de Souza", tipo: "Personagem", pontos: 20, bonus: "[B] +80 com Procura Sem Fim. [P] -10 com menos de 3 Renans.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Copas", numero: "6" },
    { nome: "MãeCaé Tips", figura: "Renata Tavares Dantas Neves", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com triplo R (Telepata de Ni + Caô Amigo). [P] -10 com qualquer Social.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Copas", numero: "7" },
    { nome: "Scheid Filho", figura: "Ricardo di Lucia Santos", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Kahoot e +15 para cada Filho. [P] -15 para cada Social", penalidades: "", tag: "", deck: "Amarelo", naipe: "Copas", numero: "8" },
    { nome: "Tia Clarisse", figura: "Clarisse Gaia Edais Pepe", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Disney de Janeiro. [P] -10 com qualquer Social.", penalidades: "", tag: "", deck: "Branco", naipe: "Copas", numero: "2" },
    { nome: "Comprovadamente Perdida", figura: "Carolina Martins Ribeiro", tipo: "Personagem", pontos: 20, bonus: "[B] +30 se tiver os três Perdidos. [P] -10 com menos de três Perdidos.", penalidades: "", tag: "", deck: "Branco", naipe: "Copas", numero: "3" },
    { nome: "Milionário Disfarçado", figura: "Filipe Machado Fontes", tipo: "Personagem", pontos: 20, bonus: "[B] +50 com Contador de Moedas. [P] -10 com Segura, Peão!", penalidades: "", tag: "", deck: "Branco", naipe: "Copas", numero: "4" },
    { nome: "Bassani Sindical", figura: "Bruno Bassani Barreto", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Dados Conflitantes. [P] -10 para cada Social, MaCaribe.", penalidades: "", tag: "", deck: "Branco", naipe: "Copas", numero: "5" },
    { nome: "Feliz Aniversário", figura: "Anderson Soares da Costa", tipo: "Personagem", pontos: 20, bonus: "[B] +10 para cada Bolo, Evento, MaCaribe, Check-list. [P] -10 com Pergunta sem Timing ou sem Social.", penalidades: "", tag: "", deck: "Branco", naipe: "Copas", numero: "6" },
    { nome: "Sósia do Caio", figura: "Caio Mateus Porto Siqueira", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Disney de Janeiro ou +5 com MaCaribe. [P] -10 com Café.", penalidades: "", tag: "", deck: "Branco", naipe: "Copas", numero: "7" },
    { nome: "Estratégia Cruel", figura: "Augusto Cesar Klassen Amorim Alves de Lima", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Vix em Pó. [P] -10 para cada Social.", penalidades: "", tag: "", deck: "Branco", naipe: "Copas", numero: "8" },
    { nome: "Tromps dos Magos", figura: "Andre do Carmo Viceconte Trompieri", tipo: "Personagem", pontos: 20, bonus: "[B] +10 para cada Nikiti na Panela, outro Soninho. [P] -10 para cada Social", penalidades: "", tag: "Soninho", deck: "Verde", naipe: "Copas", numero: "2" },
    { nome: "Número Mágico", figura: "Igor Quintanilha Camillo", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Ordem de Grandeza. [P] -10 se o jogador não tentar um valor aproximado.", penalidades: "", tag: "", deck: "Verde", naipe: "Copas", numero: "3" },
    { nome: "Prefeito Pimenta", figura: "Lucas de Barros Pimenta", tipo: "Personagem", pontos: 20, bonus: "[B] +10 para cada Nikiti na Panela e Carona. [P] -10 para cada Social.", penalidades: "", tag: "", deck: "Verde", naipe: "Copas", numero: "4" },
    { nome: "Guitarra de Suprimentos", figura: "Lucas Gianinni Ramos da Rin", tipo: "Personagem", pontos: 20, bonus: "[B] +80 com PDV e +10 com General Trigus Aurelius. [P] -10 para cada Social.", penalidades: "", tag: "", deck: "Verde", naipe: "Copas", numero: "5" },
    { nome: "Joabe-se Quem Puder", figura: "Joabe Salles do Nascimento", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Lista de Presença. [P] -10 para cada Social.", penalidades: "", tag: "Premium Care", deck: "Verde", naipe: "Copas", numero: "6" },
    { nome: "Super Sincera", figura: "Juliana Damaris Candido", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Guitarra de Suprimentos. [P] -10 com cada Social.", penalidades: "", tag: "", deck: "Verde", naipe: "Copas", numero: "7" },
    { nome: "Vamos Marcar", figura: "Leonardo de Paula Camargo", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Pato Migratório. [P] -10 para cada Social.", penalidades: "", tag: "", deck: "Verde", naipe: "Copas", numero: "8" },
    { nome: "Colheita Feliz", figura: "Louise Carrullo Pumar", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Pato Migratório e +5 para cada Shinobi Campista, PETagoga e Vereadora. [P] -10 com qualquer Social", penalidades: "", tag: "", deck: "Verde", naipe: "Copas", numero: "9" },
    { nome: "Raulzito", figura: "Raul Nascimento Rosa da Costa", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com outro PetroBanda. [P] -10 com qualquer Social", penalidades: "", tag: "PetroBanda", deck: "Amarelo", naipe: "Espadas", numero: "2" },
    { nome: "Renan Preso", figura: "Renan Moreira Schneider", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Pergunta Sem Timing, +5 com Renan Livre Leve. [P] -10 com qualquer Social.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Espadas", numero: "3" },
    { nome: "Super Mario on IceCream", figura: "Rodrigo Cristiano Pires", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com qualquer Não pode ser real, Calebito Vai dar Certo. [P] -10 com Wario.", penalidades: "", tag: "Premium Care", deck: "Amarelo", naipe: "Espadas", numero: "4" },
    { nome: "Telepata de Ni", figura: "Ruan Carlos Alves Pereira", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com triplo R (Caô Amigo + MãeCae Tips). [P] -10 com Rita Lee.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Espadas", numero: "5" },
    { nome: "Espião do PC", figura: "Vinicius Braga Rodrigues da Silva", tipo: "Personagem", pontos: 20, bonus: "[B] +50 com Apresentação do Projeto. [P] -5 para cada outro Personagem.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Espadas", numero: "6" },
    { nome: "Bruce Weiner", figura: "Weiner Mendonca Nobre Lima", tipo: "Personagem", pontos: 20, bonus: "[B] +50 com Alfred. [P] -10 sem Labrador.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Espadas", numero: "7" },
    { nome: "CaretaPool", figura: "Yuri Meireles Laia", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Cruelrine. [P] -10 com Pato Migratório", penalidades: "", tag: "", deck: "Amarelo", naipe: "Espadas", numero: "8" },
    { nome: "Série B", figura: "Marina Gusmao de Oliveira", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Vix em Pó. [P] -10 para cada Social.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Espadas", numero: "9" },
    { nome: "Média de Ouro", figura: "Alisson Lima Santos", tipo: "Personagem", pontos: 20, bonus: "[B] +10 para cada Curso de Formação, Nikiti na Panela. [P] -10 para cada Social.", penalidades: "", tag: "", deck: "Branco", naipe: "Espadas", numero: "2" },
    { nome: "Clara Herculino", figura: "Lara de Araujo e Silva", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Nikiti na Panela. [P] -10 para cada Social, Enquete", penalidades: "", tag: "", deck: "Branco", naipe: "Espadas", numero: "3" },
    { nome: "Jorge Veludo", figura: "Caio Marcus Andrade de Oliveira", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Disney de Janeiro. [P] -10 para cada Social.", penalidades: "", tag: "Premium Care", deck: "Branco", naipe: "Espadas", numero: "4" },
    { nome: "Farmácia", figura: "Bruno Cesar Linhares da Costa Silva", tipo: "Personagem", pontos: 20, bonus: "[B] +5 para cada outro Personagem", penalidades: "", tag: "", deck: "Branco", naipe: "Espadas", numero: "5" },
    { nome: "Soneca Russa", figura: "Dasaiev de Marco Ribeiro Guedes", tipo: "Personagem", pontos: 20, bonus: "[B] +10 para cada Disney de Janeiro, outro Soninho. [P] -10 com Pergunta Sem Timing.", penalidades: "", tag: "Soninho", deck: "Branco", naipe: "Espadas", numero: "6" },
    { nome: "Tô Em Todas", figura: "Edson Alves Santos", tipo: "Personagem", pontos: 20, bonus: "[B] +10 para qualquer Evento E Local. [P] -15 para Aplausos Constrangedores", penalidades: "", tag: "", deck: "Branco", naipe: "Espadas", numero: "7" },
    { nome: "Pai do Regato", figura: "Felipe Klein Soares", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Camiseto. [P] -10 para cada Social.", penalidades: "", tag: "Premium Care", deck: "Branco", naipe: "Espadas", numero: "8" },
    { nome: "Praieira de Minas", figura: "Fernanda Helena de Paula Santos", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Vix em Pó e +10 com Série B. [P] -10 para cada Social.", penalidades: "", tag: "", deck: "Branco", naipe: "Espadas", numero: "9" },
    { nome: "Solução Caseira", figura: "Lucas Macos Caseira", tipo: "Personagem", pontos: 20, bonus: "[B] +10 para cada Aniversário do Anderson, Festa Anual. [P] -10 se tirar a barba.", penalidades: "", tag: "", deck: "Verde", naipe: "Espadas", numero: "2" },
    { nome: "Rei da Rifa", figura: "Lucas Fogaca de Sousa", tipo: "Personagem", pontos: 20, bonus: "[B] +50 com Rifa e +10 com Curso de Formação. [P] -10 se tiver que repetir a explicação da matéria.", penalidades: "", tag: "", deck: "Verde", naipe: "Espadas", numero: "3" },
    { nome: "Aí Vem O Desespero", figura: "Mattheus Gomes Sales", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Discussão Pós-prova. [P] -10 com cada Social, MaCaribe.", penalidades: "", tag: "", deck: "Verde", naipe: "Espadas", numero: "4" },
    { nome: "ServiceNat", figura: "Natalia Marques Malheiros Maia", tipo: "Personagem", pontos: 20, bonus: "[B] +5 para cada outro Personagem. [B] +10 com Nikiti na Panela. [P] -10 para cada Social.", penalidades: "", tag: "", deck: "Verde", naipe: "Espadas", numero: "5" },
    { nome: "Luiz de Lente", figura: "Luiz Henrique Pinto de Souza", tipo: "Personagem", pontos: 20, bonus: "[B] +50 com Foto de Óculos. [P] -10 para cada Social.", penalidades: "", tag: "", deck: "Verde", naipe: "Espadas", numero: "6" },
    { nome: "Gasparzinho Sundown", figura: "Luis Felipe Xavier Augusto de Oliveira", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Filtro Solar. [P] -10 sem EPI completo.", penalidades: "", tag: "", deck: "Verde", naipe: "Espadas", numero: "7" },
    { nome: "Mari-RUN-a", figura: "Mariana Mendes Guimaraes", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Disney de Janeiro. [P] -10 com qualquer Soninho.", penalidades: "", tag: "", deck: "Verde", naipe: "Espadas", numero: "8" },
    { nome: "Cruelrine", figura: "Marcel Ramos Rangel", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com CaretaPool. [P] -10 com qualquer Soninho.", penalidades: "", tag: "", deck: "Verde", naipe: "Espadas", numero: "9" },
    { nome: "Gerente Feedback Jr", figura: "Romilson Braga Teixeira", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Itabomprai. [P] -10 sem EPI completo.", penalidades: "", tag: "Premium Care", deck: "Amarelo", naipe: "Ouros", numero: "2" },
    { nome: "New Saulo", figura: "Saulo de Souza Cunha", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Kit Churrasco. [P] -10 se precisar pegar Uber para cada Social.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Ouros", numero: "3" },
    { nome: "O Infiltrado", figura: "Pedro Felipi Tavares Prado", tipo: "Personagem", pontos: 20, bonus: "[B] +50 com Treinamento sem Convite. [P] -10 com Saco Preto.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Ouros", numero: "4" },
    { nome: "Camiseto", figura: "Pedro Henrique Regato Moutinho", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com cada Pai do Regato, Feliz Aniversário. [P] -10 se jogador não estiver de Bermuda e/ou Regata.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Ouros", numero: "5" },
    { nome: "Renan Livre Leve", figura: "Renan Souto Rodrigues", tipo: "Personagem", pontos: 20, bonus: "[B] +10 para cada Social, +5 com Renan Preso. [P] -10 com menos de 3 Renans.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Ouros", numero: "6" },
    { nome: "Engenheiro Jr Sênior", figura: "Renato Fernandes de Aquino", tipo: "Personagem", pontos: 20, bonus: "[B] +10 se for o Personagem mais \"antigo\" da mão. [P] -10 com Neymar Contundido.", penalidades: "", tag: "Premium Care", deck: "Amarelo", naipe: "Ouros", numero: "7" },
    { nome: "Caôpixaba Modelo", figura: "Ricardo Reboucas de Alcantara", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Vix em Pó e +25 com Vix em Pó E MaCaribe. [P] -10 se o jogador não fizer \"A Pose\".", penalidades: "", tag: "", deck: "Amarelo", naipe: "Ouros", numero: "8" },
    { nome: "Meu nome não é Robison", figura: "Robison Giovani Malucelli", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Presencial de Outra Cidade. [P] -10 se o jogador tiver nome composto.", penalidades: "", tag: "Premium Care", deck: "Amarelo", naipe: "Ouros", numero: "9" },
    { nome: "Toddynho", figura: "Douglas Coelho da Cruz", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Disney de Janeiro. [P] -10 com qualquer Soninho", penalidades: "", tag: "", deck: "Branco", naipe: "Ouros", numero: "2" },
    { nome: "Uivo da Varanda", figura: "Charles Lima Pantoja Cordeiro", tipo: "Personagem", pontos: 20, bonus: "[B] +10 para qualquer Social. [P] -10 com Curso de Formação.", penalidades: "", tag: "", deck: "Branco", naipe: "Ouros", numero: "3" },
    { nome: "Soneca Infinita", figura: "Karla Lucena da Cunha", tipo: "Personagem", pontos: 20, bonus: "[B] +10 para cada Disney de Janeiro, outro Soninho. [P] -10 com Barrinha de Cereal.", penalidades: "", tag: "Soninho", deck: "Branco", naipe: "Ouros", numero: "4" },
    { nome: "Enquetes Everywhere", figura: "Fernando Cezar Pauletto", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Enquete e +5 com Cameraman. [P] -5 sem Mostra o RG.", penalidades: "", tag: "", deck: "Branco", naipe: "Ouros", numero: "5" },
    { nome: "Come Nada", figura: "Andre da Silva Menezes", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com CaretaPool. [P] -10 para cada Trigo, Alimento.", penalidades: "", tag: "", deck: "Branco", naipe: "Ouros", numero: "6" },
    { nome: "Ana Pimentão", figura: "Ana Carolina Nunes Perdigao", tipo: "Personagem", pontos: 20, bonus: "[B] +5 para cada outro Personagem", penalidades: "", tag: "", deck: "Branco", naipe: "Ouros", numero: "7" },
    { nome: "Trompete Tímido", figura: "Bianca Brandao de Paula Antunes", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Shinobi Campista. [P] -10 com MaCaribe.", penalidades: "", tag: "", deck: "Branco", naipe: "Ouros", numero: "8" },
    { nome: "Humorista Espião", figura: "Andre Mendes Mesquita", tipo: "Personagem", pontos: 20, bonus: "[B] +10 para cada Nikiti na Panela, Aniversário do Anderson, Festa Anual. [P] -10 sem Nikiti na Panela", penalidades: "", tag: "Premium Care", deck: "Branco", naipe: "Ouros", numero: "9" },
    { nome: "Manager Face", figura: "Jefferson Egidio de Almeida", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Presencial de Outra Cidade. [P] -10 se jogador não fizer \"Cara de Gerente\".", penalidades: "", tag: "Premium Care", deck: "Verde", naipe: "Ouros", numero: "2" },
    { nome: "Skin Care Maromba", figura: "Igor Barros Farias", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Grande Nordeste. [P] -10 se o jogador não treinou hoje.", penalidades: "", tag: "", deck: "Verde", naipe: "Ouros", numero: "3" },
    { nome: "A Quem Muitos Amaro", figura: "Lucas Amaro de Lima Santos", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Vix em Pó. [P] -10 se o jogador não estiver com qualquer objeto na cor roxa.", penalidades: "", tag: "Premium Care", deck: "Verde", naipe: "Ouros", numero: "4" },
    { nome: "Mostra o RG", figura: "Leticia Cucelle Torres Soares", tipo: "Personagem", pontos: 20, bonus: "[B] +5 com qualquer Enquetes Everywhere, Cameraman. [P] -5 sem Atrasilda.", penalidades: "", tag: "", deck: "Verde", naipe: "Ouros", numero: "5" },
    { nome: "Eu Sou A Lenda", figura: "Julio Augusto Duarte Chagas Junior", tipo: "Personagem", pontos: 20, bonus: "[B] +15 com Comprovante. [P] -10 com Disney de Janeiro.", penalidades: "", tag: "", deck: "Verde", naipe: "Ouros", numero: "6" },
    { nome: "Segue o Link", figura: "Joao Antonio Sousa de Argollo", tipo: "Personagem", pontos: 20, bonus: "[B] +5 para cada outro Personagem", penalidades: "", tag: "", deck: "Verde", naipe: "Ouros", numero: "7" },
    { nome: "Max Milhas", figura: "Larissa Santana Nascimento", tipo: "Personagem", pontos: 20, bonus: "[B] +10 se o jogador cantar por ao menos 10s. [P] -10 se o jogador não voou/voar nos últimos/próximos 7 dias.", penalidades: "", tag: "", deck: "Verde", naipe: "Ouros", numero: "8" },
    { nome: "Atrasilda", figura: "Lais de Araujo Almeida", tipo: "Personagem", pontos: 20, bonus: "[B]  +5 para cada Mostra o RG ou Enquetes Everywhere. [P] -10 sem Cameraman.", penalidades: "", tag: "", deck: "Verde", naipe: "Ouros", numero: "9" },
    { nome: "CarioCúcho", figura: "Pedro Henrique Jardim Nunes", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Disney de Janeiro. [P] -10 se jogador estiver sem chinelo e sem chimarrão.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Paus", numero: "2" },
    { nome: "Olefinas", figura: "Pedro Paulo Barbosa Feitosa", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Pato Migratório. [P] -10 com Itabompraí.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Paus", numero: "3" },
    { nome: "Tranquilo?", figura: "Roberto Moreira Coelho da Silva", tipo: "Personagem", pontos: 20, bonus: "[B] +10 se o jogador não imitar o Personagem.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Paus", numero: "4" },
    { nome: "Esqueceram de Mim", figura: "Robson Alves Araujo", tipo: "Personagem", pontos: 20, bonus: "[B] +10 se a carga do celular do jogador for >79%. [P] -10 se o jogador veio de ônibus de viagem.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Paus", numero: "5" },
    { nome: "Zócolo na Caixeta", figura: "Thiago Campos Zocolo", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Piadas Devastadoras. [P] -10 com Perguntas sem Timing.", penalidades: "", tag: "Premium Care", deck: "Amarelo", naipe: "Paus", numero: "6" },
    { nome: "Jogador Colombiano", figura: "Tiago Resende Lucinda", tipo: "Personagem", pontos: 20, bonus: "[B] +20 com Contusão no Joelho. [P] -10 se o jogador nunca assistiu à série Narcos.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Paus", numero: "7" },
    { nome: "Mochila de Alho", figura: "Vitor Santos Aguiar", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Disney de Janeiro. [P] -10 com Mochila Petrobras.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Paus", numero: "8" },
    { nome: "Cameraman", figura: "Weverton dos Santos", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Atrasilda e +5 com Mostra o RG. [P] -10 sem Câmera Ligada.", penalidades: "", tag: "", deck: "Amarelo", naipe: "Paus", numero: "9" },
    { nome: "Triplo Banho", figura: "Allan dos Anjos Costa Dantas", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Grande Nordeste. [P] -10 com Café.", penalidades: "", tag: "", deck: "Branco", naipe: "Paus", numero: "2" },
    { nome: "Cachacinha", figura: "Alison Heringer Rocha Moraes", tipo: "Personagem", pontos: 20, bonus: "[B] +10 para cada Disney de Janeiro, outro Soninho. [P] -10 com Pergunta Sem Timing.", penalidades: "", tag: "Soninho", deck: "Branco", naipe: "Paus", numero: "3" },
    { nome: "Labrador", figura: "Daniel Henrique Mandarino Duarte", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Bruce Weiner. [P] -10 com qualquer Soninho.", penalidades: "", tag: "", deck: "Branco", naipe: "Paus", numero: "4" },
    { nome: "Bigode Sem Tempo", figura: "Bruno de Vasconcellos Machado", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Disney de Janeiro. [P] -10 com qualquer Social.", penalidades: "", tag: "", deck: "Branco", naipe: "Paus", numero: "5" },
    { nome: "Carioca do Brejo", figura: "Felipe Leite Fagundes", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Disney de Janeiro ou +80 com Floripa. [P] -15 sem Café.", penalidades: "", tag: "", deck: "Branco", naipe: "Paus", numero: "6" },
    { nome: "Caixeta de Zócolo", figura: "Danilo Caixeta Gomes", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Piadas Devastadoras. [P] -10 com Perguntas sem Timing.", penalidades: "", tag: "", deck: "Branco", naipe: "Paus", numero: "7" },
    { nome: "Hermano Mullets", figura: "Henrique Vicentin", tipo: "Personagem", pontos: 20, bonus: "[B] +15 com Presencial de Outra Cidade. [P] -15 com Presencial", penalidades: "", tag: "", deck: "Branco", naipe: "Paus", numero: "8" },
    { nome: "Laboratórios Medley", figura: "Ester Medley Bezerra Teixeira de Almeida", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Grande Nordeste. [P] -10 com qualquer Social.", penalidades: "", tag: "", deck: "Branco", naipe: "Paus", numero: "9" },
    { nome: "Laboratórios Achè", figura: "Lucas Nunes Ache Assumpcao", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Laboratórios Medley. [P] -10 para cada Social.", penalidades: "", tag: "", deck: "Verde", naipe: "Paus", numero: "2" },
    { nome: "Ricardo Nervosinho", figura: "Luis Ricardo Pinheiro Vieira", tipo: "Personagem", pontos: 20, bonus: "[B] +10 para cada Evento, MaCaribe. [P] -10 sem Social.", penalidades: "", tag: "Premium Care", deck: "Verde", naipe: "Paus", numero: "3" },
    { nome: "Doceira de Nikiti", figura: "Mayara Vieira Henriques", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Nikiti na Panela. [P] -10 para cada Social.", penalidades: "", tag: "", deck: "Verde", naipe: "Paus", numero: "4" },
    { nome: "Mexido, Não Batido", figura: "Daniele Martini", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Nikiti na Panela. [P] -10 para cada Social.", penalidades: "", tag: "", deck: "Verde", naipe: "Paus", numero: "5" },
    { nome: "Shinobi Campista", figura: "Luiza Lisboa Naegele e Silva", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com outro Petrobanda. [P] -10 para cada Social", penalidades: "", tag: "Petrobanda", deck: "Verde", naipe: "Paus", numero: "6" },
    { nome: "General Trigus Aurelius", figura: "Marcus Vinicius dos Santos Lins", tipo: "Personagem", pontos: 20, bonus: "[B] +15 com Pão de Queijo e +5 com MaCaribe e Social. [P] -10 para cada Trigo.", penalidades: "", tag: "", deck: "Verde", naipe: "Paus", numero: "7" },
    { nome: "PETagoga", figura: "Mariane Martins de Carvalho", tipo: "Personagem", pontos: 20, bonus: "[B] +10 com Vereadora e +5 para cada Colheita Feliz, Shinobi Campista e PET. [P] -10 para cada Social", penalidades: "", tag: "", deck: "Verde", naipe: "Paus", numero: "8" },
    { nome: "Bibliotecário", figura: "Mateus Silva Duraes", tipo: "Personagem", pontos: 20, bonus: "[B] +50 com Biblioteca do EDIBH. [P] -10 com Resumo da Carol.", penalidades: "", tag: "", deck: "Verde", naipe: "Paus", numero: "9" }
];

function normalizarNome(nome) {
    return nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "");
}

function validarMao(nomesCartas) {
    if (nomesCartas.length < 1) {
        return "Por favor, insira o nome de pelo menos uma carta.";
    }

    const unicos = new Set(nomesCartas);
    if (unicos.size !== nomesCartas.length) {
        return "Mão inválida. Cartas duplicadas não são permitidas.";
    }

    const cartasEncontradas = nomesCartas.map(nome => cartas.find(c => normalizarNome(c.nome) === nome)).filter(c => c);

    if (cartasEncontradas.length !== nomesCartas.length) {
        const naoEncontradas = nomesCartas.filter(nome => !cartas.find(c => normalizarNome(c.nome) === nome));
        return `Mão inválida. As seguintes cartas não foram encontradas: ${naoEncontradas.join(', ')}.`;
    }

    return "ok";
}


function calcularPontuacao() {
    const inputCartas = document.getElementById('cartas-jogador').value;
    const nomesCartasNaMao = inputCartas.split(/\r?\n/).map(nome => normalizarNome(nome.trim())).filter(nome => nome !== "");
    let resultadoHTML = "";

    const validacao = validarMao(nomesCartasNaMao);
    if (validacao !== "ok") {
        document.getElementById('resultado').innerHTML = validacao;
        return;
    }

    // Lógica para obter as ações do checklist
    let acoesExternas = [];
    const checkboxesAcoes = document.querySelectorAll('#acoes-jogador-checklist input[type="checkbox"]');
    checkboxesAcoes.forEach(checkbox => {
        if (checkbox.checked) {
            acoesExternas.push(checkbox.dataset.acao.toLowerCase());
        }
    });

    let pontuacaoBase = 0;
    let pontuacaoBonus = 0;
    let pontuacaoPenalidade = 0;

    const cartasNaMao = nomesCartasNaMao.map(nome => cartas.find(c => normalizarNome(c.nome) === nome));
    const nomesCartasValidos = cartasNaMao.map(c => normalizarNome(c.nome));
    const tipos = cartasNaMao.map(c => c.tipo);
    const tags = cartasNaMao.flatMap(c => c.tag ? c.tag.split(',').map(t => t.trim()) : []);

    resultadoHTML += "<h2>Resultados</h2>";
    resultadoHTML += "Mão válida. Calculando...<br>";
    
    // Pontuação Base e detalhes
    cartasNaMao.forEach(carta => {
        pontuacaoBase += carta.pontos;
        resultadoHTML += `${carta.nome}: ${carta.pontos} pontos base.<br>`;
    });

    // Contagem de tipos e tags para regras complexas
    const contagemTipo = tipos.reduce((acc, tipo) => {
        acc[tipo] = (acc[tipo] || 0) + 1;
        return acc;
    }, {});
    const contagemTag = tags.reduce((acc, tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
        return acc;
    }, {});

    // Bônus e Penalidades
    let detalhesBonus = [];
    let detalhesPenalidades = [];

    // Lógica de Bônus
    if (nomesCartasValidos.includes("caretapool") && nomesCartasValidos.includes("cruelrine")) {
        pontuacaoBonus += 10;
        detalhesBonus.push("+10 (CaretaPool + Cruelrine)");
    }
    if (nomesCartasValidos.includes("invadehouse") && nomesCartasValidos.includes("macaribe")) {
        pontuacaoBonus += 20;
        detalhesBonus.push("+20 (INVADE HOUSE + MaCaribe)");
    }
    if (nomesCartasValidos.includes("almocao") && nomesCartasValidos.includes("macaribe")) {
        pontuacaoBonus += 20;
        detalhesBonus.push("+20 (ALMOÇÃO + MaCaribe)");
    }
    if (nomesCartasValidos.includes("caôpixaba modelo") && acoesExternas.includes("fez a pose")) {
        pontuacaoBonus += 25;
        detalhesBonus.push("+25 (Caôpixaba Modelo + A Pose)");
    }
    if (nomesCartasValidos.includes("disney de janeiro") && (acoesExternas.includes("está de chinelo") || acoesExternas.includes("está tomando matte"))) {
        pontuacaoBonus += 10;
        detalhesBonus.push("+10 (Disney de Janeiro + Chinelo ou Matte)");
    }
    if (nomesCartasValidos.includes("macaribe") && acoesExternas.includes("está de camiseta")) {
        pontuacaoBonus += 10;
        detalhesBonus.push("+10 (MaCaribe + Camiseta)");
    }
    if (nomesCartasValidos.includes("vix em pó") && (acoesExternas.includes("está comendo caranguejo ou ter pó no pé/na roupa"))) {
        pontuacaoBonus += 10;
        detalhesBonus.push("+10 (Vix em Pó + Ação Correspondente)");
    }
    if (nomesCartasValidos.includes("grande nordeste") && (acoesExternas.includes("está pegando sol") || acoesExternas.includes("está bebendo água"))) {
        pontuacaoBonus += 10;
        detalhesBonus.push("+10 (Grande Nordeste + Pegando Sol ou Bebendo Água)");
    }
    if (nomesCartasValidos.includes("magnanimo") && acoesExternas.includes("fez uma acrobacia")) {
        pontuacaoBonus += 10;
        detalhesBonus.push("+10 (MagnâniMO + Acrobacia)");
    }
    if (nomesCartasValidos.includes("tranquilo?") && acoesExternas.includes("imitou o personagem")) {
        pontuacaoBonus += 10;
        detalhesBonus.push("+10 (Tranquilo? + Imitou o Personagem)");
    }
    if (nomesCartasValidos.includes("esqueceram de mim") && acoesExternas.includes("carga celular >79%")) {
        pontuacaoBonus += 10;
        detalhesBonus.push("+10 (Esqueceram de Mim + Carga do Celular)");
    }
    if (nomesCartasValidos.includes("max milhas") && acoesExternas.includes("cantou por ao menos 10s")) {
        pontuacaoBonus += 10;
        detalhesBonus.push("+10 (Max Milhas + Cantou por 10s)");
    }
    if (nomesCartasValidos.includes("skin care maromba") && acoesExternas.includes("treinou hoje")) {
        pontuacaoBonus += 10;
        detalhesBonus.push("+10 (Skin Care Maromba + Treinou Hoje)");
    }
    if (nomesCartasValidos.includes("a quem muitos amaro") && acoesExternas.includes("está com qualquer objeto na cor roxa")) {
        pontuacaoBonus += 10;
        detalhesBonus.push("+10 (A Quem Muitos Amaro + Algo Roxo)");
    }
    if (nomesCartasValidos.includes("numero magico") && acoesExternas.includes("tentar um valor aproximado")) {
        pontuacaoBonus += 10;
        detalhesBonus.push("+10 (Número Mágico + Tentou Valor Aproximado)");
    }


    // Penalidades
    if (nomesCartasValidos.includes("gasparzinho sundown") && !acoesExternas.includes("está com epi completo")) {
        pontuacaoPenalidade -= 10;
        detalhesPenalidades.push("-10 (Gasparzinho Sundown sem EPI completo)");
    }
    if (nomesCartasValidos.includes("caôpixaba modelo") && !acoesExternas.includes("fez a pose")) {
        pontuacaoPenalidade -= 10;
        detalhesPenalidades.push("-10 (Caôpixaba Modelo sem a pose)");
    }
    if (nomesCartasValidos.includes("tranquilo?") && !acoesExternas.includes("imitou o personagem")) {
        pontuacaoPenalidade -= 10;
        detalhesPenalidades.push("-10 (Tranquilo? sem imitar o personagem)");
    }
    if (nomesCartasValidos.includes("esqueceram de mim") && acoesExternas.includes("veio de onibus de viagem")) {
        pontuacaoPenalidade -= 10;
        detalhesPenalidades.push("-10 (Esqueceram de Mim + Veio de ônibus)");
    }
    if (nomesCartasValidos.includes("max milhas") && !acoesExternas.includes("viajou nos ultimos/proximos 7 dias")) {
        pontuacaoPenalidade -= 10;
        detalhesPenalidades.push("-10 (Max Milhas sem viajar)");
    }
    if (nomesCartasValidos.includes("skin care maromba") && !acoesExternas.includes("treinou hoje")) {
        pontuacaoPenalidade -= 10;
        detalhesPenalidades.push("-10 (Skin Care Maromba sem treinar)");
    }
    if (nomesCartasValidos.includes("a quem muitos amaro") && !acoesExternas.includes("está com qualquer objeto na cor roxa")) {
        pontuacaoPenalidade -= 10;
        detalhesPenalidades.push("-10 (A Quem Muitos Amaro sem algo roxo)");
    }
    if (nomesCartasValidos.includes("numero magico") && !acoesExternas.includes("tentar um valor aproximado")) {
        pontuacaoPenalidade -= 10;
        detalhesPenalidades.push("-10 (Número Mágico sem tentar valor aproximado)");
    }
    if (nomesCartasValidos.includes("magnanimo") && acoesExternas.includes("chorou no futebol")) {
        pontuacaoPenalidade -= 10;
        detalhesPenalidades.push("-10 (Magnânimo + Chorou no futebol)");
    }
    if (nomesCartasValidos.includes("cariochucho") && acoesExternas.includes("está sem chinelo e sem chimarrão")) {
        pontuacaoPenalidade -= 10;
        detalhesPenalidades.push("-10 (CarioCúcho + Sem chinelo e sem chimarrão)");
    }


    resultadoHTML += `<br>Pontuação Base: ${pontuacaoBase}<br>`;

    if (detalhesBonus.length > 0) {
        resultadoHTML += `Total de Bônus: ${pontuacaoBonus} (${detalhesBonus.join('; ')}).<br>`;
    } else {
        resultadoHTML += `Total de Bônus: 0<br>`;
    }

    if (detalhesPenalidades.length > 0) {
        resultadoHTML += `Total de Penalidades: ${pontuacaoPenalidade} (${detalhesPenalidades.join('; ')}).<br>`;
    } else {
        resultadoHTML += `Total de Penalidades: 0<br>`;
    }

    const pontuacaoTotal = pontuacaoBase + pontuacaoBonus + pontuacaoPenalidade;
    resultadoHTML += `Pontuação Total: ${pontuacaoTotal} pontos`;

    document.getElementById('resultado').innerHTML = resultadoHTML;
}
