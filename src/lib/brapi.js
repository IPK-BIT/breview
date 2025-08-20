export async function getVariables(serverConfig) {
	let headers = new Headers();
	if (serverConfig.authorization) {
		headers.append('Authorization', serverConfig.authorization.toString());
	}
	let prefix = getVersionPrefix(serverConfig.brapiVersion);
	const variables = await fetch(serverConfig.baseUrl + prefix + '/variables', {
		headers
	})
		.then(async (response) => await response.json())
		.then((data) => data.result.data);

	variables.forEach((variable) => {
		if (!variable.trait.traitClass) {
			variable.trait.traitClass = 'Unknown';
		}
		if (!variable.method) {
			variable.method = { methodDbId: '', methodName: 'Unknown' };
		}
	});

	return variables;
}

function getVersionPrefix(brapiVersion) {
	if (brapiVersion.includes('v2')) return '/brapi/v2';
	else return '/brapi/v1';
}
