import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';



describe('Puebas en funciones de Heroes', () => {
  
  test('debe de retornar un heroe por ID', () => {

    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find( heroe => heroe.id === id);
    expect(heroe).toEqual(heroeData);
  });


  test('debe de retornar un undefined si Heroe no existe', () => {

    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });
  
  test('debe retornar un arreglo con los heroes de DC',() => {

    const owner = 'DC'
    const heroes = getHeroesByOwner(owner); 
    console.log(heroes);

    const heroesData = heroes.filter( heroes => heroes.owner === owner);
    console.log(heroesData);

    expect(heroes).toEqual(heroesData);

  });

  test('debe retonar un arreglo con los heroes de Marvel', () => {

    const owner = 'Marvel'
    const heroes = getHeroesByOwner(owner); 
  
    expect(heroes.length).toBe(2)


  })
});
