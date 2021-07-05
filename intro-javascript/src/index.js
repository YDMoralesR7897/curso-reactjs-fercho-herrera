import {getHeroeById, getHeroesByowner} from "./Bases/08-imp-exp";

const promesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
        //resolve();
        const heroe = getHeroeById(2);
        console.log(heroe)
    },2000)
});
promesa.then( () => {
    console.log('Then de la promesa')
})