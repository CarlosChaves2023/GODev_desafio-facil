// Função para calcular a quantidade de moedas necessárias
function getCoinCount(amount) {
    // Definir os valores das moedas disponíveis em ordem decrescente
    const coins = [500, 100, 25, 10, 5, 1];
    
    // Objeto para armazenar a quantidade de cada moeda
    const coinCount = {
        500: 0,
        100: 0,
        25: 0,
        10: 0,
        5: 0,
        1: 0
    };

    // Iterar sobre cada valor de moeda
    for (const coin of coins) {
        if (amount >= coin) {
            // Calcular o número de moedas dessa denominação
            coinCount[coin] = Math.floor(amount / coin);
            // Reduzir o valor restante
            amount %= coin;
        }
    }

    return coinCount;
}

// Obtém os elementos do DOM
const entrada = document.getElementById('entrada');
const btn = document.getElementById('btn');
const btnReset = document.getElementById('btn-reset');
const resultado = document.getElementById('resultado');

// Função para lidar com o clique no botão Enviar
function handleSubmit() {
    try {
        // Obtém o valor inserido e converte para número inteiro
        const valor = parseInt(entrada.value, 10);
        // Verifica se o valor é um número válido
        if (isNaN(valor) || valor < 0) {
            resultado.textContent = "Por favor, insira um valor inteiro positivo.";
            return;
        }
        
        // Obtém a contagem de moedas
        const contagemMoedas = getCoinCount(valor);
        // Construa uma string para exibir o resultado
        const resultadoTexto = Object.keys(contagemMoedas)
            .map(coin => `${contagemMoedas[coin]} moeda(s) de ${coin}`)
            .join(', ');

        // Exibe o resultado
        resultado.textContent = `Quantidade de moedas para R$${valor}: ${resultadoTexto}`;
    } catch (error) {
        resultado.textContent = error.message;
    }
}

// Função para limpar os campos
function handleReset() {
    entrada.value = '';
    resultado.textContent = '';
}

// Adiciona os event listeners aos botões
btn.addEventListener('click', handleSubmit);
btnReset.addEventListener('click', handleReset);
