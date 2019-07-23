import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
	const compRef = useRef(null);
	useEffect(() => {
		window.addEventListener('mousemove', onMouseMove);
		return () => window.removeEventListener('mousemove', onMouseMove);
	});
	const onMouseMove = () => {};
	return (
		<div className='screen'>
			<div className='circle' ref={compRef} />
		</div>
	);
}

export default App;
