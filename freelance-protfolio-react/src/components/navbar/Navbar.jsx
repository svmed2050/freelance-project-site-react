import { NavLink } from 'react-router-dom'
import BtnDarkMode from '../btnDarkMode/BtnDarkMode'
import './style.css'

const Navbar = () => {
	const activeLink = 'nav-list__link nav-list__link--active'
	const normalLink = 'nav-list__link'

	const underlineFunc = (link) => (link.isActive ? activeLink : normalLink)

	return (
		<nav className='nav'>
			<div className='container'>
				<div className='nav-row'>
					<NavLink className='logo' to='/'>
						<strong>Freelancer</strong> portfolio
					</NavLink>

					<BtnDarkMode />

					<ul className='nav-list'>
						<li className='nav-list__item'>
							<NavLink to='/' className={underlineFunc}>
								Home
							</NavLink>
						</li>
						<li className='nav-list__item'>
							<NavLink className={underlineFunc} to='projects'>
								Projects
							</NavLink>
						</li>
						<li className='nav-list__item'>
							<NavLink className={underlineFunc} to='/contacts'>
								Contacts
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
