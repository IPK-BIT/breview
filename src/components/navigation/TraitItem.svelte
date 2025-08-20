<script>
	import { variables } from '@/stores/variables';
	import MethodItem from './MethodItem.svelte';
	import { appstate } from '@/stores/appstate';
	import { onMount } from 'svelte';
	import TreeItem from './TreeItem.svelte';

	export let traitDbId = '';
	let open = false;

	let trait = {};
	onMount(() => {
		trait = $variables.find((v) => {
			return v.trait.traitDbId === traitDbId;
		}).trait;
	});

	function handleDetailClick() {
		$appstate.selection = trait;
		$appstate.selectionType = 'trait';
		$appstate.selectedVariables = $variables.filter((v) => {
			return v.trait.traitDbId === traitDbId;
		});
	}
</script>

<section>
	<div class="nav-item">
		<TreeItem bind:open />
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div on:click={handleDetailClick}>
			{trait.traitName ? trait.traitName : traitDbId} <span class="badge">Trait</span>
		</div>
	</div>
	{#if open}
		<div class="container">
			{#each $variables.filter((v) => {
				return v.trait.traitDbId === traitDbId;
			}) as variable}
				<MethodItem bind:methodDbId={variable.method.methodDbId} bind:traitDbId></MethodItem>
			{/each}
		</div>
	{/if}
</section>

<style>
	.nav-item {
		display: flex;
		color: black;
		flex-direction: row;
	}
	span.badge {
		background-color: #32cd32;
		color: black;
		padding: 0.125rem 0.25rem;
		border-radius: 0.25rem;
		font-size: smaller;
	}
	.container {
		padding: 0 1.5em;
	}
</style>
