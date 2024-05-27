const semesterInfo = {
    1: { 
        title: "Semestre 1", 
        content: "En este semestre encontraras lo principal para seguir avanzando a los demas semestres, materias importantes y necesarias que te haran todo un experto, es normal que tengas dificultades en algunas asignaturas pero no te preocupes, tambien encontraras unos enlaces que te ayudaran a saber lo necesario para ir entendiendo, si quieres ser un profesional no dejes de aprender.",
        images: [
            { title: "Imagen 1 del Semestre 1", src: "../img/fondo.jpg" },
            { title: "Imagen 2 del Semestre 1", src: "../img/fondo.jpg" }
        ],
        links: [
            { text: "Enlace 1", url: "https://ejemplo.com/enlace1" },
            { text: "Enlace 2", url: "https://ejemplo.com/enlace2" }
        ]
    },
    2: { 
        title: "Semestre 2", 
        content: "En este semestre encontraras lo principal para seguir avanzando a los demas semestres, materias importantes y necesarias que te haran todo un experto, es normal que tengas dificultades en algunas asignaturas pero no te preocupes, tambien encontraras unos enlaces que te ayudaran a saber lo necesario para ir entendiendo, si quieres ser un profesional no dejes de aprender.",
        image: "ruta/a/imagen2.jpg",
        links: [
            { text: "Enlace 1", url: "https://ejemplo.com/enlace1" },
            { text: "Enlace 2", url: "https://ejemplo.com/enlace2" }
        ]
    },
    3: { 
        title: "Semestre 3", 
        content: "Este es el contenido del semestre 3 de Ingeniería de Sistemas.",
        image: "ruta/a/imagen3.jpg",
        links: [
            { text: "Enlace 1", url: "https://ejemplo.com/enlace1" },
            { text: "Enlace 2", url: "https://ejemplo.com/enlace2" }
        ]
    },
    4: { 
        title: "Semestre 4", 
        content: "Este es el contenido del semestre 4 de Ingeniería de Sistemas.",
        image: "ruta/a/imagen4.jpg",
        links: [
            { text: "Enlace 1", url: "https://ejemplo.com/enlace1" },
            { text: "Enlace 2", url: "https://ejemplo.com/enlace2" }
        ]
    },
    5: { 
        title: "Semestre 5", 
        content: "Este es el contenido del semestre 5 de Ingeniería de Sistemas.",
        image: "ruta/a/imagen5.jpg",
        links: [
            { text: "Enlace 1", url: "https://ejemplo.com/enlace1" },
            { text: "Enlace 2", url: "https://ejemplo.com/enlace2" }
        ]
    },
    6: { 
        title: "Semestre 6", 
        content: "Este es el contenido del semestre 6 de Ingeniería de Sistemas.",
        image: "ruta/a/imagen6.jpg",
        links: [
            { text: "Enlace 1", url: "https://ejemplo.com/enlace1" },
            { text: "Enlace 2", url: "https://ejemplo.com/enlace2" }
        ]
    },
    7: { 
        title: "Semestre 7", 
        content: "Este es el contenido del semestre 7 de Ingeniería de Sistemas.",
        image: "ruta/a/imagen7.jpg",
        links: [
            { text: "Enlace 1", url: "https://ejemplo.com/enlace1" },
            { text: "Enlace 2", url: "https://ejemplo.com/enlace2" }
        ]
    },
    8: { 
        title: "Semestre 8", 
        content: "Este es el contenido del semestre 8 de Ingeniería de Sistemas.",
        image: "ruta/a/imagen8.jpg",
        links: [
            { text: "Enlace 1", url: "https://ejemplo.com/enlace1" },
            { text: "Enlace 2", url: "https://ejemplo.com/enlace2" }
        ]
    },
    9: { 
        title: "Semestre 9", 
        content: "Este es el contenido del semestre 9 de Ingeniería de Sistemas.",
        image: "ruta/a/imagen9.jpg",
        links: [
            { text: "Enlace 1", url: "https://ejemplo.com/enlace1" },
            { text: "Enlace 2", url: "https://ejemplo.com/enlace2" }
        ]
    },
    10: { 
        title: "Semestre 10", 
        content: "Este es el contenido del semestre 10 de Ingeniería de Sistemas.",
        image: "ruta/a/imagen10.jpg",
        links: [
            { text: "Enlace 1", url: "https://ejemplo.com/enlace1" },
            { text: "Enlace 2", url: "https://ejemplo.com/enlace2" }
        ]
    }
};

function updateSemesterInfo(semester) {
    const info = semesterInfo[semester];
    let content = `<h2>Información del ${info.title}</h2><p>${info.content}</p>`;
    if (info.images && info.images.length > 0) {
        content += '<div class="image-container">';
        for (const image of info.images) {
            content += `<div><img src="${image.src}" alt="${image.title}" title="${image.title}"></div>`;
        }
        content += '</div>';
    }
    if (info.links && info.links.length > 0) {
        content += '<h3>Enlaces de interés:</h3><ul>';
        for (const link of info.links) {
            content += `<li><a href="${link.url}" target="_blank">${link.text}</a></li>`;
        }
        content += '</ul>';
    }
    document.getElementById('semester-info').innerHTML = content;
}

function createSemesterButtons() {
    const buttonsContainer = document.getElementById('semester-buttons');
    for (let i = 1; i <= 10; i++) {
        const button = document.createElement('button');
        button.textContent = `Semestre ${i}`;
        button.classList.add('semester-button');
        button.onclick = () => updateSemesterInfo(i);
        buttonsContainer.appendChild(button);
    }
}

createSemesterButtons();