const challenges = {
  calculo: [
    { 
      title: "Pregunta 1", 
      description: "Resuelve la integral de x^2.", 
      answer: "x^3/3 + C" 
    },
    { 
      title: "Pregunta 2", 
      description: "Calcula el límite de (x^2 - 1)/(x - 1) cuando x tiende a 1.", 
      answer: "2" 
    },
  ],
  programacion: [
    { 
      title: "Pregunta 1", 
      description: "¿ Cual es el método en Python que se utiliza para agregar un elemento al final de una lista ?.", 
      answer: "append" 
    },
    { 
      title: "Pregunta 2", 
      description: "¿ Que es un bucle FOR ?.", 
      answer: "es una estructura de control que permite repetir un bloque de codigo un numero determinado de veces" 
    },
  ],
  fisica: [
    { 
      title: "Pregunta 1", 
      description: "¿Cual es la ley de Newton que establece que A TODA ACCIÓN HAY SIEMPRE UNA REACCIÓN IGUAL Y OPUESTA ?", 
      answer: "la tercera ley de Newton" 
    },
    { 
      title: "Pregunta 2", 
      description: "Cual es la fórmula para calcular la fuerza necesaria para mover un objeto", 
      answer: "F = m.a" 
    },
  ],
};

function showChallenge(type) {
  const challengeContainer = document.getElementById("challenge-container");
  challengeContainer.innerHTML = "";
  challengeContainer.style.display = "block";

  const selectedChallenges = challenges[type];
  selectedChallenges.forEach((challenge, index) => {
    const challengeDiv = document.createElement("div");
    challengeDiv.classList.add("challenge");

    const challengeTitle = document.createElement("h2");
    challengeTitle.textContent = challenge.title;

    const challengeDescription = document.createElement("p");
    challengeDescription.textContent = challenge.description;

    const responseForm = document.createElement("form");
    responseForm.classList.add("response-form");
    responseForm.innerHTML = `
      <textarea placeholder="Ingresa tu respuesta aquí..."></textarea>
      <button type="button" onclick="submitResponse(${index}, '${type}')">Enviar Respuesta</button>
      <div class="response-message"></div>
    `;

    challengeDiv.appendChild(challengeTitle);
    challengeDiv.appendChild(challengeDescription);
    challengeDiv.appendChild(responseForm);

    challengeContainer.appendChild(challengeDiv);
  });
}

function submitResponse(index, type) {
  const challenge = challenges[type][index];
  const response = document.querySelectorAll('.response-form textarea')[index].value;
  const responseMessage = document.querySelectorAll('.response-message')[index];

  if (response) {
    if (response.toLowerCase() === challenge.answer.toLowerCase()) {
      responseMessage.textContent = "¡Respuesta Correcta!";
      responseMessage.style.color = "green";
    } else {
      responseMessage.textContent = `Respuesta Incorrecta. La respuesta correcta es: ${challenge.answer}`;
      responseMessage.style.color = "red";
    }
    document.querySelectorAll('.response-form textarea')[index].value = '';
  } else {
    responseMessage.textContent = 'Por favor, ingresa una respuesta.';
    responseMessage.style.color = "red";
  }
}
