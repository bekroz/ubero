import { createContext, useState, useEffect } from 'react';

export const UberoContext = createContext();

export const UberProvider = ({ children }) => {
	const createLocationCoordinatePromise = (locationName, locationType) => {
		return new Promise(async (resolve, reject) => {
			const res = await fetch('/api/map/getLocationCoordinates', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					locationName,
					locationType,
				}),
			});
			const data = await res.json();
			if (data.message === 'success') {
				switch (locationType) {
					case 'pickup':
						setPickupPointCoordinates(data.data);
						break;
					case 'drop':
						setDropPointCoordinates(data.data);
				}
				resolve();
			} else {
				reject();
			}
		});
	};

	const [pickup, setPickup] = useState('');
	const [drop, setDrop] = useState('');
	const [pickupPointCoordinates, setPickupPointCoordinates] = useState('');
	const [dropPointCoordinates, setDropPointCoordinates] = useState('');

	useEffect(() => {
		if (pickup && drop) {
			(async () => {
				await Promise.all([createLocationCoordinatePromise(pickup, 'pickup')]);
				await Promise.all([createLocationCoordinatePromise(drop, 'drop')]);
			})();
		} else {
			return;
		}
	}, [pickup, drop]);

	return <UberoContext.Provider value={}>{children}</UberoContext.Provider>;
};
