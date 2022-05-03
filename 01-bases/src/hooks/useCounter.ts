import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const useCounter = ({ maxCount = 1 }) => {
	const [counter, setCounter] = useState(0);
	
	const counterEff = useRef<HTMLHeadingElement>(null);
	const tl = useRef(gsap.timeline());

	useLayoutEffect(() => {
		if(counter < maxCount) {
			return;
		}

		tl.current.to(counterEff.current, {
			y: -10,
			duration: 0.2,
			ease: "ease.out",
		});
		tl.current.to(counterEff.current, {
			y: 0,
			duration: 1,
			ease: "ease.out",
		});
		
	}, [counter, maxCount]);

	const handleClick = () => {
		setCounter(prev => Math.min(prev+1, maxCount));
	}

	return {
		counter,
		handleClick,
		counterEff
	};
}
