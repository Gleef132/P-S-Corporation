import React, { FC, ReactNode } from 'react'
import cl from './NavLink.module.scss'

interface NavLinkProps {
	childer: string;
	secondary?: boolean;
	onClick?: () => void;
	isActive: boolean;
}

const NavLink: FC<NavLinkProps> = ({ childer, onClick, secondary, isActive }) => {
	return <>
		{secondary ?
			<li onClick={onClick} className={isActive ? `${cl.btn} ${cl.secondary} ${cl.active}` : `${cl.btn} ${cl.secondary}`}>{childer}</li>
			:
			<li onClick={onClick} className={isActive ? `${cl.btn} ${cl.active}` : cl.btn}>{childer}</li>
		}
	</>
}

export default NavLink