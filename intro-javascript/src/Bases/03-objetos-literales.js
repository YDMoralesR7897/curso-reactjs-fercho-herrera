const persona = {
    nombre: 'tony',
    apellido: 'stark',
    edad: 45,
    direccion:{
        cuidad: 'New York',
        zip: 5352325352,
        lat: 14.32231412,
        long: 334.988373
    }
};

const persona2 = { ...persona};
persona2.nombre = 'peter';

console.log(persona);
console.log(persona2);