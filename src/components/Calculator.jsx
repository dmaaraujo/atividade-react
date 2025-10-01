import { useState } from 'react';

// src/components/Calculator.jsx

const Calculator = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const handleNum1Change = (e) => setNum1(Number(e.target.value));
    const handleNum2Change = (e) => setNum2(Number(e.target.value));

    const sum = num1 + num2;

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
            <p>{num1} + {num2} = {sum}</p>
        </div>
    );
};

export default Calculator;