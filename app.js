// La idea es generar un convertidor de monedas, en este caso desde pesos argentinos hacía dolar oficial, dolar oficial + imp, euro.

//function convertidorMonedas (monedaArgentina, dolarOficial, dolarImpuestos, euro) {}

// 1 : dolar oficial -> donde un case dirija hacia la propiedad de multiplicar la cantidad de pesos que se indique x el valor de 1 dolar oficial

// 2 : dolar con impuesto -> donde un case dirija hacia la propiedad de multiplicar la cantidad de pesos que se indique x el valor de 1 dolar oficial + 65% de su valor 

// 3 : euro -> donde un case dirija hacia la propiedad de multiplicar la cantidad de pesos que se indique x el valor de 1 euro

//funcion : convertir la moneda argentina a una moneda internacional

const convertidorMonedas = (monedaArgentina, tipoDeMoneda) => {
        let mensaje = '';
        switch (tipoDeMoneda) {
            case "1":
                return mensaje = "Su valor en dolares oficiales es de " + (monedaArgentina / dolarOficial);
                break;
            
            case "2":
                return mensaje = "Su valor en dolares sumado los impuestos es de " + (monedaArgentina / dolarImpuesto);
                break;

            case "3":
                return mensaje = "Su valor en euros es de " + (monedaArgentina / euro);
                break;

            default:
                return mensaje = ("Error, el numero ingresado no corresponde a una moneda");
                break;
        }   
    }

let dolarOficial = 138;
let dolarImpuesto = 227.7;
let euro = 135.59;
let valorIngresado = Number(prompt("Ingresa el valor a convertir en pesos argentinos"));
let operacion = prompt("Ingresa el número correspondiente a la moneda a convertir. \n1 - dolar oficial. \n2 - dolar con impuestos. \n3 - euro.");
let resultado = valorIngresado / operacion;


alert(convertidorMonedas(valorIngresado,operacion));




