import React, { useState } from 'react';
import './Settings.css'


function Settings() {
	const [selectedTheme, setSelectedTheme] = useState('light');
	const [notificationsEnabled, setNotificationsEnabled] = useState(true);
	const [language, setLanguage] = useState('en');

	const handleThemeChange = (event) => {
		setSelectedTheme(event.target.value);
		// Apply theme change logic here
	};

	const handleNotificationsChange = () => {
		setNotificationsEnabled(!notificationsEnabled);
		// Apply notifications change logic here
	};

	const handleLanguageChange = (event) => {
		setLanguage(event.target.value);
		// Apply language change logic here
	};

	return (
		<div className='settings' data-testid='settings'>
			<h1>Settings</h1>
			<div className='appearance-section'>
				<h2>Appearance</h2>
				<div className='theme-selector'>
					<label htmlFor='theme'>Choose a theme:</label>
					<select id='theme' value={selectedTheme} onChange={handleThemeChange}>
						<option value='light'>Light</option>
						<option value='dark'>Dark</option>
					</select>
				</div>
			</div>
			<div className='notifications-section'>
				<h2>Notifications</h2>
				<div className='notification-toggle'>
					<label htmlFor='notifications'>Enable notifications:</label>
					<input
						type='checkbox'
						id='notifications'
						checked={notificationsEnabled}
						onChange={handleNotificationsChange}
					/>
				</div>
			</div>
			<div className='language-section'>
				<h2>Language</h2>
				<div className='language-selector'>
					<label htmlFor='language'>Select language:</label>
					<select
						id='language'
						value={language}
						onChange={handleLanguageChange}
					>
						<option value='en'>English</option>
						<option value='fr'>French</option>
						<option value='es'>Spanish</option>
					</select>
				</div>
			</div>
			{/* Add more sections and settings options as needed */}
		</div>
	);
}
export default Settings;
