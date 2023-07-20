import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../Sidebar/SidebarData';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Popup from 'reactjs-popup';
// import DashboardMUI from '../DashboardMUI/DashboardMUI';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Navbar = () => {
	const [sidebar, setSidebar] = useState(false);
	const [instance, setInstance] = React.useState('');

	const handleChange = (event) => {
		setInstance(event.target.value);
	};
	const showSidebar = () => setSidebar(!sidebar);
	return (
		<>
			<IconContext.Provider value={{ color: '#fff' }}>
				<div className='navbar'>
					<Link to='#' className='menu-bars'>
						<FaIcons.FaBars onClick={showSidebar} />
					</Link>
				</div>
				<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
					<ul className='nav-menu-items' onClick={showSidebar}>
						<div className='collapse'>
							<li>
								<span className='nav-text logo'>Logo</span>
							</li>
							<li className='navbar-toggle '>
								<Link to='#' className='menu-bars'>
									<AiIcons.AiOutlineLeft />
								</Link>
							</li>
						</div>
						{SidebarData.map((item, index) => {
							return (
								<li
									key={index}
									className={item.cName}
									data-testid={item.title + '-button'}
								>
									<Link to={item.path}>
										{item.icon}
										<span>{item.title}</span>
									</Link>
								</li>
							);
						})}
						<li className='nav-text' data-testid={'dashboardmui-button'}>
							<Link to='/dashboardmui'>
								<AiIcons.AiFillHome />
								<span>Dashboard-Mui</span>
							</Link>
						</li>
					</ul>
					<div>
						<div className='nav-text '>
							<a>
								<AiIcons.AiFillCode style={{ fontSize: '32px' }} />
								<Popup
									trigger={<span className='nav-btn'>Instances</span>}
									position='right center'
									data-testid='popup-content'
								>
									<h2>Select Instance</h2>
									<div>Instances content here !!</div>
									<FormControl sx={{ m: 1, minWidth: 120 }}>
										<InputLabel id='demo-simple-select-helper-label'>
											Instance
										</InputLabel>
										<Select
											labelId='demo-simple-select-helper-label'
											id='demo-simple-select-helper'
											value={instance}
											label='Instance'
											onChange={handleChange}
										>
											<MenuItem value=''>
												<em>None</em>
											</MenuItem>
											<MenuItem value={10}>Ten</MenuItem>
											<MenuItem value={20}>Twenty</MenuItem>
											<MenuItem value={30}>Thirty</MenuItem>
										</Select>
									</FormControl>
								</Popup>
							</a>
						</div>
						<div className='nav-bottom'>
							<Link to='/help' onClick={showSidebar} data-testid='help-button'>
								<AiIcons.AiOutlineQuestionCircle />
							</Link>
							<Link
								to='/settings'
								onClick={showSidebar}
								data-testid='settings-button'
							>
								<AiIcons.AiFillSetting />
							</Link>
							<Link to='/' onClick={showSidebar} data-testid='logout-button'>
								<AiIcons.AiOutlineLogout />
							</Link>
						</div>
					</div>
				</nav>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;
