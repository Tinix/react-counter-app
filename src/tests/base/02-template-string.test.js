import '@testing-library/jest-dom';

const {getSaludo, getAddress} = require("../../base/02-template-string");

describe('Pruebas en 02-template-string.js', () => {
  
  test('getSaludo debe retornar Hola Fernando!', () => {
    
    const nombre = 'Fernando';

    const saludo = getSaludo(nombre);
 
    expect(saludo).toBe('Hola ' + nombre + "!");
    console.log(saludo);
  
  })

  test('getSaludo debe retornar Hola Carlos!', () => {

    const name = 'Carlos';

    const greeting = getSaludo(name);

    expect(greeting).toBe('Hola ' + name + "!");
    console.log(greeting);

  }) 

  test('getAddress debe retornar mi direccion', () => {
  
    const direccion = 'Avenida Los Platanos 1434';
      
    const address = getAddress(direccion);

    expect(address).toBe('Mi ' + direccion);
    console.log('Mi direccion :' + direccion);

  })
});
