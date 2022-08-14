const convertidorMonedas = (monedaArgentina, tipoDeMoneda) => {
        switch (tipoDeMoneda) {
            case "1":
                return "Su valor en dolares oficiales es de " + (monedaArgentina / dolarOficial);

            case "2":
                return "Su valor en dolares sumado los impuestos es de " + (monedaArgentina / dolarImpuesto);

            case "3":
                return "Su valor en euros es de " + (monedaArgentina / euro);

            default:
                return "Error, el numero ingresado no corresponde a una moneda";
        }  
}


const dolarOficial = 138;
const dolarImpuesto = 227.7;
const euro = 135.59;

let ingreso = prompt("Ingrese la palabra -acceder-, si desea realizar una operacion. \n En su defecto, ingrese la palabra -no-.")
while (ingreso.toLowerCase() === "acceder") {
    let valorIngresado = Number(prompt("Ingresa el valor a convertir en pesos argentinos"));
    let operacion = prompt("Ingresa el número correspondiente a la moneda a convertir. \n1 - dolar oficial. \n2 - dolar con impuestos. \n3 - euro.");
    alert(convertidorMonedas(valorIngresado, operacion));
    const convertirSi = prompt("Desea covertir nuevamente si/no")
    if (convertirSi.toLowerCase() !== "si"){
        ingreso = "no";
    }
} 
alert("Gracias por nuestro convertidor");
