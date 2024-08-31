// Definição da classe Person
class Person {
    constructor(firstName, lastName, birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = new Date(birthDate); // Espera uma string no formato 'YYYY-MM-DD'
        this.flightLicense = false;
    }

    generateLicense() {
        // Garantir que a licença só seja gerada se ainda não existir
        if (this.flightLicense) {
            console.log("License already exists.");
            return;
        }

        // Extrair informações da data de nascimento
        const year = this.birthDate.getFullYear();
        const month = String(this.birthDate.getMonth() + 1).padStart(2, '0'); // Meses são 0-indexados
        const decadeDigit = String(Math.floor(year / 10) % 10); // Algarismo da década
        const yearDigit = String(year % 10); // Último dígito do ano

        // Processar sobrenome
        let processedLastName = this.lastName.toUpperCase().padEnd(5, '9');
        if (processedLastName.length > 5) {
            processedLastName = processedLastName.substring(0, 5);
        }

        // Criar a licença de voo
        this.flightLicense = `${processedLastName}-${decadeDigit}${month}${yearDigit}.${this.firstName[0].toLowerCase()}`;

        console.log("Generated flight license:", this.flightLicense);
    }
}

// Obtém os elementos do DOM
const nomeInput = document.getElementById('nome');
const sobrenomeInput = document.getElementById('sobrenome');
const nascimentoInput = document.getElementById('nascimento');
const btn = document.getElementById('btn');
const btnReset = document.getElementById('btn-reset');
const resultado = document.getElementById('resultado');

// Função para lidar com o clique no botão Enviar
function handleSubmit() {
    // Obtém os valores dos campos de entrada
    const firstName = nomeInput.value.trim();
    const lastName = sobrenomeInput.value.trim();
    const birthDate = nascimentoInput.value.trim();

    try {
        // Cria uma instância da classe Person e gera a licença
        const person = new Person(firstName, lastName, birthDate);
        person.generateLicense();

        // Exibe a licença gerada
        resultado.textContent = `Licença gerada: ${person.flightLicense}`;
    } catch (error) {
        resultado.textContent = `Erro: ${error.message}`;
    }
}

// Função para limpar os campos e o resultado
function handleReset() {
    nomeInput.value = '';
    sobrenomeInput.value = '';
    nascimentoInput.value = '';
    resultado.textContent = '';
}

// Adiciona os event listeners aos botões
btn.addEventListener('click', handleSubmit);
btnReset.addEventListener('click', handleReset);
