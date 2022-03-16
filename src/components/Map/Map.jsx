import { useEffect } from 'react';
import style from './style';
import mapboxGl from 'mapbox-gl';

mapboxGl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;

function Map() {
	useEffect(() => {
		const map = new mapboxGl.Map({
			container: 'map',
			style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
			center: [-99.29011, 39.39172],
			zoom: 3,
		});
	}, []);

	return <div className={style.wrapper} id='map' />;
}

export default Map;
