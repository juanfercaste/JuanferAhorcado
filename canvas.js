function dibujarCanvas() {
  tablero.lineWidth = 8;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#0A3871";

  tablero.fillRect(0, 0, 1200, 860);
  tablero.beginPath();
  tablero.moveTo(650, 500);
  tablero.lineTo(900, 500);
  tablero.stroke();
  tablero.closePath();
}

function dibujarLinea() {
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#0A3871";

  let anchura = 600 / palabraSecreta.length;
  for (let i = 0; i < palabraSecreta.length; i++) {
    tablero.moveTo(500 + anchura * i, 640);
    tablero.lineTo(550 + anchura * i, 640);
  }

  tablero.stroke();
  tablero.closePath();
}

function escribirLetraCorrecta(index) {
  tablero.font = "bold 52px Inter";
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#0A3871";

  let anchura = 600 / palabraSecreta.length;
  tablero.fillText(palabraSecreta[index], 505 + anchura * index, 620);
  tablero.stroke();
}

function dibujarLetraIncorrecta(letra, errorsLeft) {
  tablero.font = "bold 40px Inter";
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#0A3871";

  tablero.fillText(letra, 535 + 40 * (10 - errorsLeft), 710, 40);
}

function dibujarAhorcado(puntaje) {
  tablero.lineWidth = 8;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.strokeStyle = "#0A3871";

  switch (puntaje) {
    case 8:
      tablero.moveTo(700, 500);
      tablero.lineTo(700, 100);
      break;
    case 7:
      tablero.moveTo(850, 100);
      tablero.lineTo(700, 100);
      break;
    case 6:
      tablero.moveTo(850, 100);
      tablero.lineTo(850, 171);
      break;
    case 5:
      tablero.moveTo(900, 230);
      tablero.arc(850, 230, 50, 0, Math.PI * 2);
      break;
    case 4:
      tablero.moveTo(850, 389);
      tablero.lineTo(850, 289);
      break;
    case 3:
      tablero.moveTo(850, 389);
      tablero.lineTo(800, 450);
      break;
    case 2:
      tablero.moveTo(850, 389);
      tablero.lineTo(890, 450);
      break;
    case 1:
      tablero.moveTo(850, 330);
      tablero.lineTo(800, 389);
      break;
    case 0:
      tablero.moveTo(850, 330);
      tablero.lineTo(890, 389);
      break;
    default:
      console.log("Invalid puntaje value");
  }
  tablero.stroke();
  tablero.closePath();
}
