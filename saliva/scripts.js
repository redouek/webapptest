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
   
// Evento de envio do formulário
document.getElementById("testeSalivaForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Chamada da função para analisar os resultados do teste salivar
    analisarResultados();
    
    // Limpa o formulário após o envio
    this.reset();
});

// Evento de envio do formulário de login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Simulação de login bem-sucedido (substitua esta lógica pela autenticação real)
    const cpf = document.getElementById("cpf").value;
    const senha = document.getElementById("senha").value;

    if (cpf === "12345678900" && senha === "senha123") { // Exemplo de CPF e senha
        alert("Login bem-sucedido!");
        window.location.href = "dashboard.html"; // Redireciona para a página de Dashboard
    } else {
        alert("CPF ou senha incorretos. Por favor, tente novamente.");
    }
});

                                                            // Função para atualizar a barra de navegação com base no estado de login do usuário
function atualizarBarraNavegacao(usuarioLogado) {
    const barraNavegacao = document.getElementById("barraNavegacao");
    const saudacaoUsuario = document.getElementById("saudacaoUsuario");
    const botaoSair = document.getElementById("botaoSair");

    if (usuarioLogado) {
        // Usuário logado: exibe saudação e botão de sair
        saudacaoUsuario.textContent = "Olá, " + usuarioLogado.nome;
        saudacaoUsuario.style.display = "inline-block";
        botaoSair.style.display = "inline-block";
    } else {
        // Usuário não logado: oculta saudação e botão de sair
        saudacaoUsuario.style.display = "none";
        botaoSair.style.display = "none";
    }
}

// Evento de clique no botão de sair
document.getElementById("botaoSair").addEventListener("click", function() {
    // Limpa o estado de login (simulação)
    usuarioLogado = null;
    atualizarBarraNavegacao(usuarioLogado);
    alert("Você foi desconectado com sucesso!");
});

// Chamada inicial para atualizar a barra de navegação com base no estado de login atual
atualizarBarraNavegacao(usuarioLogado);
