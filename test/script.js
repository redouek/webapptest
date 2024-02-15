document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("salivaForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const patientName = formData.get("patientName");
        const date = formData.get("date");
        const time = formData.get("time");
        const location = formData.get("location");
        const unstimulatedFlow = parseFloat(formData.get("unstimulatedFlow"));
        const phSaliva = parseFloat(formData.get("phSaliva"));
        const stimulatedFlow = parseFloat(formData.get("stimulatedFlow"));
        const bufferCapacity = parseFloat(formData.get("bufferCapacity"));
        const additionalTests = formData.get("additionalTests");

        // Análise dos resultados
        let unstimulatedFlowResult = "";
        if (unstimulatedFlow <= 0.1) {
            unstimulatedFlowResult = "hipossalivação";
        } else if (unstimulatedFlow >= 0.3 && unstimulatedFlow <= 0.4) {
            unstimulatedFlowResult = "fluxo normal";
        }

        let phSalivaResult = "";
        if (phSaliva >= 6 && phSaliva <= 6.8) {
            phSalivaResult = "pH salivar normal";
        } else if (phSaliva >= 7.54 && phSaliva <= 10.12) {
            phSalivaResult = "Caso de gengivite";
        } else if (phSaliva >= 9.39 && phSaliva <= 13.91) {
            phSalivaResult = "Caso de periodontite";
        }

        let stimulatedFlowResult = "";
        if (stimulatedFlow >= 1 && stimulatedFlow <= 2) {
            stimulatedFlowResult = "fluxo normal";
        } else if (stimulatedFlow < 0.5) {
            stimulatedFlowResult = "hipossalivação";
        }

        let bufferCapacityResult = "";
        if (bufferCapacity < 4.0) {
            bufferCapacityResult = "baixa capacidade tampão";
        }

        // Redirecionar para a página de resultados
        window.location.href = `resultados.html?patientName=${patientName}&date=${date}&time=${time}&location=${location}&unstimulatedFlow=${unstimulatedFlow}&phSaliva=${phSaliva}&stimulatedFlow=${stimulatedFlow}&bufferCapacity=${bufferCapacity}&additionalTests=${additionalTests}&unstimulatedFlowResult=${unstimulatedFlowResult}&phSalivaResult=${phSalivaResult}&stimulatedFlowResult=${stimulatedFlowResult}&bufferCapacityResult=${bufferCapacityResult}`;
    });
});
