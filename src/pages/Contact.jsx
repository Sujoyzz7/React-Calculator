import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ContactContainer>
      <BackButton to="/">← Back to Calculator</BackButton>
      <h1>Contact Us</h1>
      <p>Have questions or feedback? We'd love to hear from you!</p>
      
      <ContactForm onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </FormGroup>
        
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
      
      <ContactInfo>
        <h3>Or reach out directly:</h3>
        <p>Email: contact@example.com</p>
        <p>GitHub: <a href="https://github.com/Sujoyzz7" target="_blank" rel="noopener noreferrer">@Sujoyzz7</a></p>
      </ContactInfo>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: ${({ theme }) => theme.calculatorBackground};
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.text};
  
  h1 {
    color: ${({ theme }) => theme.operatorBackground};
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
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

const ContactForm = styled.form`
  margin: 2rem 0;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid ${({ theme }) => theme.borderColor || '#ddd'};
    border-radius: 6px;
    font-size: 1rem;
    background: ${({ theme }) => theme.displayBackground || '#fff'};
    color: ${({ theme }) => theme.text};
    
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.operatorBackground};
      box-shadow: 0 0 0 2px ${({ theme }) => theme.focusColor || 'rgba(0, 123, 255, 0.25)'};
    }
  }
`;

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.operatorBackground};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ theme }) => theme.operatorBackground && `${theme.operatorBackground}dd`};
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const ContactInfo = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.borderColor || '#eee'};
  
  h3 {
    color: ${({ theme }) => theme.operatorBackground};
    margin-bottom: 1rem;
  }
  
  p {
    margin: 0.5rem 0;
  }
  
  a {
    color: ${({ theme }) => theme.operatorBackground};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;
