import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TweenLite } from 'gsap';
import setMouseMove from './action';
import './App.css';

function App() {
	const compRef = useRef(null);
	const { x, y } = useSelector(state => state);
	const dispatch = useDispatch();
	useEffect(() => {
		window.addEventListener('mousemove', onMouseMove);
		return () => window.removeEventListener('mousemove', onMouseMove);
	});
	const onMouseMove = e => {
		dispatch(setMouseMove({ x: e.clientX, y: e.clientY }));
	};
	console.log(x, y);
	return (
		<div className='screen'>
			<div className='circle' ref={compRef} />
		</div>
	);
}

export default App;
