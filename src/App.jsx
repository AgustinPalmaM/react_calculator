import './App.css';
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import Screen from './components/Screen';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = (value) => {
    if ((input + value).length >= 18) {
      alert('insert not more than 18 digits');
      setInput('')
    } else {
      setInput(input + value);
    }
  };



  const clearInput = () => {
    setInput('')
  }

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    }
  }

  return (
    <div className='App'>
      <div className='title-container'>
        <h1 className='title'>Online React Calculator</h1>
      </div>
      <div className="calculator-container">
        <div> 
          <Screen 
            input={ input }
          />
        </div>
        <div className='fila'>
          <Button clickHandler={ addInput }>1</Button>
          <Button clickHandler={ addInput }>2</Button>
          <Button clickHandler={ addInput }>3</Button>
          <Button clickHandler={ addInput }>+</Button>
        </div>
        <div className='fila'>
          <Button clickHandler={ addInput }>4</Button>
          <Button clickHandler={ addInput }>5</Button>
          <Button clickHandler={ addInput }>6</Button>
          <Button clickHandler={ addInput }>-</Button>
        </div>
        <div className='fila'>
          <Button clickHandler={ addInput }>7</Button>
          <Button clickHandler={ addInput }>8</Button>
          <Button clickHandler={ addInput }>9</Button>
          <Button clickHandler={ addInput }>*</Button>
        </div>
        <div className='fila'>
          <Button clickHandler={ calculateResult }>=</Button>
          <Button clickHandler={ addInput }>0</Button>
          <Button clickHandler={ addInput }>.</Button>
          <Button clickHandler={ addInput }>/</Button>
        </div>
        <div className='fila'>
          <ClearButton clearHandler={ clearInput }>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
