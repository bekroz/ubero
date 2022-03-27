import { createContext, useState, useEffect } from 'react';
import {
	createLocationCoordinatePromise,
	checkWalletConnection,
} from '../utils';

const UberoContext = createContext();

const UberoProvider = ({ children }) => {
	const [pickup, setPickup] = useState('');
	const [drop, setDrop] = useState('');
	const [pickupCoordinates, setPickupCoordinates] = useState();
	const [dropCoordinates, setDropCoordinates] = useState();
	const [currentAccount, setCurrentAccount] = useState();

	useEffect(() => {
		if (pickup && drop) {
			(async () => {
				await Promise.all([
					createLocationCoordinatePromise(pickup, 'pickup'),
					createLocationCoordinatePromise(drop, 'drop'),
				]);
			})();
		} else return;
	}, [pickup, drop]);

	return (
		<UberoContext.Provider
			value={{
				pickup,
				setPickup,
				drop,
				setDrop,
				pickupCoordinates,
				setPickupCoordinates,
				dropCoordinates,
				setDropCoordinates,
			}}>
			{children}
		</UberoContext.Provider>
	);
};

export { UberoContext, UberoProvider };
