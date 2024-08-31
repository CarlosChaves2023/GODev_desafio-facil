// Função para gerar pares ordenados
function generateOrderedPairs(x, y) {
    const pairs = [];

    // Garantir que x e y sejam não negativos
    if (x < 0 || y < 0) {
        throw new Error("x e y devem ser não negativos.");
    }

    // Gerar todos os pares (i, j) onde 0 <= i <= x e 0 <= j <= y
    for (let j = 0; j <= y; j++) {
        for (let i = 0; i <= x; i++) {
            pairs.push([i, j]);
        }
    }

    return pairs;
}

// Obtém os elementos do DOM
const entrada = document.getElementById('entrada');
const btn = document.getElementById('btn');
const btnReset = document.getElementById('btn-reset');
const resultado = document.getElementById('resultado');

// Função para lidar com o clique no botão Enviar
function handleSubmit() {
    try {
        // Obtém o valor inserido e divide em dois números
        const valores = entrada.value.split(',').map(v => parseInt(v.trim(), 10));
        // Verifica se os valores são números válidos
        if (valores.length !== 2 || valores.some(isNaN)) {
            resultado.textContent = "Por favor, insira dois números separados por vírgula.";
            return;
        }
        
        const [x, y] = valores;

        // Gera os pares ordenados e exibe o resultado
        const pares = generateOrderedPairs(x, y);
        resultado.textContent = `Pares ordenados: ${pares.map(pair => `(${pair[0]}, ${pair[1]})`).join(', ')}`;
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
