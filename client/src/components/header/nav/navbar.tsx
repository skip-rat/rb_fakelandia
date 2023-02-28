import { NavLink } from "react-router-dom";
import './navbar.css';

const activeClass = 'navigation__link navigation__item--active';
const inactiveClass = 'navigation__link navigation__item--inactive';

const Navbar: React.FC = () => {
	return (
		<nav className="navigation">
			<NavLink className={({ isActive }) => isActive ? activeClass : inactiveClass}
				to='/'
			>
				Home
			</NavLink>
			<NavLink className={({ isActive }) => isActive ? activeClass : inactiveClass}
				to='/misdemeanours'
			>
				Misdemeanours
			</NavLink>
			<NavLink className={({ isActive }) => isActive ? activeClass : inactiveClass}
				to='/confession'
			>
				Confess To Us
			</NavLink>
		</nav>
	)
};

export default Navbar;