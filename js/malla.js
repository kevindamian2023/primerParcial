const subjects = [
  { name: "Fundamentos de Programación", semester: 1, passed: false, color: "#00749e", prerequisites: [] },
  { name: "Electiva Institucional", semester: 1, passed: false, color: "#00b3b3", prerequisites: [] },
  { name: "Introducción a la ingeniería de sistemas", semester: 1, passed: false, color: "#00749e", prerequisites: [] },
  { name: "Cálculo Diferencial", semester: 1, passed: false, color: "#0c1f3f", prerequisites: [] },
  { name: "Matemáticas Discretas", semester: 1, passed: false, color: "#0c1f3f", prerequisites: [] },
  { name: "Electiva Técnicas de la Comunicación", semester: 1, passed: false, color: "#00b3b3", prerequisites: [] },
  { name: "Programación I", semester: 2, passed: false, color: "#00749e", prerequisites: ["Fundamentos de Programación"] },
  { name: "Electiva Técnica I", semester: 2, passed: false, color: "#007a7a", prerequisites: [] },
  { name: "Teoría General de Sistemas", semester: 2, passed: false, color: "#00749e", prerequisites: ["Introducción a la ingeniería de sistemas"] },
  { name: "Cálculo Integral", semester: 2, passed: false, color: "#0c1f3f", prerequisites: ["Cálculo Diferencial"] },
  { name: "Física Mecánica", semester: 2, passed: false, color: "#0c1f3f", prerequisites: ["Cálculo Diferencial"] },
  { name: "Álgebra Lineal", semester: 2, passed: false, color: "#0c1f3f", prerequisites: ["Matemáticas Discretas"] },
  { name: "Programación II", semester: 3, passed: false, color: "#00749e", prerequisites: ["Programación I"] },
  { name: "Electiva Técnica II", semester: 3, passed: false, color: "#007a7a", prerequisites: ["Electiva Técnica I"] },
  { name: "Proyecto Integrador I", semester: 3, passed: false, color: "#00749e", prerequisites: [] },
  { name: "Cálculo Vectorial", semester: 3, passed: false, color: "#0c1f3f", prerequisites: ["Cálculo Integral"] },
  { name: "Electromagnetismo", semester: 3, passed: false, color: "#0c1f3f", prerequisites: ["Física Mecánica"] },
  { name: "Probabilidad y Estadística", semester: 3, passed: false, color: "#365f7a", prerequisites: ["Álgebra Lineal"] },
  { name: "Estructura de Datos", semester: 4, passed: false, color: "#00749e", prerequisites: ["Programación II"] },
  { name: "Tendencias en ingeniería de sistemas", semester: 4, passed: false, color: "#00749e", prerequisites: ["Electiva Técnica II"] },
  { name: "Ecuaciones Diferenciales", semester: 4, passed: false, color: "#0c1f3f", prerequisites: ["Cálculo Vectorial"] },
  { name: "Ondas y Partículas", semester: 4, passed: false, color: "#0c1f3f", prerequisites: ["Electromagnetismo"] },
  { name: "Electrónica General", semester: 4, passed: false, color: "#365f7a", prerequisites: ["Probabilidad y Estadística"] },
  { name: "Electiva Socio-Humanista", semester: 4, passed: false, color: "#00b3b3", prerequisites: [] },
  { name: "Análisis y Diseño de Sistemas", semester: 5, passed: false, color: "#00749e", prerequisites: ["Estructura de Datos", ] },
  { name: "Analisis y algoritmos", semester: 5, passed: false, color: "#00749e", prerequisites: ["Estructura de Datos"] },
  { name: "Arquitectura de Computadores", semester: 5, passed: false, color: "#00749e", prerequisites: ["Electiva Técnica II"] },
  { name: "Analisis Numérico", semester: 5, passed: false, color: "#365f7a", prerequisites: ["Ecuaciones Diferenciales"] },
  { name: "Circuitos Lógicos", semester: 5, passed: false, color: "#365f7a", prerequisites: ["Electrónica General"] },
  { name: "Electiva Profecional I", semester: 5, passed: false, color: "#007a7a", prerequisites: [] },
  { name: "Base de Datos", semester: 6, passed: false, color: "#00749e", prerequisites: ["Análisis y Diseño de Sistemas"] },
  { name: "Ingenieria de Software", semester: 6, passed: false, color: "#00749e", prerequisites: ["Análisis y Diseño de Sistemas"] },
  { name: "Sistemas Operativos I", semester: 6, passed: false, color: "#00749e", prerequisites: ["Arquitectura de Computadores"] },
  { name: "Proyecto Integrador II", semester: 6, passed: false, color: "#00749e", prerequisites: ["Proyecto Integrador I"] },
  { name: "Modelado y Simulación de Sistemas", semester: 6, passed: false, color: "#365f7a", prerequisites: ["Electromagnetismo"] },
  { name: "Electiva Profesional II", semester: 6, passed: false, color: "#007a7a", prerequisites: [] },
  { name: "Gestión de Base de Datos", semester: 7, passed: false, color: "#00749e", prerequisites: ["Base de Datos"] },
  { name: "Inteligencia Artificial", semester: 7, passed: false, color: "#00749e", prerequisites: ["Ingenieria de Software"] },
  { name: "Teoria General de las Comunicaciones", semester: 7, passed: false, color: "#00749e", prerequisites: ["Sistemas Operativos I", "Analisis Numérico"] },
  { name: "Factibilidad y Evaluación de Proyectos %", semester: 7, passed: false, color: "#009ac7", prerequisites: [] },
  { name: "Metodología de la Investigación", semester: 7, passed: false, color: "#009ac7", prerequisites: [] },
  { name: "Electiva Profesional III", semester: 7, passed: false, color: "#007a7a", prerequisites: [] },
  { name: "Redes de Computadores", semester: 8, passed: false, color: "#00749e", prerequisites: ["Teoria General de las Comunicaciones"] },
  { name: "Gobierno Corporativo", semester: 8, passed: false, color: "#00749e", prerequisites: [] },
  { name: "Técnicas de la Investigación", semester: 8, passed: false, color: "#00b3b3", prerequisites: ["Metodología de la Investigación"] },
  { name: "Contra. Y Admon. De Proyectos in for. #", semester: 8, passed: false, color: "#00749e", prerequisites: [] },
  { name: "Electiva Profesional IV", semester: 8, passed: false, color: "#007a7a", prerequisites: [] },
  { name: "Electiva Profesional V", semester: 8, passed: false, color: "#007a7a", prerequisites: [] },
  { name: "Seguridad informática", semester: 9, passed: false, color: "#00749e", prerequisites: ["Inteligencia Artificial", "Redes de Computadores"] },
  { name: "Administración de Servidores", semester: 9, passed: false, color: "#00749e", prerequisites: ["Redes de Computadores"] },
  { name: "Proyecto Integrador III", semester: 9, passed: false, color: "#00749e", prerequisites: ["Proyecto Integrador II"] },
  { name: "Emprendimiento", semester: 9, passed: false, color: "#009ac7", prerequisites: [] },
  { name: "Electiva Profesional VI", semester: 9, passed: false, color: "#007a7a", prerequisites: [] },
  { name: "Trabajo de Grado", semester: 10, passed: false, color: "#007a7a", prerequisites: [] },
  { name: "Prácticas en Sistemas", semester: 10, passed: false, color: "#00749e", prerequisites: [] },
  { name: "Ética profesional &", semester: 10, passed: false, color: "#009ac7", prerequisites: [] },
  { name: "Electiva Profesional VII", semester: 10, passed: false, color: "#007a7a", prerequisites: [] },
];

const subjectsContainer = document.getElementById("subjects-container");
let showPrerequisites = false;
let markMode = false;

function renderSubjects() {
  subjectsContainer.innerHTML = "";
  const semesters = [...new Set(subjects.map(subject => subject.semester))];

  semesters.forEach(semester => {
    const semesterColumn = document.createElement("div");
    semesterColumn.classList.add("semester-column");
    semesterColumn.innerHTML = `<h2>Semestre ${semester}</h2>`;

    subjects.filter(subject => subject.semester === semester).forEach(subject => {
      const subjectDiv = document.createElement("div");
      subjectDiv.classList.add("subject");
      if (subject.passed) {
        subjectDiv.classList.add("passed");
      }
      subjectDiv.style.backgroundColor = subject.color;
      subjectDiv.textContent = subject.name;

      if (showPrerequisites && subject.prerequisites.length > 0) {
        const prerequisitesDiv = document.createElement("div");
        prerequisitesDiv.classList.add("prerequisites");
        prerequisitesDiv.innerHTML = subject.prerequisites.map(prerequisite => {
          return `<span class="prerequisite">${prerequisite}</span>`;
        }).join(", ");
        subjectDiv.appendChild(prerequisitesDiv);
      }

      if (markMode) {
        subjectDiv.onclick = () => toggleSubjectPassed(subject);
      }

      semesterColumn.appendChild(subjectDiv);
    });

    subjectsContainer.appendChild(semesterColumn);
  });
}

function toggleSubjectPassed(subject) {
  subject.passed = !subject.passed;
  renderSubjects();
}

function filterBySemester() {
  const semesterSelect = document.getElementById("semester-select");
  const selectedSemester = parseInt(semesterSelect.value);

  if (selectedSemester === 0) {
    renderSubjects();
  } else {
    const filteredSubjects = subjects.filter(subject => subject.semester === selectedSemester);
    subjectsContainer.innerHTML = "";
    const semesterColumn = document.createElement("div");
    semesterColumn.classList.add("semester-column");
    semesterColumn.innerHTML = `<h2>Semestre ${selectedSemester}</h2>`;

    filteredSubjects.forEach(subject => {
      const subjectDiv = document.createElement("div");
      subjectDiv.classList.add("subject");
      if (subject.passed) {
        subjectDiv.classList.add("passed");
      }
      subjectDiv.style.backgroundColor = subject.color;
      subjectDiv.textContent = subject.name;

      if (showPrerequisites && subject.prerequisites.length > 0) {
        const prerequisitesDiv = document.createElement("div");
        prerequisitesDiv.classList.add("prerequisites");
        prerequisitesDiv.innerHTML = subject.prerequisites.map(prerequisite => {
          return `<span class="prerequisite">${prerequisite}</span>`;
        }).join(", ");
        subjectDiv.appendChild(prerequisitesDiv);
      }

      if (markMode) {
        subjectDiv.onclick = () => toggleSubjectPassed(subject);
      }

      semesterColumn.appendChild(subjectDiv);
    });

    subjectsContainer.appendChild(semesterColumn);
  }
}

function toggleViewPrerequisites() {
  showPrerequisites = !showPrerequisites;
  renderSubjects();
}

function toggleMarkSubjects() {
  markMode = !markMode;
  const markBtn = document.getElementById("mark-btn");
  markBtn.classList.toggle("active", markMode);
  renderSubjects();
}

renderSubjects();
