import { writable } from 'svelte/store';

export const appstate = writable({
	selection: {},
	selectionType: '',
	selectedVariables: []
});
