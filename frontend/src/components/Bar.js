import { useEffect, useState } from 'react';
import './Bar.css';

function Bar({ index, length, color, changeArray }) {
	const [len, setLen] = useState(length);

    useEffect(() => {
        setLen(length);
    }, [length]);

	const colors = [
		['rgba(61, 90, 241, 0.5)', 'rgba(61, 90, 241, 0.2)'],
		['rgba(255, 48, 79, 1)', 'rgba(255, 48, 79, 0.5)'],
		['rgba(131, 232, 90, 0.5)', 'rgba(131, 232, 90, 0.2)'],
	];

	// const barStyle = {
	// 	height: length,
	// };

	const inputStyle = {
		position: 'relative',
		top: Math.floor(length / 2) - 12,
		width: length,
		left: -Math.floor(length / 2) + 13,
		border: 'none',
		background: 'none',
	};

	const bottom = {
		transform: `translateY(${200 - length}px) rotateX(-90deg)`,
		backgroundColor: `${colors[color][0]}`,
		boxShadow: `5px 5px 50px 5px ${colors[color][1]}`,
		trasistion: '0.3s',
	};

	const front_back_right_left = {
		height: `${length}px`,
		transform: `translateY(${200 - length}px)`,
		backgroundColor: `${colors[color][0]}`,
		boxShadow: `5px 5px 50px 5px ${colors[color][1]}`,
		trasistion: '0.3s',
	};

	const quantity = {
		position: 'relative',
		top: 225,
	};

	return (
		<>
			<div className='bar'>
				<div className='side top'></div>
				<div className='side bottom' style={bottom}></div>
				<div className='side right'>
					<div
						className='color-bar right-color-bar'
						style={front_back_right_left}
					></div>
				</div>
				<div className='side left'>
					<div
						className='color-bar left-color-bar'
						style={front_back_right_left}
					></div>
				</div>
				<div className='side front'>
					<div
						className='color-bar front-color-bar'
						style={front_back_right_left}
					>
						<input
							type='number'
							length={len}
							style={inputStyle}
							value={len}
							className='input'
						/>
					</div>
				</div>
				<div className='side back'>
					<div
						className='color-bar back-color-bar'
						style={front_back_right_left}
					></div>
				</div>
			</div>
		</>
	);
}

export default Bar;