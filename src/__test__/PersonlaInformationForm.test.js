import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PersonalInformationForm from '../components/PersonalInformationForm';
import { MyContext } from '../components/MyContext';

describe('PersonalInformationForm Component', () => {
  const formDataMock = {
    name: '',
    email: '',
    phone: ''
  };

  const setFormDataMock = jest.fn();

  const setStepMock = jest.fn();

  beforeEach(() => {
    render(
      <MyContext.Provider value={{ formData: formDataMock, setFormData: setFormDataMock }}>
        <PersonalInformationForm step={1} setStep={setStepMock} />
      </MyContext.Provider>
    );
  });

  test('renders form with input fields and submit button', () => {
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/phone/i)).toBeInTheDocument();
    expect(screen.getByText(/next/i)).toBeInTheDocument();
  });

  test('updates input values on change', () => {
    const nameInput = screen.getByPlaceholderText(/name/i);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const phoneInput = screen.getByPlaceholderText(/phone/i);

    // Mock the behavior of setFormData to handle functional updates
    setFormDataMock.mockImplementation((updateFn) => {
      const newState = updateFn(formDataMock);  // Simulate functional update
      formDataMock.name = newState.name || '';
      formDataMock.email = newState.email || '';
      formDataMock.phone = newState.phone || '';
    });

    // Fire change events for inputs
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });

    // Assert the final state of formData
    expect(formDataMock).toEqual({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
    });
  });

  test('calls setStep on form submission', () => {
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    expect(setStepMock).toHaveBeenCalledWith(2);
  });
});
