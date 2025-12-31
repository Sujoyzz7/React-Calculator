import React from 'react';
import styled from 'styled-components';

const Display = ({ currentValue, previousValue, operation }) => {
  return (
    <DisplayContainer>
      <PreviousValue>
        {previousValue} {operation}
      </PreviousValue>
      <CurrentValue>{currentValue}</CurrentValue>
    </DisplayContainer>
  );
};

export default Display;

const DisplayContainer = styled.div`
  background: ${({ theme }) => theme.displayBackground};
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: right;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  word-wrap: break-word;
  word-break: break-all;
`;

const PreviousValue = styled.div`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 1.2rem;
  min-height: 24px;
`;

const CurrentValue = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 2.5rem;
  font-weight: 300;
  margin-top: 8px;
`;
