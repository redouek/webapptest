$(document).ready(function() {
  $("#formulario").validate({
    rules: {
      nome: {
        required: true,
        minlength: 3
      },
      data: {
        required: true
      },
      hora: {
        required: true
      },
      fluxo_nao_estimulado: {
        required: true,
        number: true
      },
      ph: {
        required: true,
        number: true
      },
      fluxo_estimulado: {
        required: true,
        number: true
      },
      capacidade_tampao: {
        required: true,
        number: true
      }
    },
    messages: {
      nome: {
        required: "Por favor, digite seu nome completo.",
        minlength: "O nome deve ter pelo menos 3 caracteres."
      },
      data: {
        required: "Por favor, digite a data do exame."
      },
      hora: {
        required: "Por favor, digite a hora do exame."
      },
      fluxo_nao_estimulado: {
        required: "Por favor, digite o resultado do fluxo não-estimulado.",
        number: "O resultado deve ser um número."
      },
      ph: {
        required: "Por favor, digite o resultado do pH salivar.",
        number: "O resultado deve ser um número."
      },
      fluxo_estimulado: {
        required: "Por favor, digite o resultado do fluxo estimulado.",
        number: "O resultado deve ser um número."
      },
      capacidade_tampao: {
        required: "Por favor, digite o resultado da capacidade tampão.",
        number: "O resultado deve ser um número."
      }
    }
  });
});
