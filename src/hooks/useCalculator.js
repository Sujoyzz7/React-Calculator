import { useState, useEffect } from 'react';

export const useCalculator = () => {
  const [currentValue, setCurrentValue] = useState('0');
  const [previousValue, setPreviousValue] = useState('');
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [storedValue, setStoredValue] = useState(null);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key >= '0' && e.key <= '9') {
        handleNumberInput(parseInt(e.key, 10));
      } else if (e.key === '.') {
        handleDecimal();
      } else if (e.key === '=' || e.key === 'Enter') {
        handleEquals();
      } else if (e.key === 'Backspace') {
        handleDelete();
      } else if (e.key === 'Escape') {
        handleClear();
      } else if (e.key === '%') {
        handlePercentage();
      } else if (['+', '-', '*', '/'].includes(e.key)) {
        const operatorMap = {
          '/': '÷',
          '*': '×',
          '+': '+',
          '-': '-'
        };
        handleOperator(operatorMap[e.key]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentValue, previousValue, operation, waitingForOperand]);

  const clearAll = () => {
    setCurrentValue('0');
    setPreviousValue('');
    setOperation(null);
    setWaitingForOperand(false);
  };

  const handleClear = () => {
    clearAll();
  };

  const handleDelete = () => {
    if (currentValue === '0') return;
    
    if (currentValue.length === 1) {
      setCurrentValue('0');
    } else {
      setCurrentValue(currentValue.slice(0, -1));
    }
  };

  const handleNumberInput = (number) => {
    if (waitingForOperand) {
      setCurrentValue(String(number));
      setWaitingForOperand(false);
    } else {
      setCurrentValue(currentValue === '0' ? String(number) : currentValue + number);
    }
  };

  const handleDecimal = () => {
    if (waitingForOperand) {
      setCurrentValue('0.');
      setWaitingForOperand(false);
      return;
    }

    if (!currentValue.includes('.')) {
      setCurrentValue(currentValue + '.');
    }
  };

  const handlePercentage = () => {
    const value = parseFloat(currentValue);
    setCurrentValue(String(value / 100));
  };

  const handleToggleSign = () => {
    const newValue = parseFloat(currentValue) * -1;
    setCurrentValue(String(newValue));
  };

  const performOperation = (firstOperand, secondOperand, operation) => {
    const first = parseFloat(firstOperand);
    const second = parseFloat(secondOperand);
    
    switch (operation) {
      case '+':
        return first + second;
      case '−':
        return first - second;
      case '×':
        return first * second;
      case '÷':
        if (second === 0) {
          clearAll();
          return 'Error';
        }
        return first / second;
      default:
        return second;
    }
  };

  const handleOperator = (nextOperation) => {
    const inputValue = currentValue;

    if (previousValue && operation && !waitingForOperand) {
      const result = performOperation(previousValue, inputValue, operation);
      
      if (result === 'Error') {
        setCurrentValue('Cannot divide by zero');
        setPreviousValue('');
        setOperation(null);
        setWaitingForOperand(true);
        return;
      }
      
      setCurrentValue(String(result));
      setPreviousValue(String(result));
    } else {
      setPreviousValue(inputValue);
    }
    
    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const handleEquals = () => {
    if (!operation || !previousValue) return;
    
    const result = performOperation(previousValue, currentValue, operation);
    
    if (result === 'Error') {
      setCurrentValue('Cannot divide by zero');
    } else {
      setCurrentValue(String(result));
    }
    
    setPreviousValue('');
    setOperation(null);
    setWaitingForOperand(true);
  };

  return {
    currentValue,
    previousValue,
    operation,
    handleNumberInput,
    handleOperator,
    handleEquals,
    handleClear,
    handleDelete,
    handleDecimal,
    handlePercentage,
    handleToggleSign,
    storedValue,
  };
};
