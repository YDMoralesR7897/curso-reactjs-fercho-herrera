console.log('hola Mundo');

//Var no se debe usar

//Variables y constantes
const nombre = 'Danian';
const apellido = 'Morales';

console.log(nombre, apellido);

//Scope: Let y const permiten variables iguales dentro del scope local y global

if (true) {
    const nombre = 'peter'
    const apellido = 'Manjarres'
    console.log(nombre, apellido);      
}