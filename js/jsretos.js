document.getElementById("challengeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var answer = document.getElementById("answer").value.trim();
    var resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    if (answer === "respuesta_correcta") {
        resultDiv.className = "result correct";
        resultDiv.textContent = "¡Correcto!";
    } else {
        resultDiv.className = "result incorrect";
        resultDiv.textContent = "Respuesta incorrecta. Inténtalo de nuevo.";
    }
});