import React, { useState } from 'react';

const LoginPage = ({ onSubmit }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleRememberMeChange = () => {
		setRememberMe(!rememberMe);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validate email format using regex
		// const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		// const isEmailValid = emailRegex.test(email);

		// if (!isEmailValid) {
		// 	console.log('Invalid email format');
		// 	return;
		// }

		// with the email and password for authentication
		console.log('Email:', email);
		console.log('Password:', password);
		console.log('Remember me:', rememberMe);

		// Reset the form
		setEmail('');
		setPassword('');
		setRememberMe(false);

		// Call the onSubmit function provided by the parent component
		// onSubmit(email);
	};

	return (
		<div data-testid='login-page'>
			<h2>Login Page</h2>
			<form data-testid='login-form' onSubmit={handleSubmit}>
				<div>
					<label htmlFor='email-input'>Email:</label>
					<input
						type='email'
						id='email-input'
						data-testid='email-textfield'
						value={email}
						onChange={handleEmailChange}
						required
					/>
				</div>
				<div>
					<label htmlFor='password-input'>Password:</label>
					<input
						type='password'
						id='password-input'
						value={password}
						onChange={handlePasswordChange}
						required
					/>
				</div>
				<div>
					<label htmlFor='remember'>
						<input
							type='checkbox'
							id='remember'
							checked={rememberMe}
							onChange={handleRememberMeChange}
						/>
						Remember me
					</label>
				</div>
				<div>
					<button type='submit'>Login</button>
				</div>
			</form>
		</div>
	);
};

export default LoginPage;
