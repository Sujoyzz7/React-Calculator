import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <AboutContainer>
      <BackButton to="/">← Back to Calculator</BackButton>
      <h1>About This Calculator</h1>
      <p>
        This is a modern, responsive calculator built with React. It supports basic arithmetic operations,
        theme switching (light/dark mode), and is fully keyboard accessible.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Basic arithmetic operations (+, -, ×, ÷)</li>
        <li>Dark/Light theme support</li>
        <li>Responsive design</li>
        <li>Keyboard support</li>
        <li>Memory functions</li>
      </ul>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: ${({ theme }) => theme.calculatorBackground};
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.text};
  
  h1 {
    color: ${({ theme }) => theme.operatorBackground};
    margin-bottom: 1.5rem;
  }
  
  h2 {
    color: ${({ theme }) => theme.operatorBackground};
    margin: 1.5rem 0 1rem;
  }
  
  ul {
    padding-left: 1.5rem;
    line-height: 1.6;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
`;

const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.operatorBackground};
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;
