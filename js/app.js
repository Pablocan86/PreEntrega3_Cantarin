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
//------PECTORALES-----
const aperturaInclinada = new Ejercicio(
  1,
  "APERTURA INCLINADA",
  "PECTORALES",
  "https://www.instagram.com/tv/CeeJaQWDC1P/?igshid=MzRlODBiNWFlZA==",
  "pectorales.png"
);
const aperturaPeckDeck = new Ejercicio(
  2,
  "APERTURA PLANA EN MAQUINA",
  "PECTORALES",
  "https://www.instagram.com/tv/CfCi_u5jfMp/?igshid=MzRlODBiNWFlZA==",
  "pectorales.png"
);
const aperturaPlana = new Ejercicio(
  3,
  "APERTURA PLANA CON MANCUERNAS",
  "PECTORALES",
  "https://www.instagram.com/tv/CeeJI9gjoOT/?igshid=MzRlODBiNWFlZA==",
  "pectorales.png"
);
const crucesEnPolea = new Ejercicio(
  4,
  "CRUCES EN POLEA",
  "PECTORALES",
  "https://www.instagram.com/tv/CeeI_VHjLfb/?igshid=MzRlODBiNWFlZA==",
  "pectorales.png"
);
const declinadoConMancuernas = new Ejercicio(
  5,
  "DECLINADO CON MANCUERNAS",
  "PECTORALES",
  "https://www.instagram.com/tv/CeeIyaSDOjA/?igshid=MzRlODBiNWFlZA==",
  "pectorales.png"
);

const pressInclinadoConBarra = new Ejercicio(
  6,
  "PRESS INCLINADO CON BARRA",
  "PECTORALES",
  "https://www.instagram.com/tv/CeeIfRoDwqH/?igshid=MzRlODBiNWFlZA==",
  "pectorales.png"
);
const pressInclinadoConMancuernas = new Ejercicio(
  7,
  "PRESS INCLINADO CON MANCUERNAS",
  "PECTORALES",
  "https://www.instagram.com/tv/CeeIoSZDgM2/?igshid=MzRlODBiNWFlZA==",
  "pectorales.png"
);

const pressPlanoConBarra = new Ejercicio(
  8,
  "PRESS PLANO CON BARRA",
  "PECTORALES",
  "https://www.instagram.com/tv/CeeIDoQj7QI/?igshid=MzRlODBiNWFlZA==",
  "pectorales.png"
);
const pressPlanoConMancuernas = new Ejercicio(
  9,
  "PRESS PLANO CON MANCUERNAS",
  "PECTORALES",
  "https://www.instagram.com/tv/CeeIPgADJAq/?igshid=MzRlODBiNWFlZA==",
  "pectorales.png"
);

//------DORSALES------
const dominadasColgado = new Ejercicio(
  10,
  "DOMINADAS COLGADO",
  "DORSALES",
  "https://www.instagram.com/tv/CeeJkUYjpOj/?igshid=MzRlODBiNWFlZA==",
  "espalda.png"
);

const dominadasEnMaquina = new Ejercicio(
  11,
  "DOMINADAS EN MAQUINA",
  "DORSALES",
  "https://www.instagram.com/tv/CeeJwcZD00Y/?igshid=MzRlODBiNWFlZA==",
  "espalda.png"
);
const pullOver = new Ejercicio(
  12,
  "PULL OVER CON SOGA",
  "DORSALES",
  "https://www.instagram.com/tv/CeeKiCNDQ84/?igshid=MzRlODBiNWFlZA==",
  "espalda.png"
);
const remoUnaMano = new Ejercicio(
  13,
  "REMO A UNA MANO",
  "DORSALES",
  "https://www.instagram.com/tv/CfCj7lhj8CL/?igshid=MzRlODBiNWFlZA==",
  "espalda.png"
);
const remoBajoMaquina = new Ejercicio(
  14,
  "REMO BAJO EN MAQUINA",
  "DORSALES",
  "https://www.instagram.com/tv/CeeKDtljYSr/?igshid=MzRlODBiNWFlZA==",
  "espalda.png"
);

const remoBarraPronado = new Ejercicio(
  15,
  "REMO BARRA PRONADO",
  "DORSALES",
  "https://www.instagram.com/tv/CfCkdtSDBAE/?igshid=MzRlODBiNWFlZA==",
  "espalda.png"
);
const remoBarraSupinado = new Ejercicio(
  16,
  "REMO CON BARRA SUPINADO",
  "DORSALES",
  "https://www.instagram.com/tv/CeeKNVyjBdu/?igshid=MzRlODBiNWFlZA==",
  "espalda.png"
);
const remoSerrucho = new Ejercicio(
  17,
  "REMO SERRUCHO",
  "DORSALES",
  "https://www.instagram.com/tv/CeeJ6pOj8Cj/?igshid=MzRlODBiNWFlZA==",
  "espalda.png"
);
const tironUnaMano = new Ejercicio(
  18,
  "TIRON INVERTIDO UNA MANO",
  "DORSALES",
  "https://www.instagram.com/tv/CfCkvzAjJW0/?igshid=MzRlODBiNWFlZA==",
  "espalda.png"
);
const tironInvertido = new Ejercicio(
  19,
  "TIRON INVERTIDO",
  "DORSALES",
  "https://www.instagram.com/tv/CeeKWNmjRCM/?igshid=MzRlODBiNWFlZA==",
  "espalda.png"
);

//----- DELTOIDES --------
const frontalesConDisco = new Ejercicio(
  20,
  "FRONTALES CON DISCO",
  "DELTOIDES",
  "https://www.instagram.com/tv/CfClCtfD-uA/?igshid=MzRlODBiNWFlZA==",
  "hombros.png"
);
const frontalesConMancuernas = new Ejercicio(
  21,
  "FRONTALES CON MANCUERNAS",
  "DELTOIDES",
  "https://www.instagram.com/tv/CeeLjHVDVBc/?igshid=MzRlODBiNWFlZA==",
  "hombros.png"
);
const frontalesMartillo = new Ejercicio(
  22,
  "FRONTALES AGARRE MARTILLO",
  "DELTOIDES",
  "https://www.instagram.com/tv/CfClKOxDHVn/?igshid=MzRlODBiNWFlZA==",
  "hombros.png"
);
const frontalesPolea = new Ejercicio(
  23,
  "FRONTALES CON POLEA",
  "DELTOIDES",
  "https://www.instagram.com/tv/CfClS8NDPFN/?igshid=MzRlODBiNWFlZA==",
  "hombros.png"
);
const vuelosLaterales = new Ejercicio(
  24,
  "VUELOS LATERALES",
  "DELTOIDES",
  "https://www.instagram.com/tv/CeeLSJ6DYoU/?igshid=MzRlODBiNWFlZA==",
  "hombros.png"
);
const laterales45Grados = new Ejercicio(
  25,
  "LATERALES 45° A UNA MANO",
  "DELTOIDES",
  "https://www.instagram.com/tv/CeeLah-D3ek/?igshid=MzRlODBiNWFlZA==",
  "hombros.png"
);

const lateralesUnaMano = new Ejercicio(
  26,
  "LATERALES A UNA MANO",
  "DELTOIDES",
  "https://www.instagram.com/tv/CfClavsjd7i/?igshid=MzRlODBiNWFlZA==",
  "hombros.png"
);
const lateralesPolea = new Ejercicio(
  27,
  "LATERALES EN POLEA",
  "DELTOIDES",
  "https://www.instagram.com/tv/CfClS8NDPFN/?igshid=MzRlODBiNWFlZA==",
  "hombros.png"
);
const posterioresMancuernas = new Ejercicio(
  28,
  "POTERIORES CON MANCUERNAS",
  "DELTOIDES",
  "https://www.instagram.com/tv/CeeMFZZjYMX/?igshid=MzRlODBiNWFlZA==",
  "hombros.png"
);
const posterioresBanco45 = new Ejercicio(
  29,
  "POSTERIORES EN BANCO A 45°",
  "DELTOIDES",
  "https://www.instagram.com/tv/CeeL8CvDaGQ/?igshid=MzRlODBiNWFlZA==",
  "hombros.png"
);
const posterioresMaquina = new Ejercicio(
  30,
  "POSTERIORES EN MAQUINA",
  "DELTOIDES",
  "https://www.instagram.com/tv/CeeLrIeDBJO/?igshid=MzRlODBiNWFlZA==",
  "hombros.png"
);
const posterioresPolea = new Ejercicio(
  31,
  "POSTERIORES EN POLEA",
  "DELTOIDES",
  "https://www.instagram.com/tv/CeeLyj1jEw7/?igshid=MzRlODBiNWFlZA==",
  "hombros.png"
);
const pressMilitarBarra = new Ejercicio(
  32,
  "PRESS MILITAR CON BARRA",
  "DELTOIDES",
  "https://www.instagram.com/tv/CeeLBKxD9in/?igshid=MzRlODBiNWFlZA==",
  "hombros.png"
);
const pressMilitarMancuernas = new Ejercicio(
  33,
  "PRESS MILITAR CON MANCUERNAS",
  "DELTOIDES",
  "https://www.instagram.com/tv/CeeLJHpjrvy/?igshid=MzRlODBiNWFlZA==",
  "hombros.png"
);
const pressTrasNuca = new Ejercicio(
  34,
  "PRESS TRAS NUCA",
  "DELTOIDES",
  "https://www.instagram.com/tv/CfCl0NoDlxv/?igshid=MzRlODBiNWFlZA==",
  "hombros.png"
);
const remoAlMentonD = new Ejercicio(
  35,
  "REMO AL MENTON (HOMBROS)",
  "DELTOIDES",
  "https://www.instagram.com/tv/CeeMO7Ej6M5/?igshid=MzRlODBiNWFlZA==",
  "hombros.png"
);
const remoAlMentonPoelaD = new Ejercicio(
  36,
  "REMO AL MENTON CON POLEA (HOMBROS)",
  "DELTOIDES",
  "https://www.instagram.com/tv/CfClsi5DCBp/?igshid=MzRlODBiNWFlZA==",
  "hombros.png"
);
//BASE DE DATOS DE EJERCICIO
const ejerciciosBD = [
  aperturaInclinada,
  aperturaPeckDeck,
  aperturaPlana,
  crucesEnPolea,
  declinadoConMancuernas,
  pressInclinadoConBarra,
  pressInclinadoConMancuernas,
  pressPlanoConBarra,
  pressPlanoConMancuernas,
  dominadasColgado,
  dominadasEnMaquina,
  pullOver,
  remoUnaMano,
  remoBajoMaquina,
  remoBarraPronado,
  remoBarraSupinado,
  remoSerrucho,
  tironUnaMano,
  tironInvertido,
  frontalesConDisco,
  frontalesConMancuernas,
  frontalesMartillo,
  frontalesPolea,
  vuelosLaterales,
  laterales45Grados,
  lateralesUnaMano,
  lateralesPolea,
  posterioresMancuernas,
  posterioresBanco45,
  posterioresMaquina,
  posterioresPolea,
  pressMilitarBarra,
  pressMilitarMancuernas,
  pressTrasNuca,
  remoAlMentonD,
  remoAlMentonPoelaD,
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
  <img class="imagenM" src="./img/${ejerciciosBD[indice].imagen}" alt="icono video"/>  
  <p>${ejerciciosBD[indice].musculo}</p>
    <p>${ejerciciosBD[indice].nombre}</p>
    <p>SERIES: ${series.value}   REPETICIONES: ${repeticiones.value}</p>   
    <a href="${ejerciciosBD[indice].video}" target="_blank"><img class="imagenV" src="./img/video.png" alt="icono video"/></a>
    <a href="#" class="btnQuitar" data-id="${ejerciciosBD[indice].id}"><img class="imagenX" src="./img/cerrar.png" alt="icono de una x"/></a>
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
          (el) => el.id === idEjercicio
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
