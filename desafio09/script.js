// Função para verificar se a frequência das letras é igual
function hasEqualLetterFrequency(str) {
    // Remover caracteres não alfabéticos e converter a string para minúsculas
    const cleanedStr = str.toLowerCase().replace(/[^a-z]/g, '');
    
    // Criar um objeto para armazenar a frequência de cada letra
    const frequency = {};

    // Contar a frequência de cada letra
    for (const char of cleanedStr) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    // Obter as frequências dos caracteres
    const freqValues = Object.values(frequency);

    // Verificar se todas as frequências são iguais
    const firstFrequency = freqValues[0];
    return freqValues.every(freq => freq === firstFrequency);
}

// Função para atualizar o resultado
function updateResult() {
    // Obter o valor do campo de entrada
    const input = document.getElementById('entrada').value;

    // Verificar se a frequência das letras é igual
    const isEqual = hasEqualLetterFrequency(input);
    
    // Atualizar o conteúdo do parágrafo com o resultado (true ou false)
    document.getElementById('resultado').textContent = isEqual;
}

// Função para limpar o campo de entrada e o resultado
function clearFields() {
    document.getElementById('entrada').value = '';
    document.getElementById('resultado').textContent = '';
}

// Adicionar os listeners de eventos aos botões
document.getElementById('btn').addEventListener('click', updateResult);
document.getElementById('btn-reset').addEventListener('click', clearFields);
