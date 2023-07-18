import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import {
	BrowserRouter as Router,
	MemoryRouter,
	Route,
	Routes,
} from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Login from '../components/Pages/Login/Login';

jest.mock('reactjs-popup', () => ({
	__esModule: true,
	default: ({ trigger, children }) => (
		<div>
			{trigger}
			<div data-testid='popup-content'>{children}</div>
		</div>
	),
}));

describe('Navbar component', () => {
    
	test('should display popup with "Select Instance" text when clicked on "Instances"', async () => {
		render(
			<Router>
				<Navbar />
			</Router>
		);

		const instancesButton = screen.getByText('Instances');

		fireEvent.click(instancesButton);

		await waitFor(() => {
			const popupContent = screen.getByTestId('popup-content');
			const selectInstanceHeading = screen.getByText('Select Instance');
			const selectInstanceText = screen.getByText('Instances content here !!');

			expect(popupContent).toBeInTheDocument();
			expect(selectInstanceHeading).toBeInTheDocument();
			expect(selectInstanceText).toBeInTheDocument();
		});

		fireEvent.click(instancesButton);

		await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for the popup to be removed

		const popupContent = screen.queryByTestId('popup-content');
		expect(popupContent).toBeInTheDocument();
	});
});

test('should call login page when Logout button is clicked', () => {
	render(
		<MemoryRouter initialEntries={['/']}>
			<Navbar />
			<Routes>
				<Route path='/' element={<Login />} />
			</Routes>
		</MemoryRouter>
	);

	const logoutButton = screen.getByTestId('logout-button');

	fireEvent.click(logoutButton);
	const loginComponent = screen.getByTestId('login-page');
	expect(loginComponent).toBeInTheDocument();
});
