//CLASE MOLDE PARA EJERCICIOS
class Ejercicio {
  constructor(id, nombre, musculo, video, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.musculo = musculo;
    this.video = video;
    this.imagen = imagen;
  }
}

//OBJETOS DE EJERCICIOS
const pressPlanoConBarra = new Ejercicio(
  1,
  "PRESS PLANO CON BARRA",
  "PECTORALES",
  "https://www.instagram.com/tv/CeeIDoQj7QI/?igshid=MzRlODBiNWFlZA==",
  "pectorales.png"
);
const pressPlanoConMancuernas = new Ejercicio(
  2,
  "PRESS PLANO CON MANCUERNAS",
  "PECTORALES",
  "https://www.instagram.com/tv/CeeIPgADJAq/?igshid=MzRlODBiNWFlZA==",
  "pectorales.png"
);
const dominadasColgado = new Ejercicio(
  3,
  "DOMINADAS COLGADO",
  "DORSALES",
  "https://www.instagram.com/tv/CeeJkUYjpOj/?igshid=MzRlODBiNWFlZA==",
  "espalda.png"
);

const dominadasEnMaquina = new Ejercicio(
  4,
  "DOMINADAS EN MAQUINA",
  "DORSALES",
  "https://www.instagram.com/tv/CeeJwcZD00Y/?igshid=MzRlODBiNWFlZA==",
  "espalda.png"
);

//BASE DE DATOS DE EJERCICIO
const ejerciciosBD = [
  pressPlanoConBarra,
  pressPlanoConMancuernas,
  dominadasColgado,
  dominadasEnMaquina,
];

//ELEMENTOS DEL DOM

const dias = document.querySelector("#dias");
const btnDia = document.querySelector("#btnDia");
const seccionRutina = document.querySelector("#rutina");
const series = document.querySelector("#series");
const repeticiones = document.querySelector("#repeticiones");
const inputBuscar = document.querySelector("#inputBuscador");
const btnAgregaEjercicio = document.querySelector("#btnAgregaEjercicio");
const seccionIngresoDatos = document.querySelector("#sectionPrimera");
const divResultados = document.querySelector("#resultados");

//EVENTO QUE AGREGA EL NÚMERO DE DIA
btnDia.addEventListener("click", function () {
  rutina.innerHTML += `<div class="tituloDia"><h3 data-id="">DIA DE ENTRENAMIENTO: ${dias.value}</h3><a href="#" class="btnQuitarDia" data-id="${dias.value}"><img class="imagenX" src="./img/cerrar.png" alt="icono de una x"/></a></div>`;
  const botonesQuitar = document.querySelectorAll(".btnQuitarDia");
  for (const boton of botonesQuitar) {
    boton.addEventListener("click", (event) => {
      event.preventDefault();
      const idDia = Number(boton.dataset.id);
      const diaAEliminar = document.querySelector(`[data-id="${idDia}"]`);
      if (diaAEliminar) {
        seccionRutina.removeChild(diaAEliminar.parentElement);
      }
    });
  }
});
//Arreglo para ir subiendo los ejercicios que asigno a la rutina
const ejerciciosRutina = [];
//Botón que agrega el ejercicio seleccionado en el buscador en la sección de rutina
btnAgregaEjercicio.addEventListener("click", function () {
  //Buscao por indice la coincidicencia que existe en el array de los ejercicios
  const ejercicio = inputBuscar.value.toUpperCase();
  const indice = ejerciciosBD.findIndex((el) => el.nombre === ejercicio);
  //Renderizo en la sección de rutina asi se visualizan los ejercicios
  seccionRutina.innerHTML += `<div class="ejercicio">
  <div class="divMusculo"><img class="imagenX" src="./img/${ejerciciosBD[indice].imagen}" alt="icono video"/>  
  <p>${ejerciciosBD[indice].musculo}</p></div>
    <div class="divNombre"><p class="nombreEjercicio">${ejerciciosBD[indice].nombre}</p>
    <p>SERIES: ${series.value}   REPETICIONES: ${repeticiones.value}</p></div>   
    <div class="divBotones"><a href="${ejerciciosBD[indice].video}" target="_blank"><img class="imagenX" src="./img/video.png" alt="icono video"/></a>
    <a href="#" class="btnQuitar" data-id="${ejerciciosBD[indice].id}"><img class="imagenX" src="./img/cerrar.png" alt="icono de una x"/></a></div>
  </div>`;
  //Pusheo el array de ejercicioRutina para tener una lista guardada
  ejerciciosRutina.push(ejerciciosBD[indice]);
  //Necesito un botón eliminar para sacar de a un ejercicio si fuera necesario
  const botonesQuitar = document.querySelectorAll(".btnQuitar");
  //Recorro los botones existentes para crear el evento
  for (const boton of botonesQuitar) {
    boton.addEventListener("click", (event) => {
      event.preventDefault();
      const idEjercicio = Number(boton.dataset.id);
      const ejercicioAEliminar = document.querySelector(
        `[data-id="${idEjercicio}"]`
      );
      if (ejercicioAEliminar) {
        seccionRutina.removeChild(ejercicioAEliminar.parentElement);
        // Eliminar el ejercicio de ejerciciosRutina
        const indiceAEliminar = ejerciciosRutina.findIndex(
          (el) => el.id === idProducto
        );
        if (indiceAEliminar !== -1) {
          ejerciciosRutina.splice(indiceAEliminar, 1);
        }
      }
    });
  }
});

//Input buscador que despliega una lista de las coincidencias

// Evento input para detectar la entrada del usuario
inputBuscar.addEventListener("input", function () {
  const textoBuscado = inputBuscar.value.trim().toUpperCase();

  // Limpia el contenido anterior de resultados
  divResultados.innerHTML = "";

  if (textoBuscado === "") {
    return; // Si no hay texto, no se muestra la lista desplegable
  }

  // Filtro ejercicios que coincidan con el texto buscado
  const coincidencias = ejerciciosBD.filter((ejercicio) =>
    ejercicio.nombre.toUpperCase().includes(textoBuscado)
  );

  // Creo y muestro la lista de coincidencias
  if (coincidencias.length > 0) {
    const listaCoincidencias = document.createElement("ul");

    coincidencias.forEach((ejercicio) => {
      const itemLista = document.createElement("li");
      itemLista.textContent = ejercicio.nombre;
      itemLista.addEventListener("click", () => {
        // Cuando se hace clic en un elemento de la lista, se completa el valor en el input
        inputBuscar.value = ejercicio.nombre;
        // Limpio la lista de resultados
        divResultados.innerHTML = "";
      });
      listaCoincidencias.appendChild(itemLista);
    });

    divResultados.appendChild(listaCoincidencias);
  }
});

//Guardo lo que estoy confeccionando en el localStorage

// Obtengo el botón para guardar la rutina y para eliminar también
const btnGuardarRutina = document.querySelector("#btnGuardarRutina");
const btnBorrarRutina = document.querySelector("#btnBorrarRutina");

// Obtengo el contenido de la rutina que deseas guardar
const rutina = document.querySelector("#rutina");

// Evento para guardar la rutina en el localStorage cuando se haga clic en el botón
btnGuardarRutina.addEventListener("click", function () {
  // Obtengo el contenido de la rutina como HTML
  const rutinaHTML = rutina.innerHTML;

  // Guardo el contenido en el localStorage
  localStorage.setItem("rutinaEjercicios", rutinaHTML);

  // Confirmación al usuario que la rutina se ha guardado
  alert("Rutina guardada con éxito");
});

// Para cargar la rutina al cargar la página (por ejemplo, en el evento load)
window.addEventListener("load", function () {
  // Obtengo la rutina previamente guardada en el localStorage
  const rutinaGuardada = localStorage.getItem("rutinaEjercicios");

  // Verificar si hay una rutina previamente guardada
  if (rutinaGuardada) {
    // Establecer el contenido de la rutina con la rutina guardada
    rutina.innerHTML = rutinaGuardada;
  }
});
//Botón para borrar datos del localStorage
btnBorrarRutina.addEventListener("click", function () {
  localStorage.removeItem("rutinaEjercicios");
  alert("Rutina Borrada");
});
