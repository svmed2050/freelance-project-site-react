import React from 'react'

const Contacts = () => {
	return (
		<main className='section '>
			<div className='container'>
				<h2 className='title-1'>Contacts</h2>
				<ul className='content-list'>
					<li className='content-list__item'>
						<h2 className='title-2'>Location</h2>
						<p>Dnipro, Ukraine</p>
					</li>
					<li className='content-list__item'>
						<h2 className='title-2'>Telegram</h2>
						<p>
							<a href='tel:+380631234567'>+38 (063) 123-45-67</a>
						</p>
					</li>
					<li className='content-list__item'>
						<h2 className='title-2'>Email</h2>
						<p>
							<a href='mailto:email@gmail.com'>email@gmail.com</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	)
}

export default Contacts
