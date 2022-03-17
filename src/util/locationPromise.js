const createLocationCoordinatePromise = (locationName, locationType) => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await fetch('/api/map/getLocationCoordinates', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					location: locationName,
				}),
			});

			const data = await res.json();
			if (data.message === 'success') {
				switch (locationType) {
					case 'pickup':
						setPickupCoordinates(data.data);
						break;
					case 'drop':
						setDropCoordinates(data.data);
						break;
				}
				resolve();
			} else reject();
		} catch (error) {
			console.error(error);
			reject();
		}
	});
};

export default createLocationCoordinatePromise;
