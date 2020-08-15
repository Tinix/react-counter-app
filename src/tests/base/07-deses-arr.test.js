import { retornaArreglo } from '../../base/07-deses-arr'

describe('Pruebas de desestructuraccion', () => {

  test('debe retornar un string y un numero', () => {
    
    //const arr = retornaArreglo();   

    const [ letras, numeros ] =  retornaArreglo();

    console.log(typeof letras);
  
    expect(letras).toBe('ABC')
    expect(typeof letras).toBe('string');

    expect(numeros).toBe(123)
    expect(typeof numeros).toBe('number')
    //expect(arr).toEqual(['ABC', 123]);
  })
});
