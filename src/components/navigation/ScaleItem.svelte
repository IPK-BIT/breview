<script>
	import { variables } from '@/stores/variables';
	import { appstate } from '@/stores/appstate';
	import { onMount } from 'svelte';

	export let scaleDbId = '';
	export let methodDbId = '';
	export let traitDbId = '';

	let scale = {};
	onMount(() => {
		scale = $variables.find((v) => {
			return (
				v.scale.scaleDbId === scaleDbId &&
				v.method.methodDbId === methodDbId &&
				v.trait.traitDbId === traitDbId
			);
		}).scale;
	});

	function handleDetailClick() {
		$appstate.selection = scale;
		$appstate.selectionType = 'scale';
		$appstate.selectedVariables = $variables.filter((v) => {
			return (
				v.scale.scaleDbId === scaleDbId &&
				v.method.methodDbId === methodDbId &&
				v.trait.traitDbId === traitDbId
			);
		});
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={handleDetailClick}>
	{scale.scaleName ? scale.scaleName : scaleDbId} <span class="badge">Scale</span>
</div>

<style>
	div {
		padding-bottom: 0.25rem;
		color: black;
	}
	span.badge {
		background-color: #9acd32;
		color: black;
		padding: 0.125rem 0.25rem;
		border-radius: 0.25rem;
		font-size: smaller;
	}
</style>
