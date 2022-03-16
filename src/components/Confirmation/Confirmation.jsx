import style from './style';
import { RideSelector } from '../RideSelector';

function Confirmation() {
	async function onConfirm() {
		console.log('Confirmed');
	}
	return (
		<div className={style.wrapper}>
			<div className={style.rideSelectorContainer}>
				<RideSelector />
			</div>
			<div className={style.confirmBtnContainer}>
				<div className={style.confirmBtn} onClick={onConfirm}>
					Confirm
				</div>
			</div>
		</div>
	);
}

export default Confirmation;
