const getLocationCoordinates = async (req, res) => {
	const mapboxUrl = `${process.env.NEXT_PUBLIC_MAPBOX_PLACES_API_URL}/${req.query.location}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_PLACES_API_URL}/${req.body.location}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`;
	console.log(`MAPBOX URL:`, mapboxUrl);
	try {
		const res = await fetch(mapboxUrl);
		const data = await res.json();
		res
			.status(200)
			.send({ message: res.message, data: data.features[0].center });
	} catch (error) {
		res.status(500).send({ message: res.message, data: error.message });
	}
};

export default getLocationCoordinates;
