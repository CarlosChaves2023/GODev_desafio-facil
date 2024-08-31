// Função para abreviar o nome completo
function abbreviateName(fullName) {
    // Dividir o nome completo em partes usando o espaço como separador
    const nameParts = fullName.trim().split(/\s+/);
    
    // Se não houver nomes ou apenas um nome fornecido, retornar o nome em maiúsculas
    if (nameParts.length === 0) return '';
    if (nameParts.length === 1) return nameParts[0].toUpperCase();

    // Criar a string de nomes abreviados
    const abbreviatedNames = nameParts.slice(0, -1)
        .map(name => name.charAt(0).toUpperCase() + '.')
        .join(' ');

    // O último nome em letras maiúsculas
    const lastName = nameParts[nameParts.length - 1].toUpperCase();

    // Retornar o resultado concatenado
    return `${lastName} ${abbreviatedNames}`;
}

// Função para processar a entrada e mostrar o resultado
function processInput() {
    // Obtém o valor da entrada
    const inputElement = document.getElementById('entrada');
    const inputValue = inputElement.value;

    // Chama a função abbreviateName
    const abbreviatedName = abbreviateName(inputValue);

    // Mostra o resultado no elemento de resultado
    const resultElement = document.getElementById('resultado');
    resultElement.textContent = `Nome Abreviado: ${abbreviatedName}`;
}

// Função para limpar a entrada e o resultado
function clearFields() {
    // Limpa o campo de entrada
    const inputElement = document.getElementById('entrada');
    inputElement.value = '';

    // Limpa o campo de resultado
    const resultElement = document.getElementById('resultado');
    resultElement.textContent = '';
}

// Adiciona o evento ao botão "Enviar"
document.getElementById('btn').addEventListener('click', processInput);

// Adiciona o evento ao botão "Limpar"
document.getElementById('btn-reset').addEventListener('click', clearFields);
