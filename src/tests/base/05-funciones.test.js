import '@testing-library/jest-dom';
import {getUser, getUsuarioActivo} from '../../base/05-funciones';

describe('Pruebas en 05 funciones', () => {

  test('getUser deber retornar un objeto', () => {
  
      const userTest = {
	uid: 'ABC123',
        username: 'El_Papi1502'
      }

    const user = getUser();

    expect(user).toEqual(userTest);
    console.log(user);
  })

  test('getUsuarioActivo debe retornar un objeto', () => {
   
    const nombre = 'nombre';
    const usuarioTest = {
    uid: 'ABC567',
    username: 'nombre'
   }

    const usuario = getUsuarioActivo(nombre);
    expect(usuario).toEqual(usuarioTest);
  })
});

