import { writable } from 'svelte/store';

export const variables = writable([]);
export const traitClasses = writable([]);

export function setVariables(observationVariables) {
	variables.set(
		observationVariables.sort((a, b) => {
			if (a.observationVariableName && b.observationVariableName) {
				a.observationVariableName.localeCompare(b.observationVariableName);
			} else {
				return 0;
			}
		})
	);
	let traitClassSet = new Set();
	observationVariables.forEach((variable) => {
		traitClassSet.add(variable.trait.traitClass);
	});
	traitClasses.set(Array.from(traitClassSet));
}
