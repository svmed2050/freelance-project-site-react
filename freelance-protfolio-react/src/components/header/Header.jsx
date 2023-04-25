import React from 'react'
import './style.css'

const Header = () => {
	return (
		<header className='header '>
			<div className='header__wrapper'>
				<h1 className='header__title'>
					<strong>
						Hi, my name is <em>Pavel</em>
					</strong>
					<br />
					I'm a React Developer
				</h1>
				<div className='header__text'>
					<p>with passion for learning and creating.</p>
				</div>
				<a
					target='__blank'
					href='https://drive.google.com/file/d/1q9E_XCIzfnxEgQYMqzKroVscaTN9tm1D/view?usp=share_link'
					className='btn'
				>
					Download CV
				</a>
			</div>
		</header>
	)
}

export default Header
