// Validação do CPF
function validarCPF(cpf) {
    // Implementação da validação do CPF
    return true; // Retorna true se o CPF for válido, caso contrário, retorna false
}

// Evento de envio do formulário
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coleta dos dados do formulário
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const email = document.getElementById("email").value;
    const cpf = document.getElementById("cpf").value;
    const cro = document.getElementById("cro").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;
    const telefoneFixo = document.getElementById("telefoneFixo").value;
    const celular = document.getElementById("celular").value;
    const dataNascimento = document.getElementById("dataNascimento").value;

    // Validação do CPF
    if (!validarCPF(cpf)) {
        alert("CPF inválido. Por favor, insira um CPF válido.");
        return;
    }

    // Aqui você pode adicionar o código para enviar os dados para o servidor ou armazená-los localmente

    // Exemplo de envio dos dados para o console para fins de demonstração
    console.log("Dados do formulário:");
    console.log("Nome:", nome);
    console.log("Sobrenome:", sobrenome);
    console.log("E-mail:", email);
    console.log("CPF:", cpf);
    console.log("CRO:", cro);
    console.log("Cidade:", cidade);
    console.log("Estado:", estado);
    console.log("Telefone Fixo:", telefoneFixo);
    console.log("Celular:", celular);
    console.log("Data de Nascimento:", dataNascimento);

    // Limpa o formulário após o envio
    this.reset();
});

// Função para análise dos resultados do teste salivar
function analisarResultados() {
    // Coleta dos dados inseridos pelo usuário
    const fluxoNaoEstimuladoResultado = parseFloat(document.getElementById("fluxoNaoEstimuladoResultado").value);
    const phResultado = parseFloat(document.getElementById("phResultado").value);
    const fluxoEstimuladoResultado = parseFloat(document.getElementById("fluxoEstimuladoResultado").value);
    const capacidadeTampaoResultado = parseFloat(document.getElementById("capacidadeTampaoResultado").value);
    const examesComplementaresResultado = parseFloat(document.getElementById("examesComplementaresResultado").value);

    // Análise dos resultados
    const resultados = [];
    if (fluxoNaoEstimuladoResultado <= 0.1) {
        resultados.push("Hipossalivação");
    } else if (fluxoNaoEstimuladoResultado >= 0.3 && fluxoNaoEstimuladoResultado <= 0.4) {
        resultados.push("Normal");
    }

    if (phResultado >= 6 && phResultado <= 6.8) {
        resultados.push("Normal");
    } else if (phResultado >= 7.54 && phResultado <= 10.12) {
        resultados.push("Caso de gengivite");
    } else if (phResultado >= 9.39 && phResultado <= 13.91) {
        resultados.push("Caso de periodontite");
    }

    // Adicione as outras análises de acordo com as especificações

    // Exibição dos resultados
    alert("Resultados do teste salivar:\n\n" + resultados.join("\n"));
}

// Evento de envio do formulário
document.getElementById("testeSalivaForm").addEventListener("submit", function(event) {
   

