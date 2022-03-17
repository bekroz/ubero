import { useEffect } from 'react';
import style from './style';
import mapboxGl from 'mapbox-gl';
import { UberoContext } from '../../context';
import { useContext } from 'react';

mapboxGl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function Map() {
	const { pickupPointCoordinates, dropPointCoordinates } =
		useContext(UberoContext);

	const drawCoordinates = (pickPoint, dropPoint, map) => {
		if (pickPoint) {
			addToMap(map, pickPoint);
		}
		if (dropPoint) {
			addToMap(map, dropPoint);
		}
		if (pickPoint && dropPoint) {
			map.fitBounds([dropPoint, pickPoint], {
				padding: 60,
			});
		}
	};

	useEffect(() => {
		const map = new mapboxGl.Map({
			container: 'map',
			style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
			center: [-99.29011, 39.39172],
			zoom: 3,
		});
		drawCoordinates(pickupPointCoordinates, dropPointCoordinates, map);
	}, []);

	const addToMap = (map, coordinates) => {
		const firstPoint = new mapboxGl.Marker().setLngLat(coordinates).addTo(map);
	};
	return <div className={style.wrapper} id='map' />;
}
