import Head from 'next/head';
import Image from 'next/image';
import { Navbar, Map } from '../components';

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
				{/* location selector */}
				{/* confirm ride */}
			</div>
		</div>
	);
}

export default Home;

const style = {
	wrapper: 'h-scren w-screen flex flex-col',
	main: 'bg-red-500',
};
