// Função para achatar e ordenar a matriz
function flattenAndSort(matrix) {
    const flattenedArray = matrix.flat();
    flattenedArray.sort((a, b) => a - b);
    return flattenedArray;
}

// Função para processar a entrada e mostrar o resultado
function processInput() {
    // Obtém o valor da entrada
    const inputElement = document.getElementById('entrada');
    const inputValue = inputElement.value;

    try {
        // Converte o valor da entrada para um array de arrays
        // Usa o JSON.parse para transformar a string em um array de arrays
        const matrix = JSON.parse(`[${inputValue}]`);

        // Verifica se a matriz é um array de arrays de números
        if (!Array.isArray(matrix) || !matrix.every(Array.isArray)) {
            throw new Error('A entrada deve ser um array de arrays.');
        }

        // Chama a função flattenAndSort
        const sortedArray = flattenAndSort(matrix);

        // Mostra o resultado no elemento de resultado
        const resultElement = document.getElementById('resultado');
        resultElement.textContent = `Resultado: ${sortedArray.join(', ')}`;

    } catch (error) {
        // Mostra uma mensagem de erro em caso de problemas com a entrada
        const resultElement = document.getElementById('resultado');
        resultElement.textContent = `Erro: ${error.message}`;
    }
}

function clearFields() {
    // Limpa o campo de entrada
    const inputElement = document.getElementById('entrada');
    inputElement.value = '';

    // Limpa o campo de resultado
    const resultElement = document.getElementById('resultado');
    resultElement.textContent = '';
}

// Adiciona o evento ao botão "Limpar"
document.getElementById('btn-reset').addEventListener('click', clearFields);

// Adiciona o evento ao botão
document.getElementById('btn').addEventListener('click', processInput);
