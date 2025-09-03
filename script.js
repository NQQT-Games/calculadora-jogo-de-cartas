// Este código ficará em script.js
document.addEventListener('DOMContentLoaded', () => {
    // A função `inicializarCalculadora` agora lida apenas com a interface do usuário.
    // Ela usa os arrays `cartas` e `acoes` definidos em logicas.js.
    function inicializarCalculadora() {
        const cardSelectionContainer = document.getElementById('card-selection-container');
        const acoesChecklistContainer = document.getElementById('acoes-jogador-checklist');
        
        // Populando as 7 cartas principais
        for (let i = 1; i <= 7; i++) {
            const selectContainer = document.createElement('div');
            selectContainer.className = 'card-selection';
            
            const label = document.createElement('label');
            label.textContent = `Carta ${i}:`;
            
            const select = document.createElement('select');
            select.id = `carta-${i}-nome`;
            
            const defaultOption = document.createElement('option');
            defaultOption.value = "";
            defaultOption.textContent = "Selecione uma carta";
            select.appendChild(defaultOption);
            
            cartas.forEach(carta => {
                const option = document.createElement('option');
                option.value = carta.nome;
                option.textContent = carta.nome;
                select.appendChild(option);
            });
            
            selectContainer.appendChild(label);
            selectContainer.appendChild(select);
            cardSelectionContainer.appendChild(selectContainer);
        }
        
        // Populando as ações do jogador
        acoes.forEach(acao => {
            const div = document.createElement('div');
            const input = document.createElement('input');
            input.type = "checkbox";
            input.id = acao.id;
            input.dataset.acao = acao.id;
            
            const label = document.createElement('label');
            label.htmlFor = acao.id;
            label.textContent = acao.nome;
            
            div.appendChild(input);
            div.appendChild(label);
            acoesChecklistContainer.appendChild(div);
        });

        // Populando as seleções de cartas extras
        const extraItemSelect = document.getElementById('extra-item-select');
        const extraPersonagemSelect = document.getElementById('extra-personagem-select');
        const defaultOptionItem = document.createElement('option');
        defaultOptionItem.value = "";
        defaultOptionItem.textContent = "Nenhum";
        extraItemSelect.appendChild(defaultOptionItem);
        const defaultOptionPersonagem = document.createElement('option');
        defaultOptionPersonagem.value = "";
        defaultOptionPersonagem.textContent = "Nenhum";
        extraPersonagemSelect.appendChild(defaultOptionPersonagem);

        cartas.filter(c => c.tipo === "Item/Meme").forEach(carta => {
            const option = document.createElement('option');
            option.value = carta.nome;
            option.textContent = carta.nome;
            extraItemSelect.appendChild(option);
        });

        cartas.filter(c => c.tipo === "Personagem").forEach(carta => {
            const option = document.createElement('option');
            option.value = carta.nome;
            option.textContent = carta.nome;
            extraPersonagemSelect.appendChild(option);
        });
    }

    inicializarCalculadora();
});
