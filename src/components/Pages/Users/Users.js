import React from 'react';
import './Users.css';

function Users() {
	const usersData = [
		{
			id: 1,
			name: 'John Doe',
			email: 'johndoe@example.com',
			role: 'Admin',
			status: 'Active',
		},
		{
			id: 2,
			name: 'Jane Smith',
			email: 'janesmith@example.com',
			role: 'User',
			status: 'Active',
		},
		{
			id: 3,
			name: 'Alex Johnson',
			email: 'alexjohnson@example.com',
			role: 'User',
			status: 'Inactive',
		},
		{
			id: 4,
			name: 'Sarah Wilson',
			email: 'sarahwilson@example.com',
			role: 'User',
			status: 'Active',
		},
		{
			id: 1,
			name: 'John Doe',
			email: 'johndoe@example.com',
			role: 'Admin',
			status: 'Active',
		},
		{
			id: 2,
			name: 'Jane Smith',
			email: 'janesmith@example.com',
			role: 'User',
			status: 'Active',
		},
		{
			id: 3,
			name: 'Alex Johnson',
			email: 'alexjohnson@example.com',
			role: 'User',
			status: 'Inactive',
		},
		{
			id: 4,
			name: 'Sarah Wilson',
			email: 'sarahwilson@example.com',
			role: 'User',
			status: 'Active',
		},
		// Add more user data as needed
	];

	return (
		<div className='users'>
			<h1>Users</h1>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Email</th>
						<th>Role</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{usersData.map((user) => (
						<tr key={user.id}>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>{user.role}</td>
							<td>{user.status}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Users;
