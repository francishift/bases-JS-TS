
// console.log('Inicio');
// new Promise((resolve, reject) => {
import type {Hero } from "../data/heroes";
import { getHeroById } from "./07-imp-exp";

//     // console.log('Cuerpo de la promesa');
//     setTimeout(() => {
//         //resolve('Mi amigo cumplio');

//      reject ('Mi amigo no cumplio');

//     },1000);

// })
// .then(( message ) => console.log( message))
// .catch( errorMessage => console.log(errorMessage))
// .finally (() => console.log('Fin de la promesa'))
// console.log('Fin');

const getHeroByIdAsync = (id: number):Promise<Hero> => {
   
    return new Promise ( (resolve, reject) => {
      

        setTimeout (() => {
          const hero = getHeroById( id );

          hero ? resolve(hero) : reject(`Heroe con id ${id} no encontrado`);

        }, 1000);


    })

}

getHeroByIdAsync(3)
.then(hero => console.log('El nombre es', hero.name))
.catch (alert)
 

