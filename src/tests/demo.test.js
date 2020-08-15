describe('Pruebas en el archivo demos.test.js', () => {

  test('deben ser iguales los string', () => {

    const mensaje = 'hola mundo';

    const mensaje2 = "hola mundo";

    expect(mensaje).toBe(mensaje2);
  })
});
