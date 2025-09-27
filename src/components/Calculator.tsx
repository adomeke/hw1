import React, { useState } from 'react';
import { Calculator as CalculatorClass } from '../utils/calculator';

const Calculator: React.FC = () => {
  const [calculator] = useState(() => new CalculatorClass());
  const [display, setDisplay] = useState(calculator.getDisplay());

  const updateDisplay = () => {
    setDisplay(calculator.getDisplay());
  };

  const handleDigit = (digit: string) => {
    calculator.inputDigit(digit);
    updateDisplay();
  };

  const handleDecimal = () => {
    calculator.inputDecimal();
    updateDisplay();
  };

  const handleOperation = (operation: string) => {
    calculator.performOperation(operation);
    updateDisplay();
  };

  const handleEquals = () => {
    calculator.equals();
    updateDisplay();
  };

  const handleClear = () => {
    calculator.clear();
    updateDisplay();
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm mx-auto">
      <div className="mb-4">
        <input
          type="text"
          value={display}
          readOnly
          className="w-full text-right text-2xl font-mono bg-gray-900 text-white p-4 rounded border-0 focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-4 gap-2">
        <button
          onClick={handleClear}
          className="col-span-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded transition-colors"
        >
          Clear
        </button>
        <button
          onClick={() => handleOperation('/')}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded transition-colors"
        >
          ÷
        </button>
        <button
          onClick={() => handleOperation('*')}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded transition-colors"
        >
          ×
        </button>

        <button
          onClick={() => handleDigit('7')}
          className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-4 rounded transition-colors"
        >
          7
        </button>
        <button
          onClick={() => handleDigit('8')}
          className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-4 rounded transition-colors"
        >
          8
        </button>
        <button
          onClick={() => handleDigit('9')}
          className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-4 rounded transition-colors"
        >
          9
        </button>
        <button
          onClick={() => handleOperation('-')}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded transition-colors"
        >
          −
        </button>

        <button
          onClick={() => handleDigit('4')}
          className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-4 rounded transition-colors"
        >
          4
        </button>
        <button
          onClick={() => handleDigit('5')}
          className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-4 rounded transition-colors"
        >
          5
        </button>
        <button
          onClick={() => handleDigit('6')}
          className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-4 rounded transition-colors"
        >
          6
        </button>
        <button
          onClick={() => handleOperation('+')}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded transition-colors"
        >
          +
        </button>

        <button
          onClick={() => handleDigit('1')}
          className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-4 rounded transition-colors"
        >
          1
        </button>
        <button
          onClick={() => handleDigit('2')}
          className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-4 rounded transition-colors"
        >
          2
        </button>
        <button
          onClick={() => handleDigit('3')}
          className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-4 rounded transition-colors"
        >
          3
        </button>
        <button
          onClick={handleEquals}
          className="row-span-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded transition-colors"
        >
          =
        </button>

        <button
          onClick={() => handleDigit('0')}
          className="col-span-2 bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-4 rounded transition-colors"
        >
          0
        </button>
        <button
          onClick={handleDecimal}
          className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-4 rounded transition-colors"
        >
          .
        </button>
      </div>
    </div>
  );
};

export default Calculator;
