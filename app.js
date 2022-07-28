console.log("Proyecto entregable ");


//---------- if -----------

/*

alert("Vamos a jugar a un juego. Ingresa un número del 1 al 10, si ese número es igual al elegido por mi, ingresas directo a la página")
let numero = Number(prompt("Ingresa un número menor a 10"));

if (numero == 5) {
    alert("Has acertado, bienvenido al inicio")
} else  
    alert("Intenta nuevamente")

*/


//------- if anidados-------

/*

let calificacion = Number(prompt("Ingresa tu calificación"));

if (calificacion >= 1  && calificacion <= 10) {
    if (calificacion == 10) {
        alert("Felicitaciones, obtuviste la nota más alta")
    } else if (calificacion >= 7 && calificacion < 10) {
        alert("Promocionado")
    } else if (calificacion >=4 && calificacion < 7) {
        alert("Aprobado, a final")
    } else if (calificacion >= 1 && calificacion < 4) {
        alert("Desaprobado, a recuperatorio")} 
    } else  
        alert("La nota no corresponde a una calificación dada")
    
*/ 

//-------for---------

/* 

let presenciaAlumnos = prompt("Ingrese los 5 alumnos que se encuentre presentes");

for (let i = 1; i <=5; i++){
    presenciaAlumnos =prompt("Ingrese los 5 alumnos que se encuentre presentes")
    console.log("El alumno número " + i + " presente es " + presenciaAlumnos)
}

*/

//-----while-----

/*

let desafioEntregable = prompt("Ingrese aquellos alumnos que han entregado su desafio a fecha. Una vez terminado escriba FINALIZADO")

while(desafioEntregable != "FINALIZADO"){
    console.log(desafioEntregable + " entrego correctamente su desafio")
    desafioEntregable = prompt("Ingrese aquellos alumnos que han entregado su desafio a fecha. Una vez terminado escriba FINALIZADO")
}

*/