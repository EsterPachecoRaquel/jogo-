function startGame() {
    const totalPlayers = 5;
    const totalRounds = 3;
    let players = [];

    // Captura o nome dos jogadores
    for (let i = 0; i < totalPlayers; i++) {
        let name = prompt(`Digite o nome do jogador ${i + 1}:`);
        players.push({ name: name, score: 0 });
    }

    // Início das rodadas
    for (let round = 1; round <= totalRounds; round++) {
        alert(`Iniciando a rodada ${round}`);
        let targetNumber = Math.floor(Math.random() * 100) + 1; // Número aleatório entre 1 e 100
        console.log(`Número da rodada ${round} (para testes): ${targetNumber}`);

        // Cada jogador tenta adivinhar o número
        players.forEach(player => {
            let guess = parseInt(prompt(`Jogador ${player.name}, adivinhe o número entre 1 e 100:`));
            let points = 100 - Math.abs(targetNumber - guess); // Pontuação baseada na proximidade
            player.score += points;
            alert(`Jogador ${player.name}, você marcou ${points} pontos nesta rodada!`);
        });
    }

    // Ordena os jogadores pelo score
    players.sort((a, b) => b.score - a.score);

    // Exibe o ranking final
    let rankingMessage = "Ranking Final:\n";
    players.forEach((player, index) => {
        rankingMessage += `${index + 1}. ${player.name} - ${player.score} pontos\n`;
    });
    alert(rankingMessage);

    // Pergunta se o usuário quer jogar novamente
    let playAgain = confirm("Deseja iniciar um novo jogo?");
    if (playAgain) {
        startGame();
    } else {
        alert("Obrigado por jogar!");
    }
}

// Inicia o jogo
startGame();
