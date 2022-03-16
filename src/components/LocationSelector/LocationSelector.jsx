import { useState, useRef } from 'react';
import style from './style';

function LocationSelector() {
	const [inPickupFocus, setInPickupFocus] = useState(true);
	const pickupInput = useRef();
	const dropInput = useRef();

	function onPickupChange(e) {
		pickupInput.current = e.target.value;
	}

	function onDropChange(e) {
		dropInput.current = e.target.value;
	}
	return (
		<div className={style.wrapper}>
			<div className={style.searchHeader}>
				{inPickupFocus ? 'Where from?' : 'Where to?'}
			</div>
			<div className={style.inputBoxes}>
				<div
					className={`${style.inputBox} ${
						inPickupFocus && style.focusedInputBox
					}`}>
					<div className={style.svgContainer}>
						<svg viewBox='0 0 24 24' width='1em' height='1em'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M12 14a2 2 0 100-4 2 2 0 000 4zm5-2a5 5 0 11-10 0 5 5 0 0110 0z'
							/>
						</svg>
					</div>
					<input
						ref={pickupInput}
						type='text'
						className={style.input}
						placeholder='Enter pickup location'
						onChange={onPickupChange}
						onFocus={() => setInPickupFocus(true)}
					/>
				</div>
				<div className={style.verticalLine} />
				<div
					className={`${style.inputBox} ${!inPickupFocus} && ${
						style.focusedInputBox
					}`}>
					<div className={style.svgContainer}>
						<svg viewBox='0 0 24 24' width='1em' height='1em'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M14 10h-4v4h4v-4zM7 7v10h10V7H7z'
							/>
						</svg>
					</div>
					<input
						ref={dropInput}
						type='text'
						className={style.input}
						placeholder='Where are we going?'
						onChange={onDropChange}
						onFocus={() => setInPickupFocus(false)}
					/>
				</div>
			</div>
		</div>
	);
}

export default LocationSelector;
