import { createContext, useState, useEffect } from 'react';

const UberoContext = createContext();

const UberoProvider = ({ children }) => {
	const createLocationCoordinatePromise = (locationName, locationType) => {
		return new Promise(async (resolve, reject) => {
			const res = await fetch('api/map/getLocationCoordinates', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					locationName,
					locationType,
				}),
			});

			console.log(`RESPONSE:`, res);
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

	return (
		<UberoContext.Provider
			value={{
				pickup,
				setPickup,
				drop,
				setDrop,
				pickupPointCoordinates,
				setPickupPointCoordinates,
				dropPointCoordinates,
				setDropPointCoordinates,
			}}>
			{children}
		</UberoContext.Provider>
	);
};

export { UberoContext, UberoProvider };
