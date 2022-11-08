class Moneda {
    constructor(nombre, valor, pais){
        this.nombre = nombre,
        this.valor = valor,
        this.pais = pais
    }
}

const monedasExtranjeras = [];

const dolarEstadounidense = new Moneda("Dolar Estadounidese", 300, "Estados Unidos");
monedasExtranjeras.push(dolarEstadounidense);
const euro = new Moneda("Euro", 320, "España");
monedasExtranjeras.push(euro);
const libraEsterlina = new Moneda("Libra Esterlina", 280, "Reino Unido");
monedasExtranjeras.push(libraEsterlina);
const francoSuizo = new Moneda("Franco Suizo", 1250, "Suiza");
monedasExtranjeras.push(francoSuizo);
const yenJapones = new Moneda("Yen Japones", 100, "Japon");
monedasExtranjeras.push(yenJapones);
const yuanes = new Moneda("Yuanes", 1320, "China");
monedasExtranjeras.push(yuanes);
const pesoUruguayo = new Moneda("Peso Uruguayo", 28, "Uruguay");
monedasExtranjeras.push(pesoUruguayo);
const bolivares = new Moneda("Bolivares", 33, "Boliva");
monedasExtranjeras.push(bolivares);

let pais = "";
monedasExtranjeras.map((element, index) => {
    pais = pais + " \n " +  index + " - " + element.pais;
});

const FuncIn = () =>{
    const ingreso = prompt(`Seleccione el número del país deseado, para así convertir la moneda correspondiente al escogido ${pais}`);
    const valorIngresado = Number(prompt("Ingresa el valor a convertir en pesos argentinos"));
    const operacion = valorIngresado / monedasExtranjeras[ingreso].valor;
    alert(`Su valor es de ${operacion} ${monedasExtranjeras[ingreso].nombre}, moneda referida a ${monedasExtranjeras[ingreso].pais}`)
}

let convertirSi = 1;
while (convertirSi === 1){
    FuncIn();
    convertirSi = Number(prompt("Desea covertir nuevamente? \n Ingrese 1 para covertir  \n Ingrese 2 para no convertir"));
}
alert("Gracias por utilizar nuestro convertidor");
   

