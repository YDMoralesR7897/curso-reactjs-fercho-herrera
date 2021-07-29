// Desestructuracion
//Asignacion desestructurante

const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'Ironman',
    Rango: 'Soldado'
}

//const { nombre, edad, clave } = persona;

//console.log(nombre, edad, clave)
//console.log(persona.nombre)
//console.log(persona.edad)
//console.log(persona.clave)

//const retornaPersona = (usuario) => {
//    const { nombre, edad, clave } = usuario;
//    console.log(edad, nombre, clave);
//}
const Context = ({ nombre, edad, clave, Rango }) => {
    //console.log(nombre, edad, clave, Rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.12234,
            lng: -14.3232
        }
    }
}

const {nombreClave,anios,latlng:{lat,lng}} = Context(persona);

console.log(nombreClave, anios, lat,lng)