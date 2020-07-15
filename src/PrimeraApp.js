import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitle }) => {
  


  return (
    <>
    <h1>{ saludo }</h1>
      <p>{ subtitle }</p>
    </>
    );
}

PrimeraApp.protoTypes = {
  saludo: PropTypes.string.isRequired
 }

PrimeraApp.defaultProps = {
  subtitle: 'Hola Tinix from Subtitle...'
}
export default PrimeraApp;
