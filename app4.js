const monedas = ["dolar", "euro", "libraEsterlina", "francoSuizos", "yenesJapones", "yuanes", "pesoUruguayo", "bolivares"];
const valoresMonedas = [135, 138, 163, 14256, 100, 1320, 26, 33];

let solicitud = "";
monedas.map((element, index) => {
    solicitud = solicitud + "\n" + index + " - " + element;
})


const FuncIn = () =>{
    const ingreso = prompt("Ingrese el valor numerico de la moneda a convertir" + solicitud);
    const valorIngresado = Number(prompt("Ingresa el valor a convertir en pesos argentinos"));
    const operacion = valorIngresado / valoresMonedas[ingreso];
    alert("Su valor en expresado en " + monedas[ingreso] + " es de " + operacion);
    const convertirSi = prompt("Desea covertir nuevamente si/no")
    if (convertirSi.toLowerCase().trim() === "si" || convertirSi.toLowerCase().trim() === "sí" ){
        FuncIn();
    }else 
    alert("Gracias por utilizar nuestro convertidor");
}

FuncIn();





