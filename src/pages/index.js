import Head from 'next/head';
import Image from 'next/image';
import { Navbar, Map } from '../components';
import { LocationSelector } from '../components/LocationSelector';
import style from './style';

function Home() {
	return (
		<div className={style.wrapper}>
			{/* navbar */}
			<Navbar />
			<div className={style.main}>
				<Map />
			</div>
			<div className={style.rideRequestContainer}></div>
			<div className={style.rideRequest}>
				<LocationSelector />
				{/* confirm ride */}
			</div>
		</div>
	);
}

export default Home;
