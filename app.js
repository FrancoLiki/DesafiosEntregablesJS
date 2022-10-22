const monedasExtranjeras = [
    {
        nombreMoneda: "DolarEstadounidense",
        factorMultiplicador: 300,
        pais: "Estados Unidos"
    },  
    {
        nombreMoneda: "Euro",
        factorMultiplicador: 320,
        pais: "España"
    },
    {
        nombreMoneda: "Libra esterlina",
        factorMultiplicador: 170,
        pais: "Reino Unido"
    },  
    {
        nombreMoneda: "Franco suizo",
        factorMultiplicador: 1245,
        pais: "Suiza"
    },
    {
        nombreMoneda: "Yen japones",
        factorMultiplicador: 100,
        pais: "Japon"
    },  
    {
        nombreMoneda: "Yuanes",
        factorMultiplicador: 1320,
        pais: "China"
    },
    {
        nombreMoneda: "Peso uruguayo",
        factorMultiplicador: 26,
        pais: "Uruguay"
    },  
    {
        nombreMoneda: "Bolivares",
        factorMultiplicador: 33,
        pais: "Bolivia"
    }
]

class Moneda {
    constructor(nombre, valor, pais){
        this.nombre = nombre;
        this.valor = Number(valor);
        this.pais = pais;
    }
}

const monedas = [];

let pais = "";
monedasExtranjeras.map((element, index) => {
    pais = pais + " \n " +  index + " - " + element.pais;
})

const FuncIn = () =>{
    const ingreso = prompt("Seleccione el número del país deseado, para así convertir la moneda correspondiente al escogido" + pais);
    const valorIngresado = Number(prompt("Ingresa el valor a convertir en pesos argentinos"));
    const operacion = valorIngresado / monedasExtranjeras[ingreso].factorMultiplicador;
    monedas.push(new Moneda(monedasExtranjeras[ingreso].nombreMoneda, operacion, monedasExtranjeras[ingreso].pais))
    for(const dato of monedas){
        alert("Su valor en " + dato.nombre + ", moneda referida a " + dato.pais + " es de " + dato.valor);
    }
    const convertirSi = prompt("Desea covertir nuevamente? \n Ingrese 1 para covertir  \n Ingrese 2 para no convertir")
    if (convertirSi  !== "1" || convertirSi  !== "2"){
        alert("El número ingresado no corresponde a lo solicitado, por favor vuelva a ingresarlo nuevamente");
        prompt("Desea covertir nuevamente? \n Ingrese 1 para covertir  \n Ingrese 2 para no convertir");
    } else if (convertirSi === 1){
        FuncIn();
    }
}

FuncIn();
alert("Gracias por utilizar nuestro convertidor");

