import '../../styles/globals.css';
import { UberoProvider } from '../context';

function MyApp({ Component, pageProps }) {
	return (
		<UberoProvider>
			<Component {...pageProps} />
		</UberoProvider>
	);
}

export default MyApp;
