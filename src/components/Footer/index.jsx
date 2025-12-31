import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <p>© {currentYear} React Calculator. All rights reserved.</p>
        <FooterLinks>
          <ExternalLink href="https://github.com/Sujoyzz7" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            GitHub
          </ExternalLink>
          <StyledLink to="/about" aria-label="About Page">
            About
          </StyledLink>
          <StyledLink to="/contact" aria-label="Contact Page">
            Contact
          </StyledLink>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  margin-top: 3rem;
  padding: 1.75rem 0;
  background: ${({ theme }) => theme.calculatorBackground};
  border-radius: 12px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 420px;
  margin: 2rem auto 0;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

const FooterContent = styled.div`
  max-width: 90%;
  margin: 0 auto;
  text-align: center;
  padding: 0 1.5rem;
  
  p {
    color: ${({ theme }) => theme.secondaryText || '#666666'};
    margin: 0 0 1.25rem 0;
    font-size: 0.95rem;
    line-height: 1.5;
    font-weight: 400;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin: 0 auto;
  max-width: 350px;
`;

const linkStyles = `
  color: ${({ theme }) => theme.operatorBackground || '#007bff'};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.operatorBackground || '#007bff'};
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  
  &:hover {
    color: ${({ theme }) => theme.operatorBackground || '#007bff'};
    background: ${({ theme }) => theme.operatorBackground ? `${theme.operatorBackground}15` : 'rgba(0, 123, 255, 0.1)'};
    transform: translateY(-1px);
    
    &::after {
      width: 70%;
    }
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const StyledLink = styled(Link)`
  ${linkStyles}
`;

const ExternalLink = styled.a`
  ${linkStyles}
  
  &[target="_blank"]::after {
    content: '↗';
    display: inline-block;
    margin-left: 4px;
    font-size: 0.8em;
    line-height: 1;
    vertical-align: middle;
  }
`;
