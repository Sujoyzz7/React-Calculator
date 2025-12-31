import React from 'react';
import styled from 'styled-components';

const ButtonGrid = ({ children }) => {
  return <ButtonGridContainer>{children}</ButtonGridContainer>;
};

export default ButtonGrid;

const ButtonGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 10px;
  grid-template-areas:
    "clear delete percentage divide"
    "seven eight nine multiply"
    "four five six subtract"
    "one two three add"
    "zero zero decimal equals";
  
  & > button:nth-child(1) { grid-area: clear; }
  & > button:nth-child(2) { grid-area: delete; }
  & > button:nth-child(3) { grid-area: percentage; }
  & > button:nth-child(4) { grid-area: divide; }
  & > button:nth-child(5) { grid-area: seven; }
  & > button:nth-child(6) { grid-area: eight; }
  & > button:nth-child(7) { grid-area: nine; }
  & > button:nth-child(8) { grid-area: multiply; }
  & > button:nth-child(9) { grid-area: four; }
  & > button:nth-child(10) { grid-area: five; }
  & > button:nth-child(11) { grid-area: six; }
  & > button:nth-child(12) { grid-area: subtract; }
  & > button:nth-child(13) { grid-area: one; }
  & > button:nth-child(14) { grid-area: two; }
  & > button:nth-child(15) { grid-area: three; }
  & > button:nth-child(16) { grid-area: add; }
  & > button:nth-child(17) { grid-area: zero; }
  & > button:nth-child(18) { grid-area: decimal; }
  & > button:nth-child(19) { grid-area: equals; }
`;
