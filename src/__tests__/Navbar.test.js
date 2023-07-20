import React from 'react';
import {
	render,
	fireEvent,
	waitFor,
	screen,
	waitForElementToBeClickable,
} from '@testing-library/react';
import {
	BrowserRouter as Router,
	MemoryRouter,
	Route,
	Routes,
} from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Login from '../components/Pages/Login/Login';
import Settings from '../components/Pages/Settings/Settings';
import Help from '../components/Pages/Help/Help';
import Dashboard from '../components/Dashboard/Dashboard';
import DashboardMUI from '../components/DashboardMUI/DashboardMUI';

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
		<MemoryRouter>
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

test('should call settings page when Setting button is clicked', () => {
	render(
		<MemoryRouter>
			<Navbar />
			<Routes>
				<Route path='/settings' element={<Settings />} />
			</Routes>
		</MemoryRouter>
	);

	const settingsButton = screen.getByTestId('settings-button');

	fireEvent.click(settingsButton);
	const settingsComponent = screen.getByTestId('settings');
	expect(settingsComponent).toBeInTheDocument();
});

test('should call help page when Help button is clicked', () => {
	render(
		<MemoryRouter>
			<Navbar />
			<Routes>
				<Route path='/help' element={<Help />} />
			</Routes>
		</MemoryRouter>
	);

	const helpButton = screen.getByTestId('help-button');

	fireEvent.click(helpButton);
	const helpComponent = screen.getByTestId('help');
	expect(helpComponent).toBeInTheDocument();
});

// test('should call Dashboard-MUI page when dashboardmui button is clicked', () => {
// 	render(
// 		<MemoryRouter>
// 			<Navbar />
// 			<Routes>
// 				<Route path='/dashboardmui' element={<DashboardMUI />} />
// 			</Routes>
// 		</MemoryRouter>
// 	);

// 	const dashboardmuiButton = screen.getByTestId('dashboardmui-button');

// 	fireEvent.click(dashboardmuiButton);
// 	const dashboardmuiComponent = screen.getByTestId('dashboardmui');
// 	expect(dashboardmuiComponent).toBeInTheDocument();
// });

// test('should call dashboard page when dashboard button is clicked', () => {
// 	render(
// 		<MemoryRouter>
// 			<Navbar />
// 			<Routes>
// 				<Route path='/dashboard' element={<Dashboard />} />
// 			</Routes>
// 		</MemoryRouter>
// 	);

// 	const dashboardButton = screen.getByTestId('Dashboard-button');

// 	fireEvent.click(dashboardButton);
// 	// const dashboardComponent = screen.getByTestId('dashboard');
//     const dashboardComponent = await waitForElementToBeClickable(
//         screen.getByTestId('dashboard')
//     );
// 	expect(dashboardComponent).toBeInTheDocument();
// });

// describe('Dashboard page', () => {
// 	test('should call dashboard page when dashboard button is clicked', async () => {
// 		render(
// 			<MemoryRouter>
// 				<Navbar />
// 				<Routes>
// 					<Route path='/dashboard' element={<Dashboard />} data-testid='dashboard' />
// 				</Routes>
// 			</MemoryRouter>
// 		);
// 		const dashboardButton = screen.getByTestId('Dashboard-button');
// 		fireEvent.click(dashboardButton);

// 		const dashboardComponent = await screen.findByTestId('dashboard');
// 		expect(dashboardComponent).toBeInTheDocument();
// 	});
// });

// TODO : CALL TESTS USING ARRAY
