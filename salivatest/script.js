$(document).ready(function() {
  // Funcionalidade de validação de dados
  $("#formulario").validate({
    rules: {
      nome: {
        required: true,
        minlength: 3
      },
      data: {
        required: true,
        date: true
      },
      hora: {
        required: true,
        time: true
      },
      local: {
        required: true
      },
      fluxo_nao_estimulado: {
        number: true
      },
      ph: {
        number: true
      },
      fluxo_estimulado: {
        number: true
      },
      capacidade_tampao: {
        number: true
      }
    },
    messages: {
      nome: {
        required: "Por favor, digite seu nome completo.",
        minlength: "O nome deve ter no mínimo 3 caracteres."
      },
      data: {
        required: "Por favor, selecione uma data.",
        date: "A data informada é inválida."
      },
      hora: {
        required: "Por favor, selecione uma hora.",
        time: "A hora informada é inválida."
      },
      local: {
        required: "Por favor, informe o local do exame."
      }
    }
  });

  // Funcionalidade de tratamento de erros
  $("#formulario").submit(function(event) {
    if (!$("#formulario").valid()) {
      event.preventDefault();
      alert("Erro ao enviar os dados. Verifique os campos obrigatórios e os formatos válidos.");
    }
  });

  // Funcionalidade de impressão
  $("#imprimir").click(function() {
    window.print();
  });

  // Funcionalidade de salvar em PDF
  $("#salvar-em-pdf").click(function() {
    var doc = new jsPDF();
    doc.text("Resultados do Exame Saliva PRO", 10, 10);
    // ... adicionar código para gerar o conteúdo do PDF ...
    doc.save("resultados-exame-saliva-pro.pdf");
  });

  // Funcionalidade de redirecionamento
  $("#iniciar-novo-teste").click(function() {
    window.location.href = "teste-saliva-pro.html";
  });
});
