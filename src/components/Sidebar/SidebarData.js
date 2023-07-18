import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
	{
		title: 'Dashboard',
		path: '/dashboard',
		icon: <AiIcons.AiFillHome />,
		cName: 'nav-text',
	},
	{
		title: 'Devices',
		path: '/devices',
		icon: <IoIcons.IoIosPaper />,
		cName: 'nav-text',
	},
	{
		title: 'Users',
		path: '/users',
		icon: <IoIcons.IoMdPeople />,
		cName: 'nav-text',
	},
];