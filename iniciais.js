document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema carregado com sucesso!");

    // 1. Mapeamento de quem é quem
    const controle = {
        'luis': 'divP1',
        'vinicius': 'divP2',
        'kayky': 'divP3',
        'isabella': 'divP4',
        'matias': 'divP5'
    };

    const divVazio = document.getElementById('vazio');
    const idsConteudo = ['divP1', 'divP2', 'divP3', 'divP4', 'divP5'];

    // 2. Função que limpa tudo
    function limparTela() {
        if (divVazio) divVazio.style.display = 'none';
        idsConteudo.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = 'none';
        });
    }

    // 3. Lógica dos botões de pokémons
    Object.keys(controle).forEach(idBtn => {
        const btn = document.getElementById(idBtn);
        const alvo = document.getElementById(controle[idBtn]);

        if (btn && alvo) {
            btn.addEventListener('click', () => {
                limparTela();
                // Força o display flex no container alvo
                alvo.style.setProperty('display', 'flex', 'important');
                console.log("Exibindo: " + controle[idBtn]);
            });
        }
    });

    // 4. Lógica do Reset
    const btnReset = document.getElementById('reset');
    if (btnReset) {
        btnReset.addEventListener('click', () => {
            limparTela();
            if (divVazio) {
                divVazio.style.display = 'flex';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }
});