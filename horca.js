"use strict";

//elementos del DOM a manipular
const btnInicio = document.querySelector(".btn-inicio");
const btnAgregar = document.querySelector(".btn-agregar");
const inicio = document.querySelector(".inicio");
let tablero = document.getElementById("ahorcado").getContext("2d");
const mensajePerder = document.getElementById("mensaje");
const mensajeGanar = document.getElementById("mensaje-dos");
const btnDeNuevo = document.querySelector(".btn-de-nuevo");
const btnDeNuevo2 = document.querySelector(".btn-nuevo-dos");

//Selectores
let palabras = [
  "ALURA",
  "ORACLE",
  "ONE",
  "JAVASCRIPT",
  "HTML",
  "CSS",
  "FRONTEND",
  "BACKEND",
];
let palabraSecreta = "";
let index = "";
let letras = [];
let errores = 9;
let palabraCorrecta = "";
//PalabraSecreta
function seleccionarPalabra() {
  index = Math.floor(Math.random() * palabras.length);
  palabraSecreta = palabras[index];
  console.log(palabraSecreta);
}

//confirmar letras
function comprobarLetra(key) {
  let estado = false;
  if (
    (key >= 65 && letras.indexOf(key)) ||
    (key <= 90 && letras.indexOf(key))
  ) {
    letras.push(key);
    return estado;
  } else {
    estado = true;
    return true;
  }
}

function añadirLetrasIncorrecta() {
  errores -= 1;
}

//event listeners
btnInicio.addEventListener("click", function () {
  inicio.style.display = "none";
  seleccionarPalabra();
  dibujarCanvas();
  dibujarLinea();

  document.onkeydown = (e) => {
    let letra = e.key.toUpperCase();

    if (comprobarLetra(letra) && palabraSecreta.includes(letra)) {
      for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta.length === palabraCorrecta.length) {
          mensajeGanar.style.display = "block";
        } else if (palabraSecreta[i] === letra && errores > 0) {
          escribirLetraCorrecta(i);
          palabraCorrecta += palabraSecreta[i];
        }
      }
    } else {
      if (errores === 0) {
        mensajePerder.style.display = "block";
      } else if (palabraCorrecta.length <= palabraSecreta.length) {
        añadirLetrasIncorrecta(letra);
        dibujarLetraIncorrecta(letra, errores);
        dibujarAhorcado(errores);
      }
    }
  };
});

btnDeNuevo.addEventListener("click", function () {
  location.reload();
});
btnDeNuevo2.addEventListener("click", function () {
  location.reload();
});
