import { projects } from '../helpers/projectsList'

import Project from '../components/project/Project'

const Projects = () => {
	return (
		<main className='section '>
			<div className='container'>
				<h2 className='title-1'>Projects</h2>
				<ul className='projects'>
					{projects.map((project, index) => (
						<Project project={project} key={project.title} index={index} />
					))}
				</ul>
			</div>
		</main>
	)
}

export default Projects
