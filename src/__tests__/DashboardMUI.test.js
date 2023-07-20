import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For more readable assertions
import DashboardMUI from '../components/DashboardMUI/DashboardMUI';

describe('DashboardMUI component', () => {
	test('renders the component', () => {
		render(<DashboardMUI />);
		expect(screen.getByTestId('dashboardmui')).toBeInTheDocument();
	});

	// test('changes responsive option on select change', () => {
	// 	render(<DashboardMUI />);
	// 	const responsiveSelect = screen.getByLabelText('Responsive Option');
	// 	fireEvent.change(responsiveSelect, { target: { value: 'standard' } });
	// 	expect(responsiveSelect.value).toBe('standard');
	// });

	// test('changes table body height on select change', () => {
	// 	render(<DashboardMUI />);
	// 	const tableBodyHeightSelect = screen.getByLabelText('Table Body Height');
	// 	fireEvent.change(tableBodyHeightSelect, { target: { value: '800px' } });
	// 	expect(tableBodyHeightSelect.value).toBe('800px');
	// });

	// test('changes search button option on select change', () => {
	// 	render(<DashboardMUI />);
	// 	const searchBtnSelect = screen.getByLabelText('Search Button', {
	// 		selector: 'select',
	// 	});
	// 	fireEvent.change(searchBtnSelect, { target: { value: 'disabled' } });
    //     expect(true).toBe(true);
	// 	// expect(searchBtnSelect.value).toBe('disabled');
	// });

	// Add similar tests for other select inputs
});
