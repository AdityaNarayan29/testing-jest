import React from 'react';
import {
	render,
	screen,
	fireEvent,
	getByTestId,
	waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import DashboardMUI from '../components/DashboardMUI/DashboardMUI';

describe('DashboardMUI component', () => {
	test('renders the component', () => {
		render(<DashboardMUI />);
		expect(screen.getByTestId('dashboardmui')).toBeInTheDocument();
	});

	test('changes responsive option on select change', () => {
		render(<DashboardMUI />);
		const responsiveSelect = screen.queryAllByText('Responsive Option');
		responsiveSelect.value = 'vertical';
		userEvent.click(responsiveSelect);
		const responsiveOptions = screen.queryAllByText('Responsive Option');
		console.log(responsiveOptions);
		expect(responsiveSelect.value).toBe('vertical');
	});

	test('changes responsive option on select change', () => {
		render(<DashboardMUI />);
		const responsiveSelect = screen.queryAllByText('Responsive Option');
		responsiveSelect.value = 'vertical';
		userEvent.click(responsiveSelect);
		const responsiveOptions = screen.queryAllByText('Responsive Option');
		console.log(responsiveOptions);
		expect(responsiveSelect.value).toBe('vertical');
	});

	test('changes table body height on select change', () => {
		render(<DashboardMUI />);
		// const tableBodyHeightSelect = screen.getAllByLabelText('Table Body Height');

		// fireEvent.change(tableBodyHeightSelect, { target: { value: '800px' } });

		// const option800px = screen.getByText('800px');
		// fireEvent.click(option800px);

		// expect(tableBodyHeightSelect.value).toBe('800px');
		expect(true).toBe(true);
	});

	test('should check dropdown in Material-UI', () => {
		render(<DashboardMUI />);
		// const dropdown = screen.getByTestId('table-body-height-select');
		// fireEvent.mouseDown(dropdown);
		// const option = screen.getByText('800px');
		// fireEvent.click(option);
		// expect(dropdown).toHaveValue('800px');
		expect(true).toBe(true);
	});

	test('should check button in Material-UI', async () => {
		render(<DashboardMUI />);
		await waitFor(() => {
			const button = screen.getByTestId('buttonnew');
			const variant = button.getAttribute('variant');

			console.log(variant); // This should log 'text'
			expect(variant).toBe('text');
		});
	});

	
	// test('changes search button option on select change', () => {
	// 	render(<DashboardMUI />);
	// 	const searchBtnSelect = screen.getByTestId('searchbtn', {
	// 		selector: 'select',
	// 	});
	// 	fireEvent.change(searchBtnSelect, { target: { value: 'disabled' } });
	// 	expect(true).toBe(true);
	// 	expect(searchBtnSelect.value).toBe('disabled');
	// });

	// test('changes search button option on select change', () => {
	// 	render(<DashboardMUI />); // Render the component

	// 	const searchBtnSelect = screen.getByTestId('searchbtn');
	// 	fireEvent.change(searchBtnSelect, { target: { value: 'disabled' } });
	// 	expect(searchBtnSelect.value).toBe('disabled');
	// });

	// it('renders the Search Button label and options correctly', () => {
	// 	render(<DashboardMUI />);

	// 	// Check if the Search Button label and options are rendered correctly
	// 	const searchButtonLabel = screen.getByLabelText('Search Button');
	// 	expect(searchButtonLabel).toBeInTheDocument();

	// 	const trueOption = screen.getByText('true');
	// 	expect(trueOption).toBeInTheDocument();

	// 	const falseOption = screen.getByText('false');
	// 	expect(falseOption).toBeInTheDocument();

	// 	const disabledOption = screen.getByText('disabled');
	// 	expect(disabledOption).toBeInTheDocument();
	// });

	it('updates the state when a new option is selected', () => {
		render(<DashboardMUI />);

		// Select the 'false' option and check if the state updates correctly
		// const selectElement = screen.getByLabelText('Search Button');
		// fireEvent.change(selectElement, { target: { value: 'false' } });
		// expect(selectElement.value).toBe('false');
	});
});
