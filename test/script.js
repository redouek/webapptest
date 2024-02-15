document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("salivaForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const patientName = formData.get("patientName");
        const date = formData.get("date");
        const time = formData.get("time");
        const location = formData.get("location");
        const unstimulatedFlow = formData.get("unstimulatedFlow");
        const phSaliva = formData.get("phSaliva");
        const stimulatedFlow = formData.get("stimulatedFlow");
        const bufferCapacity = formData.get("bufferCapacity");
        const additionalTests = formData.get("additionalTests");

        // Adicione aqui a lógica para exibir os resultados na página resultados.html conforme suas especificações
        // Por exemplo:
        document.getElementById("patientName").innerText = patientName;
        document.getElementById("date").innerText = date;
        document.getElementById("time").innerText = time;
        document.getElementById("location").innerText = location;
        document.getElementById("unstimulatedFlowResult").innerText = unstimulatedFlow;
        document.getElementById("phSalivaResult").innerText = phSaliva;
        document.getElementById("stimulatedFlowResult").innerText = stimulatedFlow;
        document.getElementById("bufferCapacityResult").innerText = bufferCapacity;
        document.getElementById("additionalTestsResult").innerText = additionalTests;

        // Redirecionar para a página de resultados
        window.location.href = "resultados.html";
    });
});
