import React from 'react';
import ReactDOM from 'react-dom';
//import CounterApp from './CounterApp';
import PrimeraApp from './PrimeraApp';
import './index.css';

const divRoot = document.querySelector('#root');





ReactDOM.render(<PrimeraApp saludo="Hola soy Goku" />, divRoot);

//ReactDOM.render(<PrimeraApp  saludo={"hola Tinix"}/>, divRoot);
//ReactDOM.render(<CounterApp  value={10}/>, divRoot);
