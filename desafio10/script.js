// Função para calcular o fatorial
function factorial(n) {
    if (n < 0) {
        throw new Error("Fatorial de número negativo não é definido.");
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
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
        if (isNaN(valor)) {
            resultado.textContent = "Por favor, insira um número válido.";
            return;
        }
        // Calcula o fatorial e exibe o resultado
        const fatorial = factorial(valor);
        resultado.textContent = `Fatorial de ${valor} é ${fatorial}.`;
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
