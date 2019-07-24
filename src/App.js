import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TweenLite } from 'gsap';
import setMouseMove from './action';
import './App.css';

function App() {
	const compRef = useRef(null);
	const { x, y } = useSelector(state => state);
	const dispatch = useDispatch();
	compRef.current &&
		TweenLite.to(compRef.current, 0.2, {
			x,
			y
		});
	useEffect(() => {
		window.addEventListener('mousemove', onMouseMove);
		return () => window.removeEventListener('mousemove', onMouseMove);
	});
	const onMouseMove = e => {
		dispatch(setMouseMove({ x: e.clientX - 25, y: e.clientY - 25 }));
	};
	return (
		<div className='screen'>
			<div className='circle' ref={compRef} />
		</div>
	);
}

export default App;
