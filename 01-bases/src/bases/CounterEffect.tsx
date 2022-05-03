import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAX_CONST = 10;

export const CounterEffect = () => {
	const [counter, setCounter] = useState(5);
	const counterEff = useRef<HTMLHeadingElement>(null);

	useLayoutEffect(() => {
		if(counter < 10) {
			return;
		}

		const tl = gsap.timeline();
		tl.to(counterEff.current, {
			y: -10,
			duration: 0.2,
			ease: "ease.out",
		});
		tl.to(counterEff.current, {
			y: 0,
			duration: 1,
			ease: "ease.out",
		});
		
	}, [counter]);
	
	const handleClick = () => {
		// if(counter < MAX_CONST) {
		// 	setCounter(counter + 1);
		// }
		setCounter(prev => Math.min(prev+1, MAX_CONST));
	}

	return (
		<>
			<h2>CounterEffect</h2>
			<h3 ref={counterEff}>{ counter }</h3>
		
			<button
				onClick={ handleClick }
			>
				+1
			</button>
		</>
	)
}
