


const nombre   = 'Fernando';
const apellido = 'Herrera';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

// console.log( nombreCompleto );


export function getSaludo(nombre) {
  return 'Hola ' + nombre +"!";
}

export function getAddress(direccion){
  return 'Mi ' + direccion;
}

// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );
//
