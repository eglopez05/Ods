let progreso = 0;
let arboles = 0;

function plantarArbol(){

  if(progreso < 100){

    progreso += 10;
    arboles++;

    document.getElementById("barra").style.width = progreso + "%";

    document.getElementById("contador").innerHTML =
    "Árboles plantados: " + arboles;

  }

}