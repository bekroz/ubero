const tripSchema = {
	name: 'trips',
	type: 'document',
	title: 'Trips',
	fields: [
		{
			name: 'drop',
			type: 'string',
			title: 'Drop Point',
		},
		{
			name: 'pickup',
			type: 'string',
			title: 'Pickup Point',
		},
		{
			name: 'rideCategory',
			type: 'string',
			title: 'Trip type',
		},
		{
			name: 'price',
			type: 'number',
			title: 'Trip price',
		},
		{
			name: 'rideTimeStamp',
			type: 'datetime',
			title: 'Trip timestamp',
		},
		{
			name: 'passenger',
			type: 'reference',
			to: [
				{
					type: 'string',
					name: 'passengerName',
					title: 'Passenger Name',
				},
				{
					name: 'userPic',
					type: 'image',
					title: 'User Image',
				},
			],
		},
	],
};

export default tripSchema;
