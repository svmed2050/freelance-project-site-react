import './style.css'

const Project = ({ project: { img, title } }) => {
	return (
		<li className='project'>
			<a href='./project-page-02.html'>
				<img src={img} alt={title} className='project__img' />
				<h3 className='project__title'>{title}</h3>
			</a>
		</li>
	)
}

export default Project
