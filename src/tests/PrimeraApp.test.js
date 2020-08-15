import React from 'react';
import PrimeraApp from '../PrimeraApp';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';



describe("Prueba en <PrimeraAPP />", () => {
 // test('debe demostrar el mensaje "Hola Soy Goku" ',() => {
    //const saludo = "Hola soy Goku";
    //const { getByText }  = render( <PrimeraApp saludo={ saludo } />);
    //expect(getByText(saludo)).toBeInTheDocument();
 // });
  
  test("debe de mostrar  <PrimerApp> correctamente", () =>{

   const saludo = 'Hola , Soy Goku';

    const wrapper = shallow(<PrimeraApp  saludo={ saludo } />)

    expect(wrapper).toMatchSnapshot();
 });

  test("debe de mostrar el sustitulo enviado por props", () => {
    
    const saludo = "Hola, Soy Goku";
    const subTitulo = "Soy un subtitulo";

    const wrapper = shallow(
      <PrimeraApp
	saludo={ saludo }
	subtitulo={ subTitulo }
      />
    );

    const textoParrafo = wrapper.find('p').text();
    // console.log(textoParrafo);
    expect(textoParrafo).toBe(subTitulo);
   });

});
