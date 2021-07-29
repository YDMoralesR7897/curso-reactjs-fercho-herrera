// import {heroes} from './data/heroes'

//import heroes, { owners } from "../data/heroes";
import heroes from '../data/heroes';

//console.log( owners );

// import {heroes} from './data/heroes';

//console.log(heroes);

/* const getHeroById = (id) => {
    return heroes.find((heore) => {   
        if (heore.id === id){
            return true; 
        }else{
            return false;
        }
    });
} */

export const getHeroeById = (id) => heroes.find( (heroe) =>  heroe.id === id )

//console.log( getHeroeById(4) );    

export const getHeroesByowner = (owner) => heroes.filter( (heroe) =>  heroe.owner === owner )

//console.log( getHeroesByowner('Marvel') );    

