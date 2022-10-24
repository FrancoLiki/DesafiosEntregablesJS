// Simulador de e-commerce para dietetica online

//Declaracion de clase constructora (objeto constructor)

class Productos{
    constructor (id, nombre, tipoProducto, precio) {
    this.id = id,
    this.nombre = nombre, 
    this.tipoProducto = tipoProducto,
    this.precio = precio
    }
} 

//Declaracion de productos con unas mismas propiedades 

const producto0 = new Productos(0, "granola", "cereal", 120);
const producto1 = new Productos(1, "almendras", "frutos secos", 250);
const producto2 = new Productos(2, "copos de maiz", "cereal", 60);
const producto3 = new Productos(3, "manzanilla", "hierbas", 170);
const producto4 = new Productos(4, "chia", "semillas", 200);
const producto5 = new Productos(5, "proteina", "suplemento", 2500);

let preguntaUsuario = 1; 
let totalProductos = 0; 
let productoAEscoger;   

while(preguntaUsuario === 1){
    productoAEscoger = Number(prompt(" Bienvenidos dietetica Healthy Place. Escoja el numero del producto que quiera comprar. \n 0 - granola. \n 1 - almendras. \n 2 - copos de maiz. \n 3 - manzanilla. \n 4 - chia. \n 5 - proteina"));
    switch(productoAEscoger){
        case 0: 
            totalProductos = totalProductos + producto0.precio;
        break;
        case 1:
            totalProductos = totalProductos + producto1.precio; 
        break;
        case 2: 
            totalProductos = totalProductos + producto2.precio;
        break;
        case 3:
            totalProductos = totalProductos + producto3.precio;
        break;   
        case 4:
            totalProductos = totalProductos + producto4.precio;
        break;   
        case 5:
            totalProductos = totalProductos + producto5.precio;
        break; 
        default:
            alert("El número escogido no pertenece a un producto");
    }
    preguntaUsuario = Number(prompt("Desea escoger otro producto de la lista? escriba 1 para continuar, o cualquier otro número para salir"));
} 


let respuestaUsuario = alert(`El valor total de la compra es de ${totalProductos} pesos argentinos`);


//FUNCION A IMPLEMENTAR


let pagoFinal = 0;

function tipoDePago(total, maneraPago){
    switch(maneraPago){
        case 0:
            pagoFinal = total * 0.9;
            return alert(`Su pago efectuando el descuento quedara en un total de ${pagoFinal} pesos argentinos`)
        case 1: 
            pagoFinal = total / 3;
            return alert(`Su pago quedara en 3 cuotas de ${pagoFinal} pesos argentinos`);
        case 2:
            pagoFinal = total / 6;
            return alert(`Su pago quedara en 6 cuotas de ${pagoFinal} pesos argentinos`);
        case 3:
            pagoFinal = total / 12;
            return alert(`Su pago quedara en 12 cuotas de ${pagoFinal} pesos argentinos`);
        default:
            alert("El número escogido no corresponde a un metodo de pago");
        }    
} 


alert("Le recordamos antes de elegir su metodo de pago que si lo realiza en efectivo tendra un 10% de descuento. También recordarle que para poder efectuar su pago en 3, 6 y 12 cuotas. Gracias.");

let preguntaPorPago = 10;

while(preguntaPorPago < 0 || preguntaPorPago > 3){
    preguntaPorPago = Number(prompt("Escoja la forma de pago que quiera efectuar.  \n 0 - efectivo. \n 1 - 3 cuotas. \n 2 - 6 cuotas. \n 3 - 12 cuotas."));
} 
tipoDePago(totalProductos, preguntaPorPago);

