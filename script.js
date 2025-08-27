// A base de dados das cartas. Para um aplicativo completo, a lista de todas as 156 cartas deve ser incluída aqui.
const cartas = [
    { nome: "Cruelrine", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com CaretaPool", penalidade: "-10 com qualquer Soninho" },
    { nome: "Caretapool", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Cruelrine", penalidade: "-10 com Pato Migratório" },
    { nome: "MaCaribe", pontos: 60, tipo: "Local", tag: "Social", bonus: "+10 se o jogador estiver de Camiseta", penalidade: null },
    { nome: "Caôpixaba Modelo", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Vix em Pó, +25 com Vix em Pó E MaCaribe", penalidade: "-10 se o jogador não fizer 'A Pose'" },
    { nome: "Vix em Pó", pontos: 60, tipo: "Local", tag: null, bonus: "+10 se o jogador estiver comendo Caranguejo ou tiver Pó no pé/na roupa", penalidade: null },
    { nome: "Presencial de Outra Cidade", pontos: 0, tipo: "Coringa", tag: null, bonus: "Considere até dois Locais como apenas um", penalidade: null },
    { nome: "Modelo Híbrido", pontos: 0, tipo: "Coringa", tag: null, bonus: "Considere Presencial e Home-Office como apenas um Evento", penalidade: null },
    { nome: "Carona", pontos: 0, tipo: "Coringa", tag: null, bonus: "Você pode ter até cinco Personagens", penalidade: null },
    { nome: "Lista de Presença", pontos: 0, tipo: "Coringa", tag: null, bonus: "Você pode ter até seis Personagens", penalidade: null },
    { nome: "Come nada", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com CaretaPool", penalidade: "-10 para cada Trigo, Alimento" },
    { nome: "Doceira de Nikiti", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Nikity na panela", penalidade: "-10 para cada Social" },
    { nome: "Prefeito Pimenta", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 para cada Nikity na panela e Carona", penalidade: "-10 para cada Social" },
    { nome: "Mexido, não batido", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Nikity na panela", penalidade: "-10 para cada Social" },
    { nome: "Tromps dos magos", pontos: 20, tipo: "Personagem", tag: "Soninho", bonus: "+10 para cada Nikity na panela, outro Soninho", penalidade: "-10 para cada Social" },
    { nome: "Nikity na panela", pontos: 60, tipo: "Local", tag: null, bonus: "+10 se o jogador estiver vendo um grande Corpo de Água ou o Corcovado", penalidade: null },
    { nome: "Kit Churrasco", pontos: 5, tipo: "Item/Meme", tag: "Alimento", bonus: "+10 para cada Invade House, Aniversário do Anderson, Festa Anual", penalidade: null },
    { nome: "T5 Honorário", pontos: 0, tipo: "Coringa", tag: null, bonus: "Ao fim do jogo, pegue até um Personagem (carta extra) da área de descarte", penalidade: null },
    { nome: "Grande Nordeste", pontos: 60, tipo: "Local", tag: null, bonus: "+10 se o jogador estiver pegando Sol ou bebendo Água", penalidade: null },
    { nome: "Invade House", pontos: 40, tipo: "Evento", tag: "Social", bonus: "+20 com MaCaribe", penalidade: null },
    { nome: "Atrasilda", pontos: 20, tipo: "Personagem", tag: null, bonus: "+5 para cada Mostra o RG ou Enquetes Everywhere", penalidade: "-10 sem Cameraman" },
    { nome: "Mostra o RG", pontos: 20, tipo: "Personagem", tag: null, bonus: "+5 com qualquer Enquetes Everywhere, Cameraman", penalidade: "-5 sem Atrasilda" },
    { nome: "Cameraman", pontos: 20, tipo: "Personagem", tag: null, bonus: "+10 com Atrasilda e +5 com Mostra o RG", penalidade: "-10 sem Câmera Ligada" },
    { nome: "Enquetes Everywhere", pontos: 25, tipo: "Personagem", tag: null, bonus: "+10 com Enquete e +5 com Cameraman", penalidade: "-10 para cada Evento e -5 para cada Presente" }
];

function encontrarCarta(nome) {
    return cartas.find(c => c.nome.toLowerCase() === nome.toLowerCase());
}

function validarMao(mao, interacoes) {
    const contagem = { Personagem: 0, Local: 0, Evento: 0, Coringa: 0 };
    const coringasNaMao = mao.filter(c => c.tipo === "Coringa").map(c => c.nome);

    mao.forEach(carta => {
        if (contagem[carta.tipo] !== undefined) {
            contagem[carta.tipo]++;
        }
    });

    let valido = true;
    let motivo = "Mão válida.";

    if (mao.length > 7) {
        valido = false;
        motivo = "Mão inválida: O número de cartas excede o limite de 7.";
    }

    // Verifica limites e bônus de Coringas
    if (contagem.Personagem > 3 && !coringasNaMao.includes("Carona") && !coringasNaMao.includes("Lista de Presença")) {
        valido = false;
        motivo = `Mão inválida: Excesso de Personagens (${contagem.Personagem}/3).`;
    }
    if (contagem.Local > 1 && !coringasNaMao.includes("Presencial de Outra Cidade")) {
        valido = false;
        motivo = `Mão inválida: Excesso de Locais (${contagem.Local}/1).`;
    }
    if (contagem.Evento > 1 && !coringasNaMao.includes("Modelo Híbrido")) {
        valido = false;
        motivo = `Mão inválida: Excesso de Eventos (${contagem.Evento}/1).`;
    }
    
    // T5 Honorário
    if (coringasNaMao.includes("T5 Honorário") && interacoes.includes("t5 honorario usado") && contagem.Personagem > 3) {
        valido = false;
        motivo = `Mão inválida: O bônus do T5 Honorário foi usado, mas a mão ainda excede o limite de Personagens. A carta 'Carona' ou 'Lista de Presença' seria necessária para um total de ${contagem.Personagem} Personagens.`;
    }

    return { valido, motivo };
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

        // Lógica de bônus
        switch (carta.nome) {
            case "Cruelrine":
                if (mao.some(c => c.nome === "Caretapool")) { pontosCarta += 10; bonusString += "+10 com Caretapool. "; }
                break;
            case "Caretapool":
                if (mao.some(c => c.nome === "Cruelrine")) { pontosCarta += 10; bonusString += "+10 com Cruelrine. "; }
                break;
            case "MaCaribe":
                if (interacoesInput.includes("estava de camiseta")) { pontosCarta += 10; bonusString += "+10 (camisa). "; }
                break;
            case "Caôpixaba Modelo":
                if (mao.some(c => c.nome === "Vix em Pó") && mao.some(c => c.nome === "MaCaribe")) { pontosCarta += 25; bonusString += "+25 (Vix em Pó E MaCaribe). "; }
                else if (mao.some(c => c.nome === "Vix em Pó")) { pontosCarta += 10; bonusString += "+10 (Vix em Pó). "; }
                if (!interacoesInput.includes("fez a 'pose'")) { pontosCarta -= 10; penalidadeString += "-10 (não fez a pose). "; }
                break;
            case "Vix em Pó":
                if (interacoesInput.includes("estava comendo caranguejo") || interacoesInput.includes("tinha pó no pé/na roupa")) { pontosCarta += 10; bonusString += "+10 (ação do jogador). "; }
                break;
            case "Come nada":
                if (mao.some(c => c.nome === "Caretapool")) { pontosCarta += 10; bonusString += "+10 com Caretapool. "; }
                if (mao.some(c => c.tag && c.tag.includes("Alimento"))) { pontosCarta -= 10; penalidadeString += "-10 (com Alimento). "; }
                break;
            case "Doceira de Nikiti":
            case "Mexido, não batido":
                if (mao.some(c => c.nome === "Nikity na panela")) { pontosCarta += 10; bonusString += "+10 com Nikity na panela. "; }
                break;
            case "Prefeito Pimenta":
            case "Tromps dos magos":
                if (mao.some(c => c.nome === "Nikity na panela")) { pontosCarta += 10; bonusString += "+10 com Nikity na panela. "; }
                break;
            case "Nikity na panela":
                if (interacoesInput.includes("estava vendo o mar") || interacoesInput.includes("estava vendo o corcovado")) { pontosCarta += 10; bonusString += "+10 (ação do jogador). "; }
                break;
            case "Atrasilda":
                if (mao.some(c => c.nome === "Mostra o RG") || mao.some(c => c.nome === "Enquetes Everywhere")) { pontosCarta += 5; bonusString += "+5 (Mostra o RG ou Enquetes Everywhere). "; }
                if (!mao.some(c => c.nome === "Cameraman")) { pontosCarta -= 10; penalidadeString += "-10 (sem Cameraman). "; }
                break;
            case "Mostra o RG":
                if (mao.some(c => c.nome === "Enquetes Everywhere") || mao.some(c => c.nome === "Cameraman")) { pontosCarta += 5; bonusString += "+5 (Enquetes Everywhere ou Cameraman). "; }
                if (!mao.some(c => c.nome === "Atrasilda")) { pontosCarta -= 5; penalidadeString += "-5 (sem Atrasilda). "; }
                break;
            case "Cameraman":
                if (mao.some(c => c.nome === "Atrasilda")) { pontosCarta += 10; bonusString += "+10 (com Atrasilda). "; }
                if (mao.some(c => c.nome === "Mostra o RG")) { pontosCarta += 5; bonusString += "+5 (com Mostra o RG). "; }
                if (!interacoesInput.includes("com camera ligada")) { pontosCarta -= 10; penalidadeString += "-10 (sem Câmera Ligada). "; }
                break;
            case "Enquetes Everywhere":
                if (mao.some(c => c.tipo === "Evento")) { pontosCarta -= 10; penalidadeString += "-10 (com Evento). "; }
                if (mao.some(c => c.tag && c.tag.includes("Presente"))) { pontosCarta -= 5; penalidadeString += "-5 (com Presente). "; }
                break;
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