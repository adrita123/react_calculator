import React from 'react';
import Calc, { addNumber, devideNumber, multiplyNumber, substractNumber } from './Calc';

function App(){

    return (  <>
    <ul>
       <li>The Summation of two number is {addNumber(25,2)} </li>
       <li>The substration of two number is {substractNumber(25,5)}</li>
       <li>The multiplication of two number {multiplyNumber(3,4)} is</li>
       <li>The division of two number is {devideNumber(4,2)}</li>
    </ul>
            </>
    );
};

export default App;