// import {heroes} from './data/heroes'

import { heroes } from "./data/heroes";

// import {heroes} from './data/heroes';

console.log(heroes);

/* const getHeroById = (id) => {
    return heroes.find((heore) => {
        if (heore.id === id){
            return true;
        }else{
            return false;
        }
    });
} */

const getHeroeById = (id) => { heroes.find( (heroe) =>  heroe.id === id )}

console.log( getHeroeById(2) );    

gethero