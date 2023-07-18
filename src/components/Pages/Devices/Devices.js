import React from 'react';
import './Devices.css';

function Devices() {
	const devicesData = [
		{
			model: 'Device Model A',
			quantity: 10,
			available: 8,
			manufacturer: 'Manufacturer A',
			price: '$100',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			model: 'Device Model B',
			quantity: 15,
			available: 12,
			manufacturer: 'Manufacturer B',
			price: '$150',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			model: 'Device Model C',
			quantity: 20,
			available: 18,
			manufacturer: 'Manufacturer C',
			price: '$200',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			model: 'Device Model D',
			quantity: 5,
			available: 3,
			manufacturer: 'Manufacturer D',
			price: '$80',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			model: 'Device Model E',
			quantity: 12,
			available: 10,
			manufacturer: 'Manufacturer E',
			price: '$120',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			model: 'Device Model A',
			quantity: 10,
			available: 8,
			manufacturer: 'Manufacturer A',
			price: '$100',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			model: 'Device Model B',
			quantity: 15,
			available: 12,
			manufacturer: 'Manufacturer B',
			price: '$150',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			model: 'Device Model C',
			quantity: 20,
			available: 18,
			manufacturer: 'Manufacturer C',
			price: '$200',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			model: 'Device Model D',
			quantity: 5,
			available: 3,
			manufacturer: 'Manufacturer D',
			price: '$80',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			model: 'Device Model E',
			quantity: 12,
			available: 10,
			manufacturer: 'Manufacturer E',
			price: '$120',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		// Add more devices data as needed
	];

	return (
		<div className='devices'>
			<h1>Devices</h1>
			<table>
				<thead>
					<tr>
						<th>Model</th>
						<th>Quantity</th>
						<th>Available</th>
						<th>Manufacturer</th>
						<th>Price</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{devicesData.map((device, index) => (
						<tr key={index}>
							<td>{device.model}</td>
							<td>{device.quantity}</td>
							<td>{device.available}</td>
							<td>{device.manufacturer}</td>
							<td>{device.price}</td>
							<td>{device.description}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Devices;
