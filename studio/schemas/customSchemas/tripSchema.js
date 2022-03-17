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
			title: 'Passenger',
			to: [{ type: 'users' }],
		},
	],
};

export default tripSchema;
