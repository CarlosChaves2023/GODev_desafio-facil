// Função para verificar se o código é válido
function isValidCode(code) {
    // Converter o código para string e remover espaços
    const codeStr = code.toString().replace(/\s+/g, '');
    
    // Verificar se o código tem pelo menos 2 dígitos
    if (codeStr.length < 2) {
        return false;
    }
    
    // Inicializar variáveis para somar os dígitos das posições pares e ímpares
    let sumEven = 0;
    let sumOdd = 0;
    
    // Iterar sobre os dígitos do código
    for (let i = 0; i < codeStr.length; i++) {
        const digit = parseInt(codeStr[i], 10);
        if ((i + 1) % 2 === 0) {
            // Posições pares (baseado em 1-indexed)
            sumEven += digit;
        } else {
            // Posições ímpares (baseado em 1-indexed)
            sumOdd += digit;
        }
    }
    
    // Calcular o resultado do dígito verificador
    const result = (sumEven * 3) + sumOdd;
    const remainder = result % 10;
    const checkDigit = remainder === 0 ? 0 : 10 - remainder;

    // O último dígito do código deve ser o dígito verificador calculado
    return parseInt(codeStr[codeStr.length - 1], 10) === checkDigit;
}

// Função para processar o código e atualizar o resultado
function processCode() {
    const inputElement = document.getElementById('entrada');
    const resultElement = document.getElementById('resultado');
    const code = inputElement.value;

    // Verificar se o código tem exatamente 12 dígitos
    if (code.replace(/\D/g, '').length === 12) {
        const valid = isValidCode(code);
        resultElement.textContent = valid ? 'Código Válido' : 'Código Inválido';
    } else {
        resultElement.textContent = 'Por favor, insira um código com exatamente 12 dígitos.';
    }
}

// Configurar os eventos de clique para os botões
document.getElementById('btn').addEventListener('click', processCode);
document.getElementById('btn-reset').addEventListener('click', () => {
    document.getElementById('entrada').value = '';
    document.getElementById('resultado').textContent = '';
});
