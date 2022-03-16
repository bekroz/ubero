import style from './style';

function RideSelector() {
	async function onConfirm() {
		console.log('Confirmed');
	}
	return (
		<div className={style.wrapper}>
			<div className={style.title}>Choose your ride or swipe up for more</div>
			<div className={style.carList}></div>
		</div>
	);
}

export default RideSelector;
