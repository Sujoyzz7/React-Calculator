import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/theme';
import Button from './components/Button';
import Display from './components/Display';
import ButtonGrid from './components/ButtonGrid';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import { useCalculator } from './hooks/useCalculator';

const CalculatorApp = () => {
  const [theme, setTheme] = useState('light');
  const {
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
  } = useCalculator();

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <CalculatorWrapper>
        <CalculatorContainer>
          <Display 
            currentValue={currentValue}
            previousValue={previousValue}
            operation={operation}
          />
          <ButtonGrid>
            <Button onClick={handleClear} gridArea="clear" variant="function">AC</Button>
            <Button onClick={handleDelete} gridArea="delete" variant="function">⌫</Button>
            <Button onClick={handlePercentage} gridArea="percentage" variant="function">%</Button>
            <Button onClick={() => handleOperator('÷')} gridArea="divide" variant="operator">÷</Button>
            
            <Button onClick={() => handleNumberInput(7)} gridArea="seven">7</Button>
            <Button onClick={() => handleNumberInput(8)} gridArea="eight">8</Button>
            <Button onClick={() => handleNumberInput(9)} gridArea="nine">9</Button>
            <Button onClick={() => handleOperator('×')} gridArea="multiply" variant="operator">×</Button>
            
            <Button onClick={() => handleNumberInput(4)} gridArea="four">4</Button>
            <Button onClick={() => handleNumberInput(5)} gridArea="five">5</Button>
            <Button onClick={() => handleNumberInput(6)} gridArea="six">6</Button>
            <Button onClick={() => handleOperator('-')} gridArea="subtract" variant="operator">-</Button>
            
            <Button onClick={() => handleNumberInput(1)} gridArea="one">1</Button>
            <Button onClick={() => handleNumberInput(2)} gridArea="two">2</Button>
            <Button onClick={() => handleNumberInput(3)} gridArea="three">3</Button>
            <Button onClick={() => handleOperator('+')} gridArea="add" variant="operator">+</Button>
            
            <Button onClick={() => handleNumberInput(0)} gridArea="zero" wide>0</Button>
            <Button onClick={handleDecimal} gridArea="decimal">.</Button>
            <Button onClick={handleEquals} gridArea="equals" variant="operator">=</Button>
          </ButtonGrid>
          <ThemeToggle onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </ThemeToggle>
          <Footer />
        </CalculatorContainer>
      </CalculatorWrapper>
    </ThemeProvider>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CalculatorApp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

const CalculatorWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.body};
  transition: background-color 0.3s ease;
  padding: 20px;
`;

const CalculatorContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background: ${({ theme }) => theme.calculatorBackground};
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  margin: 20px 0;
  position: relative;
`;

const ThemeToggle = styled.button`
  position: absolute;
  top: 15px;
  left: 15px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.operatorBackground || '#007bff'};
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.focusColor || 'rgba(0, 123, 255, 0.5)'};
  }
`;
