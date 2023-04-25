import './style.css'

import gitHubBlack from './gitHub-black.svg'

const BtnGitHub = ({ link }) => {
	return (
		<a href={link} className='btn-outline' target='_blank' rel='noreferrer'>
			<img src={gitHubBlack} alt='' />
			GitHub repo
		</a>
	)
}

export default BtnGitHub
