const personajes = ['goku','Vegueta','Trunks'];

const [,,P2] = personajes;

console.log( P2 );

const retornaArreglo = () => {
    return [ 'ABC', 123 ];
}

const [letras, numeros] = retornaArreglo()

console.log(letras, numeros)

//Tarea
//1. el primer valor del array se llamara nombre
//2. se llamara set nombre
const seState = (valor) => {
    return [valor, ()=>{console.log('Hola mundo')}]
}

const arr = seState('Goku')

console.log(arr);

const [nombre, setnombre] = seState('Goku')

console.log(nombre);
setnombre();
