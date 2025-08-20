<script>
	import { variables } from '@/stores/variables';
	import ScaleItem from './ScaleItem.svelte';
	import { onMount } from 'svelte';
	import { appstate } from '@/stores/appstate';
	import TreeItem from './TreeItem.svelte';

	export let methodDbId = '';
	export let traitDbId = '';

	let open = false;

	let method = {};
	onMount(() => {
		method = $variables.find((v) => {
			return v.method.methodDbId === methodDbId && v.trait.traitDbId === traitDbId;
		}).method;
	});

	function handleDetailClick() {
		$appstate.selection = method;
		$appstate.selectionType = 'method';
		$appstate.selectedVariables = $variables.filter((v) => {
			return v.method.methodDbId === methodDbId && v.trait.traitDbId === traitDbId;
		});
	}
</script>

<section>
	<div class="nav-item">
		<TreeItem bind:open />
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div on:click={handleDetailClick}>
			{method.methodName ? method.methodName : methodDbId} <span class="badge">Method</span>
		</div>
	</div>
	{#if open}
		<div class="container">
			{#each $variables.filter((v) => {
				return v.method.methodDbId === methodDbId && v.trait.traitDbId === traitDbId;
			}) as variable}
				<ScaleItem bind:scaleDbId={variable.scale.scaleDbId} bind:methodDbId bind:traitDbId
				></ScaleItem>
			{/each}
		</div>
	{/if}
</section>

<style>
	.nav-item {
		display: flex;
		flex-direction: row;
		color: black;
	}
	.container {
		padding: 0 1.5em;
	}
	span.badge {
		background-color: #228b22;
		color: white;
		padding: 0.125rem 0.25rem;
		border-radius: 0.25rem;
		font-size: smaller;
	}
</style>
