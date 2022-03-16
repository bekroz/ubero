import Head from 'next/head';
import Image from 'next/image';
import { Navbar } from '../components/Navbar';

function Home() {
	return (
		<div className={style.wrapper}>
			{/* navbar */}
			<Navbar />
			<div className={style.main}>
				{/* map */}
				<h1>Hello</h1>
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
