// Fixture del  mundial
// Declaracion de objeto constructor (clubes)

class Clubes {
    constructor(id, pais, grupo) {
        this.id = id,
        this.pais = pais,
        this.grupo = grupo
    }
}

// Grupo A

const catar = new Clubes("A1","Catar", "A");
const ecuador = new Clubes("A2","Ecuador", "A");
const holanda = new Clubes("A3","Holanda", "A");
const senegal = new Clubes("A4","Senegal", "A");

// Grupo B

const inglaterra = new Clubes("B1","Inglaterra", "B");
const iran = new Clubes("B2","Iran", "B")
const estadosUnidos = new Clubes("B3","Estados Unidos", "B");
const gales = new Clubes("B4","Gales", "B");

// Grupo C

const argentina = new Clubes("C1","Argentina", "C");
const mexico = new Clubes("C2","Mexico", "C");
const polonia = new Clubes("C3","Polonia", "C");
const arabiaSaudita = new Clubes("C4","Arabia Saudita", "C");

// Grupo D

const australia = new Clubes("D1","Australia", "D");
const dinamarca = new Clubes("D2","Dinamarca", "D");
const francia = new Clubes("D3","Francia", "D");
const tunez = new Clubes("D4","Tunez", "D");

// Grupo E

const costaRica = new Clubes("E1","Costa Rica", "E");
const alemania = new Clubes("E2","Alemania", "E");
const japon = new Clubes("E3","Japon", "E");
const espania = new Clubes("E4","España", "E");

// Grupo F

const belgica = new Clubes("F1","Belgica", "F");
const canada = new Clubes("F2","Canada", "F");
const croacia = new Clubes("F3","Croacia", "F");
const marruecos = new Clubes("F4","Marruecos", "F");

// Grupo G

const brasil = new Clubes("G1","Brasil", "G");
const camerun = new Clubes("G2","Camerun", "G");
const serbia = new Clubes("G3","Serbia", "G");
const suiza = new Clubes("G4","Suiza", "G");

// Grupo H

const ghana = new Clubes("H1","Ghana", "H");
const coreaDelSur = new Clubes("H2","Corea Del Sur", "H");
const portugal = new Clubes("H3","Portugal", "H");
const uruguay = new Clubes("H4","Uruguay", "H");


// Declaracion de arrays

const faseDeGrupos = [
    //grupo a
    catar, ecuador, holanda, senegal,
    //grupo b
    inglaterra, iran, estadosUnidos, gales,
    //grupo c
    argentina, mexico, polonia, arabiaSaudita,
    //grupo d
    australia, dinamarca, francia, tunez,
    //grupo e
    costaRica, alemania, japon, espania,
    //grupo f
    belgica, canada, croacia, marruecos,
    //grupo g
    brasil, camerun, serbia, suiza,
    //grupo h
    ghana, coreaDelSur, portugal, uruguay
];

const octavosFinalArray = [];
const cuartosFinalArray = [];
const semiFinalArray = [];  
const finalArray = [];

//Traer elementos del DOM

const posicionamientoLlaves = document.getElementById("posicionamietoLlaves");
const ganadoresLlaves = document.getElementById("ganadoresLlaves");
// const primeroA = document.getElementById("1eroA");
// const segundoA = document.getElementById("2doA");
// const primeroB = document.getElementById("1eroB");
// const segundoB = document.getElementById("2doB");
// const primeroC = document.getElementById("1eroC");
// const segundoC = document.getElementById("2doC");
// const primeroD = document.getElementById("1eroD");
// const segundoD = document.getElementById("2doD");
// const primeroE = document.getElementById("1eroE");
// const segundoE = document.getElementById("2doE");
// const primeroF = document.getElementById("1eroF");
// const segundoF = document.getElementById("2doF");
// const primeroG = document.getElementById("1eroG");
// const segundoG = document.getElementById("2doG");
// const primeroH = document.getElementById("1eroH");
// const segundoH = document.getElementById("2doH");
const botonEnviarEquiposO = document.getElementById("botonEnviarEquiposO");
const octavosFinal = document.getElementById("octavosFinal");
const cuartosFinal = document.getElementById("cuartosFinal");
const semiFinal = document.getElementById("semiFinal");
const final = document.getElementById("final");
const _grupos = ["A","B","C","D","E","F","G","H"];


const crearGrupos = () => {
    _grupos.map(grupo => {
        const divGrupos = document.createElement("div");
        divGrupos.setAttribute("id",`grupo${grupo}`);
        divGrupos.innerHTML = `
        <h4> Grupo ${grupo}</h4>
        <div id="grupo${grupo}-1"> 
            <ul> 

            </ul>
        </div>
        `
        posicionamientoLlaves.append(divGrupos);
    })
}
 
const cargarGrupos = () => {
    faseDeGrupos.map(element => {
        const {grupo, id, pais} = element;
        const li = document.createElement("li");
        const grupoElemento = document.getElementById(`grupo${grupo}-1`);
        li.setAttribute("id", id);
        li.innerHTML = pais;
        grupoElemento.children[0].appendChild(li);
    })
}

const changeGanador = (e,grupo,posicion) => {
    const seleccionUsuario = e.target.value;
    console.log(`el equipo ${seleccionUsuario} del grupo ${grupo} ha pasado en la posicion ${posicion}`)
}
const crearGanadorLlaves = () =>  {
    _grupos.forEach(grupo => {
        const divContenedor = document.createElement("div");
        const options = faseDeGrupos.map(equipo =>{
            if(equipo.grupo === grupo){
                return `<option value="${equipo.pais}"> ${equipo.pais}</option>`
            }
        })
        divContenedor.innerHTML =`
        <h4> Ingrese el primer equipo del grupo ${grupo} </h4>
        <select onchange="changeGanador(event,'${grupo}','1')">
        <option value=""> Seleccione un país</option>
        ${options}
        </select>
        <h4> Ingrese el segundo equipo del grupo ${grupo} </h4>
        <select onchange="changeGanador(event,'${grupo}','2')">  
        <option value=""> Seleccione un país</option>
        ${options}
        </select>
        `
        ganadoresLlaves.appendChild(divContenedor);
    })
}





crearGrupos()
cargarGrupos()
crearGanadorLlaves()


octavosFinal.innerHTML = `
    <div>
        <p></p>  vs  <p></p>
        <input id="ganador1o" placeholder="Ingrese al ganador del encuentro"></input>
    </div>
    <div>
        <p></p>  vs  <p></p>
        <input id="ganador2o" placeholder="Ingrese al ganador del encuentro"></input>
    </div>
    <div>
        <p></p>  vs  <p></p>
        <input id="ganador3o" placeholder="Ingrese al ganador del encuentro"></input>
    </div>
    <div>
        <p></p>  vs  <p></p>
        <input id="ganador4o" placeholder="Ingrese al ganador del encuentro"></input>
    </div>
    <div>
        <p></p>  vs  <p></p>
        <input id="ganador5o" placeholder="Ingrese al ganador del encuentro"></input>
    </div>
    <div>
        <p></p>  vs  <p></p>
        <input id="ganador6o" placeholder="Ingrese al ganador del encuentro"></input>
    </div>
    <div>
        <p></p>  vs  <p></p>
        <input id="ganador7o" placeholder="Ingrese al ganador del encuentro"></input>
    </div>
    <div>
        <p></p>  vs  <p></p>
        <input id="ganador8o" placeholder="Ingrese al ganador del encuentro"></input>
    </div>
`

cuartosFinal.innerHTML = `
<div>
        <p></p>  vs  <p></p>
        <input id="ganador1c" placeholder="Ingrese al ganador del encuentro"></input>
    </div>
    <div>
        <p></p>  vs  <p></p>
        <input id="ganador2c" placeholder="Ingrese al ganador del encuentro"></input>
    </div>
    <div>
        <p></p>  vs  <p></p>
        <input id="ganador3c" placeholder="Ingrese al ganador del encuentro"></input>
    </div>
    <div>
        <p></p>  vs  <p></p>
        <input id="ganador4c" placeholder="Ingrese al ganador del encuentro"></input>
    </div>
`

semiFinal.innerHTML = `
<div>
        <p></p>  vs  <p></p>
        <input id="ganador1s" placeholder="Ingrese al ganador del encuentro"></input>
    </div>
    <div>
        <p></p>  vs  <p></p>
        <input id="ganador2s" placeholder="Ingrese al ganador del encuentro"></input>
    </div>
`

final.innerHTML = `
<div>
        <p></p>  vs  <p></p>
        <input id="ganador1f" placeholder="Ingrese al ganador del encuentro"></input>
    </div>
`

