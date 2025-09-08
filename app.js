// app.js

// Referências aos elementos da interface
const cartasSelecaoEl = document.getElementById('cartas-selecao');
const acoesSelecaoEl = document.getElementById('acoes-selecao');
const calcularBtn = document.getElementById('calcular-btn');
const pontosEl = document.getElementById('pontos');

// Função para renderizar as cartas na tela
function renderizarCartas() {
    cartas.forEach(carta => {
        const div = document.createElement('div');
        div.className = 'carta-item';
        div.innerHTML = `
            <input type="checkbox" id="${carta.nome.replace(/\s/g, '-')}" name="carta" value="${carta.nome}">
            <label for="${carta.nome.replace(/\s/g, '-')}" class="card-label">
                ${carta.nome} <br/> <small>(${carta.tipo})</small>
            </label>
        `;
        cartasSelecaoEl.appendChild(div);
    });
}

// Função para renderizar as ações na tela
function renderizarAcoes() {
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
}

// Função que coleta as escolhas e calcula a pontuação
function handleCalcular() {
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

    // Chama a função de cálculo do arquivo logicas.js
    const pontuacao = calcularPontuacao(cartasSelecionadas, acoesSelecionadas);

    // Atualiza a pontuação na interface
    pontosEl.textContent = pontuacao;
}

// Adiciona o ouvinte de evento ao botão
calcularBtn.addEventListener('click', handleCalcular);

// Inicia a renderização
renderizarCartas();
renderizarAcoes();
