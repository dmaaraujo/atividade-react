import { useState } from 'react';

// src/components/Calculator.jsx

const Calculator = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(null);

    const handleNum1Change = (e) => setNum1(Number(e.target.value));
    const handleNum2Change = (e) => setNum2(Number(e.target.value));

    const handleSum = () => setResult(num1 + num2);
    const handleSubtract = () => setResult(num1 - num2);
    const handleMultiply = () => setResult(num1 * num2);
    const handleDivide = () => setResult(num2 !== 0 ? num1 / num2 : 'Não é possível dividir por zero');

    return (
        <div>
            <h3>Calculadora</h3>
            <div>
                <label>
                    Número 1:
                    <input type="number" value={num1} onChange={handleNum1Change} />
                </label>
            </div>
            <div>
                <label>
                    Número 2:
                    <input type="number" value={num2} onChange={handleNum2Change} />
                </label>
            </div>
            <div>
                <button onClick={handleSum}>Somar</button>
                <button onClick={handleSubtract}>Subtrair</button>
                <button onClick={handleMultiply}>Multiplicar</button>
                <button onClick={handleDivide}>Dividir</button>
            </div>
            {result !== null && <p>Resultado: {result}</p>}
        </div>
    );
};

export default Calculator;