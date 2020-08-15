import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitle }) => {
  


  return (
    <>
      <h1> { saludo } </h1>
      {/*<pre> { JSON.stringify(saludo, null 3) }</pre>*/}
      <p>{ subtitle }</p>
    </>
    );
}

PrimeraApp.protoTypes = {
  saludo: PropTypes.string.isRequired
 }


PrimeraApp.defaultProps = {
  subtitle: 'Soy un subtitulo'
}


export default PrimeraApp;
