import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TweenLite } from 'gsap';
import setMouseMove from './action';
import './App.css';

function App() {
	const compRef1 = useRef(null);
	const compRef2 = useRef(null);
	const compRef3 = useRef(null);
	const compRef4 = useRef(null);
	const compRef5 = useRef(null);
	const compRef6 = useRef(null);
	const compRef7 = useRef(null);
	const compRef8 = useRef(null);
	const compRef9 = useRef(null);
	const compRef10 = useRef(null);
	const compRef11 = useRef(null);
	const compRef12 = useRef(null);
	const compRef13 = useRef(null);
	const compRef14 = useRef(null);
	const compRef15 = useRef(null);
	const compRef16 = useRef(null);
	const compRef17 = useRef(null);
	const compRef18 = useRef(null);
	const compRef19 = useRef(null);
	const compRef20 = useRef(null);
	const compRef21 = useRef(null);
	const compRef22 = useRef(null);
	const compRef23 = useRef(null);
	const dispatch = useDispatch();
	const { x, y } = useSelector(state => state);
	const [doneSetup, initialSetup] = useState(false);
	const compRefs = [
		compRef1,
		compRef2,
		compRef3,
		compRef4,
		compRef5,
		compRef6,
		compRef7,
		compRef8,
		compRef9,
		compRef10,
		compRef11,
		compRef12,
		compRef13,
		compRef14,
		compRef15,
		compRef16,
		compRef17,
		compRef18,
		compRef19,
		compRef20,
		compRef21,
		compRef22,
		compRef23
	];
	compRefs.forEach(ref => {
		ref.current &&
			TweenLite.to(ref.current, 0.7, {
				x: getRandomInt(x),
				y: getRandomInt(y)
			});
	});

	useEffect(() => {
		window.addEventListener('mousemove', onMouseMove);
		return () => window.removeEventListener('mousemove', onMouseMove);
	});
	const onMouseMove = e => {
		!doneSetup && initialSetup(true);
		dispatch(
			setMouseMove({
				x: getRandomInt(window.innerWidth),
				y: getRandomInt(window.innerHeight)
			})
		);
	};
	function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}
	return (
		<div>
			{compRefs.map((ref, index) => (
				<div key={index + 1} className='circle' ref={ref} />
			))}
		</div>
	);
}

export default App;
