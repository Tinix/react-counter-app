import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas con promesas",()=> {

  test("getHeroeByIdAsync debe Retornar un Heroe async",( done ) =>{
     
    const id = 1;

    getHeroeByIdAsync(id)
      .then( heroe => { 
	expect(heroe).toBe(heroes[0]);
	done();
    });
  });


  test("debe de obtener si el heroe por id no existe", () =>{
      
    const id = 10;
    getHeroeByIdAsync(id)
      .catch(error => {

	expect(error).toBe('No se pudo encontrar el heroe');
	//done();

      });

  });

});


