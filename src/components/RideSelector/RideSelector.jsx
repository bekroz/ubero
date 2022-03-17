import { useEffect, useState } from 'react';
import Image from 'next/image';
import ethLogo from '../../images/eth.png';
import style from './style';
import { UberoContext } from '../../context';

function RideSelector() {
	const [carList, setCarList] = useState([]);
	const [chosenCar, setChosenCar] = useState(null);

	async function onConfirm() {
		console.log('Confirmed');
	}
	const basePrice = 482;

	useEffect(() => {
		(async () => {
			try {
				const res = await fetch('/api/db/getRideTypes');
				const data = await res.json();
				setCarList(data.data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div className={style.wrapper}>
			<div className={style.title}>Choose your ride or swipe up for more</div>
			<div className={style.carList}>
				{carList?.map(({ type, icon, priceMultiplier }, index) => (
					<div className={style.car} key={index}>
						<Image
							alt='car'
							src={icon}
							width={50}
							height={50}
							className={style.carImage}
						/>
						<div className={style.carDetails}>
							<div className={style.carType}>{type}</div>
							<div className={style.time}>3 min away</div>
						</div>
						<div className={style.priceContainer}>
							<div className={style.price}>
								{((basePrice / 10 ** 5) * priceMultiplier).toFixed(5)}
							</div>
							<Image src={ethLogo} height={25} width={40} alt='ethereum logo' />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default RideSelector;
