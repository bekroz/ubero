import { Navbar, Map, LocationSelector, Confirmation } from '../components';
import style from './style';

function Home() {
	return (
		<div className={style.wrapper}>
			<Navbar />
			<div className={style.main}>
				<Map />
			</div>
			<div className={style.rideRequestContainer}>
				<div className={style.rideRequest}>
					<LocationSelector />
					<Confirmation />
				</div>
			</div>
		</div>
	);
}

export default Home;
