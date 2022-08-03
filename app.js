// La idea es generar un convertidor de monedas, en este caso desde pesos argentinos hacía dolar oficial, dolar oficial + imp, euro.

//function convertidorMonedas (monedaArgentina, dolarOficial, dolarImpuestos, euro) {}

// 1 : dolar oficial -> donde un case dirija hacia la propiedad de multiplicar la cantidad de pesos que se indique x el valor de 1 dolar oficial

// 2 : dolar con impuesto -> donde un case dirija hacia la propiedad de multiplicar la cantidad de pesos que se indique x el valor de 1 dolar oficial + 65% de su valor 

// 3 : euro -> donde un case dirija hacia la propiedad de multiplicar la cantidad de pesos que se indique x el valor de 1 euro

//funcion : convertir la moneda argentina a una moneda internacional

const convertidorMonedas = (monedaArgentina, tipoDeMoneda) => {
    if (tipoDeMoneda >= 0 && tipoDeMoneda <=3) { 
        switch (tipoDeMoneda) {
            case 1:
                return alert(monedaArgentina / dolarOficial);
            
            case 2:
                return alert(monedaArgentina / dolarImpuesto);

            case 3:
                return alert(monedaArgentina / euro);
        
            default:
                alert("El número escogido no indica un tipo de moneda")
                break;
        }   
    } else 
    alert("Error, escoja un número entre los indicados")
}

let dolarOficial = 138;
let dolarImpuesto = 227.7;
let euro = 135.59;
let valorIngresado = Number(prompt("Ingresa el valor a convertir en pesos argentinos"));
let operacion = prompt("Ingresa la moneda a la cual quieras convertir. \n1 - dolar oficial. \n2 - dolar con impuestos. \n3 - euro.");
let resultado = valorIngresado / operacion;

alert(convertidorMonedas(valorIngresado,operacion));