import sanityClient from '@sanity/client';

const client = sanityClient({
	projectId: process.env.SANITY_PROJECT_ID,
	dataset: process.env.SANITY_DATASET,
	apiVersion: 'v1',
	token: process.env.SANITY_ACCESS_TOKEN,
	useCdn: false,
});

export default client;
