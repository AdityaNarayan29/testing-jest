import React, { useState } from 'react';
import './Login.css';

const LoginPage = () => {
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

		console.log('Email:', email);
		console.log('Password:', password);
		console.log('Remember me:', rememberMe);

		setEmail('');
		setPassword('');
		setRememberMe(false);
	};

	return (
		<div data-testid='login-page' className='login-page'>
			<h2>Login Page</h2>
			<form
				data-testid='login-form'
				className='login-form'
				onSubmit={handleSubmit}
			>
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
