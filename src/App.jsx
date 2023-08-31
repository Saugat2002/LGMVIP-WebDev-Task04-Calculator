import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState("");

  const appendCharacter = (char) => {
    setResult(result + char);
  };

  const clearResult = () => {
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <>
      <div className='text'>Calculator</div>
      <div className="calculator">
        <input type="text" id="result" value={result} readOnly />
        <div className="buttons">
          <button className="operator" onClick={() => appendCharacter('/')}>/</button>
          <button className="operator" onClick={() => appendCharacter('*')}>*</button>
          <button className="operator" onClick={() => appendCharacter('-')}>-</button>
          <button className="operator" onClick={() => appendCharacter('+')}>+</button>
          <button onClick={clearResult}>C</button>
          <button onClick={calculateResult}>=</button>
          <button onClick={() => appendCharacter('7')}>7</button>
          <button onClick={() => appendCharacter('8')}>8</button>
          <button onClick={() => appendCharacter('9')}>9</button>
          <button onClick={() => appendCharacter('4')}>4</button>
          <button onClick={() => appendCharacter('5')}>5</button>
          <button onClick={() => appendCharacter('6')}>6</button>
          <button onClick={() => appendCharacter('1')}>1</button>
          <button onClick={() => appendCharacter('2')}>2</button>
          <button onClick={() => appendCharacter('3')}>3</button>
          <button onClick={() => appendCharacter('0')}>0</button>
          <button onClick={() => appendCharacter('.')}>.</button>
        </div>
      </div>
    </>
  );
}

export default App;