import React, { useState, useEffect } from 'react';
import apps from './projects-list';
import Link from './Link';

function App() {
	const [projects, setProjects] = useState([])

	useEffect(() => {
		setProjects(apps);	
	}, [])

	return (
		<main>
			<h2 className='heading'>Portfolio Uroš Tomašević</h2>
			<p className='instructions'>(click on a project to see a live demo)</p>
			{projects.map(project => (
				<Link key={project.id} project={project} />
			))}
		</main>
	);
}

export default App;
