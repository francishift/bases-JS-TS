
import heroes, {type Owner,type owners} from "../data/heroes";



export const getHeroById = (id: number) => {

  return  heroes.find(hero => hero.id === id)

}

// console.log(getHeroById(2));

export const getHeroesByOwners = (owner: Owner) => {
    return heroes.filter(hero => hero.owner === owner)
}

  // console.log(getHeroesByOwners( 'DC' ));