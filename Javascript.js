//INICIO DE SESION  Y PAGINA

document.getElementById("btn__registrarse").addEventListener("click", register);
document.getElementById("btn__iniciar-sesion").addEventListener("click", login);

//Declarando variables


function register() {

    /*
     document.querySelector(".formulario__register").style.position = "absolute";
     document.querySelector(".formulario__register").style.left = "350px";
     */

    document.querySelector(".formulario__register").style.opacity = "1";
    document.querySelector(".formulario__register").style.transition = "1s";
    document.querySelector(".formulario__register").style.transform = "translateX(350px)";
    document.querySelector(".formulario__register").style.display = "flex";
    document.querySelector(".formulario__register").style.transition = "1s";
    document.querySelector(".formulario__login").style.display = "none";
}

function login() {

    document.querySelector(".formulario__login").style.opacity = "1";
    document.querySelector(".formulario__login").style.transform = "translateX(-350px)";
    document.querySelector(".formulario__login").style.display = "flex";
    document.querySelector(".formulario__login").style.transition = "1s";
    document.querySelector(".formulario__register").style.display = "none";

}

/*--------------------------------USUARIOS--------------------*/

const listUsuarios = [];
let limite = 2;

do {
    let ingreso = prompt("INGRESA NOMBRE : ");
    listUsuarios.push(ingreso);
    console.log(listUsuarios.length);
}

while (listUsuarios.length != limite)
console.log(listUsuarios.join("\n"))


//--------------------Galeria-----------------------------------
class fotografiasretrato {
    constructor(identification, tamaño, categoria, precio) {
        this.identification = identification;
        this.tamaño = tamaño;
        this.categoria = categoria;
        this.precio = precio;
    }
}


class fotografiasreportaje {
    constructor(identification, tamaño, categoria, precio) {
        this.identification = identification;
        this.tamaño = tamaño;
        this.categoria = categoria;
        this.precio = precio;
    }
}

class fotografiaspaisajes {
    constructor(identification, tamaño, categoria, precio) {
        this.identification = identification;
        this.tamaño = tamaño;
        this.categoria = categoria;
        this.precio = precio;
    }
}
//---------objetos instanciados--------------------------------


const fotoretrato = new fotografiasretrato("1", "Grande", "fotografía de moda", 50000);
const fotoretratouno = new fotografiasretrato("2", "Grande", "fotografía de eventos sociales", 15000);
const fotoretratodos = new fotografiasretrato("3", "Grande", "fotografía deportiva", 8000);

const fototreportajes = new fotografiasreportaje("1", "Grande", "fotografía de prensa", 11000);
const fototreportajesuno = new fotografiasreportaje("2", "Grande", "fotografía de guerra", 70000);
const fototreportajesdos = new fotografiasreportaje("3", "Grande", "fotografía documental", 25000);

const fotoPaisaje = new fotografiaspaisajes("1", "Grande", "fotografía de arquitectura", 30000);
const fotoPaisajeuno = new fotografiaspaisajes ("2", "Grande", "fotografía aérea", 20000);
const fotoPaisajedos = new fotografiaspaisajes("3", "Grande", "fotografía de la Naturaleza", 10000);
const fotopaisajestres = new fotografiaspaisajes ("4","Grande", "fotografía submarina", 40000);


//---------array de objetos------------------------------------


const fotosderetratos = [fotoretrato, fotoretratouno, fotoretratodos] ;
const fotosdereportajes = [fototreportajes, fototreportajesuno, fototreportajesdos];
const fotosdePaisaje = [fotoPaisaje, fotoPaisajeuno, fotoPaisajedos, fotopaisajestres];


//-------------swicth ---------------------------------------------

let SeleccionarFotoretrato = prompt("\tIndica el número  del tipo de foto que deseas comprar \n \t\t\t\t\t #-1-fotografía de moda \n \t\t\t\t\t #-2-fotografía de eventos sociales \n\t\t\t\t\t #-3-fotografía deportiva ")
let comprafoto
let tipodefoto

switch (SeleccionarFotoretrato) {
    case "1":
        let comprar1 = fotosderetratos[0]
        comprafoto = comprar1.precio
        tamañofoto = comprar1.tamaño
        break;

    case "2":
        let comprar2 = fotosderetratos[1]
        comprafoto = comprar2.precio
        tamañofoto = comprar2.tamaño
        break;

    case "3":
        let comprar3 = fotosderetratos[2]
        comprafoto = comprar3.precio
        tamañofoto = comprar3.tamaño
        break;

    default:
        break;
}

console.log(`EL PRECIO DE ESTA FOTO ${tipodefoto} ES : ${comprafoto}`)
fotosderetratos.forEach(element => {
    alert(`La fotografia que ha comprado tiene los siguientes detalles:\n *ID : ${element.identification},\n*TAMAÑO : ${element.tamaño}, \n*CATEGORIA : ${element.categoria},\n *PRECIO : ${element.precio}`)
})

//-----------------------------REPORTAJE--------------------------------------------

let SeleccionarFotoreportaje = prompt("\tIndica el número  del tipo de foto que deseas comprar \n \t\t\t\t\t #-1-fotografía de prensa \n \t\t\t\t\t #-2-fotografía de guerra \n\t\t\t\t\t #-3-fotografía documental")
let comprafotoreportaje
let tipodefotoreportaje

switch (SeleccionarFotoreportaje) {
    case "1":
        let comprar1 = fotosdereportajes[0]
        comprafotoreportaje = comprar1.precio
        tamañofoto = comprar1.tamaño
        break;

    case "2":
        let comprar2 = fotosdereportajes[1]
        comprafotoreportaje = comprar2.precio
        tamañofotoreportaje = comprar2.tamaño
        break;

    case "3":
        let comprar3 = fotosdereportajes[2]
        comprafotoreportaje = comprar3.precio
        tamañofotoreportaje = comprar3.tamaño
        break;

    default:
        break;
}

console.log(`EL PRECIO DE ESTA FOTO ${tipodefotoreportaje} ES : ${comprafotoreportaje}`)
fotosdereportajes.forEach(element => {
    alert(`La fotografia que ha comprado tiene los siguientes detalles:\n *ID : ${element.identification},\n*TAMAÑO : ${element.tamaño}, \n*CATEGORIA : ${element.categoria},\n *PRECIO : ${element.precio}`)
})


//----------------------------------------Paisajes---------------------------------------------


let SeleccionarFotorpaisajes = prompt("\tIndica el número  del tipo de foto que deseas comprar \n \t\t\t\t\t #-1-fotografía de arquitectura \n \t\t\t\t\t #-2-fotografía aérea \n\t\t\t\t\t #-3-fotografía de la Naturaleza \n\t\t\t\t\t #-4-fotografía submarina")
let comprafotopaisaje
let tipodefotopaisaje

switch (SeleccionarFotorpaisajes) {
    case "1":
        let comprar1 = fotosdePaisaje[0]
        comprafotopaisaje = comprar1.precio
        tamañofoto = comprar1.tamaño
        break;

    case "2":
        let comprar2 = fotosdePaisaje[1]
        comprafotopaisaje = comprar2.precio
        tamañofotopaisaje = comprar2.tamaño
        break;

    case "3":
        let comprar3 = fotosdePaisaje[2]
        comprafotopaisaje = comprar3.precio
        tamañofotopaisaje = comprar3.tamaño
        break;
    case "4":
        let comprar4 = fotosdePaisaje[3]
        comprafotopaisaje = comprar4.precio
        tamañofotopaisaje = comprar4.tamaño
        break;

    default:
        break;
}

console.log(`EL PRECIO DE ESTA FOTO ${tipodefotopaisaje} ES : ${comprafotopaisaje}`)

fotosdePaisaje.forEach(element => {
    alert(`La fotografia que ha comprado tiene los siguientes detalles:\n *ID : ${element.identification},\n*TAMAÑO : ${element.tamaño}, \n*CATEGORIA : ${element.categoria},\n *PRECIO : ${element.precio}`)
})






const sumarCompras = (n1, n2, n3) => { return resultado = n1 + n2 + n3 }

let compraFinal = sumarCompras(fotosderetratos, fotosdereportajes, fotosdePaisaje)
console.log(compraFinal)

const sumarIva = (n1) => { return resultado = n1 * 1.21 }

let compraConIva = sumarIva(compraFinal)
console.log(compraConIva)
















/*
//objeto literal
let dimension = prompt("ingrese dimension")

const fotouno = {
    dimension: dimension,
    categoria: 'paisaje',

    precio: '200',
}
console.log(fotouno);

//funcion constructora
function Foto(dimensiones, tipodefoto, formato) {
    this.dimensiones = dimensiones;
    this.tipodefoto = tipodefoto;
    this.formato = formato;
    this.mostrarmsj = function () { console.log(`esta foto es ${tipodefoto}`) }
}
const foto1 = new Foto('1920*720', 'urbana', 'raw');
const foto2 = new Foto('1920*1080', 'paisaje', 'raw');
foto2.mostrarmsj();
//clases
class Fotos {
    constructor(tamaño, formato, calidad) {
        this.tamaño = tamaño;
        this.formato = formato;
        this.calidad = calidad;
    }

    MOSTRARTAMAÑO() {
        console.log(`ESTA FOTO TIENE UN TAMAÑO:  ${this.tamaño}`);
    }
    MOSTRARFORMATO() {
        console.log(`ESTA FOTO TIENE UN TAMAÑO:  ${this.formato}`);
    }

}
*/





/*

const fotoone = new Fotos(1080, "raw", "rgb");
fotoone.MOSTRARTAMAÑO();
fotoone.MOSTRARFORMATO();




const usuarios = ["NICOLAS", "PEPE", "EDUARDO", "WEISS", "NACHO", "PEDRO"]
const apellidos = ["GIMENEZ", "GALLEGO", "FOX", "KEN", "DEPAUL", "MIKY"]
const backup = usuarios.slice(1, 5);
console.log(backup);
console.log(usuarios.indexOf("NICOLAS"));
console.log(usuarios.includes("NICOLAS"));
console.log(usuarios.reverse());
//agregar elementos 
usuarios.push(prompt("ingrese nombre :"))
usuarios.unshift(prompt("ingrese primer elemento: "))
//eliminar elemento 
usuarios.pop()
usuarios.shift()
//eliminar uno o vario elemento
usuarios.splice(0, 2);
usuarios.slice();
//separar
console.log(usuarios.join("/"));

//concatenar
console.log(usuarios.concat(apellidos));

console.log(usuarios[2]);

for (let index = 0; index < usuarios.length; index++) {

    console.log(usuarios[index]);

}

*/