// app.js

// Certifique-se de que este script seja carregado APÓS o logicas.js no seu HTML.
// O arquivo logicas.js contém as variáveis 'cartas' e 'acoes'.

// Referências aos elementos da interface
const cartasSelecaoEl = document.getElementById('cartas-selecao');
const acoesSelecaoEl = document.getElementById('acoes-selecao');
const calcularBtn = document.getElementById('calcular-btn');
const pontosEl = document.getElementById('pontos');

// Função para renderizar as cartas na tela
function renderizarCartas() {
    if (!cartasSelecaoEl || !Array.isArray(cartas)) {
        console.error("Erro: Elemento 'cartas-selecao' não encontrado ou a variável 'cartas' não é um array.");
        return;
    }

    cartasSelecaoEl.innerHTML = ''; // Limpa a lista antes de renderizar
    cartas.forEach(carta => {
        const div = document.createElement('div');
        const tipoClasse = `tipo-${carta.tipo.replace(/\s|\//g, '-').toLowerCase()}`;
        div.className = `carta-item ${tipoClasse}`;
        
        div.innerHTML = `
            <input type="checkbox" id="${carta.nome.replace(/\s/g, '-')}" name="carta" value="${carta.nome}">
            <label for="${carta.nome.replace(/\s/g, '-')}" class="card-label">
                ${carta.nome} <br/> <small>(${carta.tipo})</small>
            </label>
        `;
        cartasSelecaoEl.appendChild(div);
    });
    console.log("Cartas renderizadas com sucesso.");
}

// Função para renderizar as ações na tela
function renderizarAcoes() {
    if (!acoesSelecaoEl || !Array.isArray(acoes)) {
        console.error("Erro: Elemento 'acoes-selecao' não encontrado ou a variável 'acoes' não é um array.");
        return;
    }

    acoesSelecaoEl.innerHTML = ''; // Limpa a lista antes de renderizar
    const acoesUnicas = [...new Set(acoes.map(a => a.nome))];
    acoesUnicas.forEach(acao => {
        const div = document.createElement('div');
        div.className = 'acao-item';
        div.innerHTML = `
            <input type="checkbox" id="acao-${acao.replace(/\s/g, '-')}" name="acao" value="${acao}">
            <label for="acao-${acao.replace(/\s/g, '-')}" class="acao-label">
                ${acao}
            </label>
        `;
        acoesSelecaoEl.appendChild(div);
    });
    console.log("Ações renderizadas com sucesso.");
}

// Função que coleta as escolhas e calcula a pontuação
function handleCalcular() {
    console.log("Botão 'Calcular' foi clicado.");
    const cartasSelecionadas = [];
    const acoesSelecionadas = [];

    // Pega as cartas marcadas
    document.querySelectorAll('input[name="carta"]:checked').forEach(input => {
        const nomeCarta = input.value;
        const cartaObj = cartas.find(c => c.nome === nomeCarta);
        if (cartaObj) {
            cartasSelecionadas.push(cartaObj);
        }
    });

    // Pega as ações marcadas
    document.querySelectorAll('input[name="acao"]:checked').forEach(input => {
        acoesSelecionadas.push(input.value);
    });

    console.log("Cartas selecionadas:", cartasSelecionadas.map(c => c.nome));
    console.log("Ações selecionadas:", acoesSelecionadas);

    // Chama a função de cálculo do arquivo logicas.js
    const pontuacao = calcularPontuacao(cartasSelecionadas, acoesSelecionadas);

    // Atualiza a pontuação na interface
    pontosEl.textContent = pontuacao;
    console.log(`Pontuação final calculada: ${pontuacao}`);
}

// Adiciona o ouvinte de evento ao botão se ele existir
if (calcularBtn) {
    calcularBtn.addEventListener('click', handleCalcular);
} else {
    console.error("Erro: Botão 'calcular-btn' não encontrado.");
}


// Inicia a renderização quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    renderizarCartas();
    renderizarAcoes();
});
