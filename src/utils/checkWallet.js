let metamask;

if (typeof window !== 'undefined') {
	metamask = window.ethereum;
}

const checkWalletConnection = async () => {
	if (!window.ethereum) return;
	try {
		const walletAddressArray = await window.ethereum.request({
			method: 'eth_accounts',
		});

		if (walletAddressArray.length > 0) {
			setCurrentAccount(walletAddressArray[0]);
			reqToCreateUserOnSanity(walletAddressArray[0]);
		}
	} catch (error) {
		console.error(error);
	}
};

const reqToCreateUserOnSanity = async (walletAddress) => {
	if (!window.ethereum) return;
	try {
		await fetch('/api/db/createUser', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				
			})
		});
	} catch (error) {
		console.error(error);
	}
};
export default checkWalletConnection;
