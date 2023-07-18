import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../Sidebar/SidebarData';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Popup from 'reactjs-popup';

const Navbar = () => {
	const [sidebar, setSidebar] = useState(false);

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
									<AiIcons.AiOutlineClose />
								</Link>
							</li>
						</div>
						{SidebarData.map((item, index) => {
							return (
								<li key={index} className={item.cName}>
									<Link to={item.path}>
										{item.icon}
										<span>{item.title}</span>
									</Link>
								</li>
							);
						})}
					</ul>
					<div>
						<div className='nav-text '>
							<a>
								<AiIcons.AiFillCode />
								<Popup
									trigger={<span className='nav-btn'>Instances</span>}
									position='right center'
									data-testid='popup-content'
								>
									<h2>Select Instance</h2>
									<div>Instances content here !!</div>
								</Popup>
							</a>
						</div>
						<div className='nav-bottom'>
							<Link to='/help' onClick={showSidebar}>
								<AiIcons.AiOutlineQuestionCircle />
							</Link>
							<Link to='/settings' onClick={showSidebar}>
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
