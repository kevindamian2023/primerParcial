const subjects = [
    { name: "Fundamentos de Programación", semester: 1, passed: false },
    { name: "Electiva Institucional", semester: 1, passed: false },
    { name: "Introducción a la ingeniería de sistemas", semester: 1, passed: false },
    { name: "Cálculo Diferencial", semester: 1, passed: false },
    { name: "Matemáticas Discretas", semester: 1, passed: false },
    { name: "Electiva Técnicas de la Comunicación", semester: 1, passed: false },
    { name: "Programación I", semester: 2, passed: false },
    { name: "Electiva Técnica I", semester: 2, passed: false },
    { name: "Teoría General de Sistemas", semester: 2, passed: false },
    { name: "Cálculo Integral", semester: 2, passed: false },
    { name: "Física Mecánica", semester: 2, passed: false },
    { name: "Álgebra Lineal", semester: 2, passed: false },
    { name: "Programación II", semester: 3, passed: false },
    { name: "Electiva Técnica II", semester: 3, passed: false },
    { name: "Proyecto Integrador I", semester: 3, passed: false },
    { name: "Cálculo Vectorial", semester: 3, passed: false },
    { name: "Electromagnetismo", semester: 3, passed: false },
    { name: "Probabilidad y Estadística", semester: 3, passed: false },
    { name: "Estructura de Datos", semester: 4, passed: false },
    { name: "Tendencias en ingeniería de sistemas", semester: 4, passed: false },
    { name: "Ecuaciones Diferenciales", semester: 4, passed: false },
    { name: "Ondas y Partículas", semester: 4, passed: false },
    { name: "Electrónica General", semester: 4, passed: false },
    { name: "Electiva Socio-Humanista", semester: 4, passed: false },
    { name: "Análisis y Diseños de Sistemas", semester: 5, passed: false },
    { name: "Análisis y Algoritmos", semester: 5, passed: false },
    { name: "Arquitectura de Computadores", semester: 5, passed: false },
    { name: "Análisis Númerico", semester: 5, passed: false },
    { name: "Circuitos Lógicos", semester: 5, passed: false },
    { name: "Electiva Profesional I", semester: 5, passed: false },
    { name: "Base de Datos", semester: 6, passed: false },
    { name: "Ingeniería de Software", semester: 6, passed: false },
    { name: "Sistemas operativos I", semester: 6, passed: false },
    { name: "Proyecto Integrador II", semester: 6, passed: false },
    { name: "Modelado y Simulación de Sistemas", semester: 6, passed: false },
    { name: "Electiva Profesional II", semester: 6, passed: false },
    { name: "Gestión de Base de Datos", semester: 7, passed: false },
    { name: "Inteligencia Artificial", semester: 7, passed: false },
    { name: "Teoría General de las Comunicaciones", semester: 7, passed: false },
    { name: "Factibilidad y Evaluación de Proyectos %", semester: 7, passed: false },
    { name: "Metodología de la investigación*", semester: 7, passed: false },
    { name: "Electiva Profesional III", semester: 7, passed: false },
    { name: "Redes de Computadores", semester: 8, passed: false },
    { name: "Gobierno Corporativo", semester: 8, passed: false },
    { name: "Técnicas de la investigación ", semester: 8, passed: false },
    { name: "Contra. Y Admon. De Proyectos Infor. #", semester: 8, passed: false },
    { name: "Electiva Profesional IV", semester: 8, passed: false },
    { name: "Electiva Profesional V", semester: 8, passed: false },
    { name: "Seguridad Informática", semester: 9, passed: false },
    { name: "Administración de Servidores", semester: 9, passed: false },
    { name: "Proyecto Integrador III", semester: 9, passed: false },
    { name: "Emprendimiento", semester: 9, passed: false },
    { name: "Electiva Profesional VI", semester: 9, passed: false },
    { name: "Trabajo de Grado", semester: 10, passed: false },
    { name: "Práctica en Sistemas", semester: 10, passed: false },
    { name: "ética profesional &", semester: 10, passed: false },
    { name: "Electiva Pprofesional VII", semester: 10, passed: false },
  ];
  
  let selectedSemester = 0;
  
  function filterBySemester() {
    const semesterSelect = document.getElementById("semester-select");
    selectedSemester = parseInt(semesterSelect.value);
    let filteredSubjects;
    
    if (selectedSemester === 0) {
      displaySubjects(subjects); // Mostrar todas las materias si se selecciona "Mostrar Todas"
      return;
    } else {
      filteredSubjects = subjects.filter(subject => subject.semester === selectedSemester);
    }
  
    displaySubjects(filteredSubjects);
  }
  
  function togglePassed(index) {
    const subject = subjects[index];
    if (selectedSemester === 0 || subject.semester === selectedSemester) {
      subject.passed = !subject.passed;
      displaySubjects(subjects); // Vuelve a mostrar las materias después de cambiar el estado de aprobación
    }
  }
  
  function displaySubjects(subjects) {
    const subjectsContainer = document.getElementById("subjects-container");
    subjectsContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevas materias
    
    subjects.forEach((subject, index) => {
      if (subject.semester === selectedSemester || selectedSemester === 0) {
        const subjectElement = document.createElement("div");
        subjectElement.classList.add("subject");
        subjectElement.textContent = subject.name;
        if (subject.passed) {
          subjectElement.classList.add("passed");
        }
        subjectElement.addEventListener("click", () => togglePassed(index)); // Agregar evento de clic para marcar/desmarcar la materia
        subjectsContainer.appendChild(subjectElement);
      }
    });
  }
  
  filterBySemester(); // Mostrar todas las materias al cargar la página por primera vez
  
  