import { useEffect } from 'react';
import style from './style';
import mapboxGl from 'mapbox-gl';
import { UberoContext } from '../../context';
import { useContext } from 'react';

mapboxGl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function Map() {
	const { pickupCoordinates, dropCoordinates } = useContext(UberoContext);

	console.log(pickupCoordinates, dropCoordinates);
	useEffect(() => {
		const map = new mapboxGl.Map({
			container: 'map',
			style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
			center: [-99.29011, 39.39172],
			zoom: 3,
		});
		if (pickupCoordinates) {
			addToMap(map, pickupCoordinates);
		}
		if (dropCoordinates) {
			addToMap(map, dropCoordinates);
		}
		if (pickupCoordinates && dropCoordinates) {
			map.fitBounds([dropCoordinates, pickupCoordinates], {
				padding: 390,
			});
		}
	}, [pickupCoordinates, dropCoordinates]);

	const addToMap = (map, coordinates) => {
		const marker1 = new mapboxGl.Marker().setLngLat(coordinates).addTo(map);
	};
	return <div className={style.wrapper} id='map' />;
}
