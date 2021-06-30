function saludar0(nombre) {
    return `hola, ${nombre}`
}
const saludar = function (nombre) {
    return `hola, ${nombre}`;
}
const saludar2 = (nombre) => {
    return `hola, ${nombre}`;
}
const saludar3 = (nombre) => `hola, ${nombre}`;
const saludar4 = () => `hola, Mundo`;


const getUser = () => ({

    UID: 'ABCD1234',
    username: 'El_papi1502'

})

const user = getUser();

console.log(saludar0('roberto'));
console.log(saludar('roberto'));
console.log(saludar2('Veggeta'));
console.log(saludar3('Danian'));
console.log(saludar4);
console.log(user);

//Solucion Actividad hecha en clase

const getUsuarioActivo = (nombre) => ({
    uid: 'abc123',
    username: nombre
})

const usuario = getUsuarioActivo('Jorge');
console.log(usuario)