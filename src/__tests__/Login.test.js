import React from 'react';
import {
	render,
	fireEvent,
	screen,
	waitFor,
	userEvent,
} from '@testing-library/react';
import Login from './../components/Login/Login';

// Checks if the test file runs
test('adds two numbers correctly', () => {
	expect(2 + 3).toBe(5);
});

// Checks if the component is rendered.
test('should render login element', () => {
	render(<Login />);
	const loginElement = screen.getByTestId('login-page');
	expect(loginElement).not.toBeNull();
	expect(loginElement).toBeInTheDocument();
});

// Checks if email input works alone.
test('should update email state on input change', () => {
	render(<Login />);
	const emailInput = screen.getByLabelText('Email:');
	fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
	expect(emailInput.value).toBe('test@example.com');
});

describe('Login', () => {
	// We can use (" beforeEach ") but in those cases only where the test cases have only one expect method.

	// beforeEach(() => {
	// 		render(<Login />);
	// 	});

	// Checks if describe works.
	test('adds two numbers correctly', () => {
		expect(2 + 3).toBe(5);
	});

	// Checks if email input works.
	test('should update email state on input change', () => {
		render(<Login />);
		const emailInput = screen.getByLabelText('Email:');
		fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
		expect(emailInput.value).toBe('test@example.com');
	});

	// Checks if email is in a valid format using regex
	test('should send email with proper format', async () => {
		const handleSubmitMock = jest.fn();
		render(<Login handleSubmit={handleSubmitMock} />);

		const emailInput = screen.getByLabelText('Email:');
		fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
		expect(emailInput.value).toBe('test@example.com');

		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		const isEmailValid = emailRegex.test(emailInput.value);

		expect(isEmailValid).toBeTruthy();
	});

	// Checks if password input works.
	test('should update password state on input change', () => {
		render(<Login />);
		const passwordInput = screen.getByLabelText('Password:');
		fireEvent.change(passwordInput, { target: { value: 'password123' } });
		expect(passwordInput.value).toBe('password123');
	});

	// Checks if checkbox works. For this case we cant use
	test('should toggle rememberMe state on checkbox change', () => {
		render(<Login />);
		const rememberMeCheckbox = screen.getByLabelText('Remember me');
		fireEvent.click(rememberMeCheckbox);
		expect(rememberMeCheckbox.checked).toBe(true);
		fireEvent.click(rememberMeCheckbox);
		expect(rememberMeCheckbox.checked).toBe(false);
	});

	// Checks if handlesubmit fn works (once).
	test('should call handleSubmit on form submission', () => {
		render(<Login />);
		const handleSubmitMock = jest.fn();
		const form = screen.getByTestId('login-form');
		form.addEventListener('submit', handleSubmitMock);
		fireEvent.submit(form);
		expect(handleSubmitMock).toHaveBeenCalledTimes(1);
	});

	// Additional test cases to be added.
});
