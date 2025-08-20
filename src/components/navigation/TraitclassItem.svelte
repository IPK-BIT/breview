<script>
	import { variables } from '@/stores/variables';
	import TraitItem from './TraitItem.svelte';
	import TreeItem from './TreeItem.svelte';

	export let traitClass = 'undefined';
	let open = false;
</script>

<section>
	<div class="nav-item">
		<TreeItem bind:open />
		<strong>{traitClass}</strong>
	</div>
	{#if open}
		<div class="container">
			{#each $variables.filter((v) => {
				if (v.trait.traitClass) {
					return v.trait.traitClass === traitClass;
				} else {
					return true;
				}
			}) as variable}
				<TraitItem bind:traitDbId={variable.trait.traitDbId}></TraitItem>
			{/each}
		</div>
	{/if}
</section>

<style>
	.container {
		padding: 0 1.5em;
	}
	.nav-item {
		display: flex;
		color: black;
		flex-direction: row;
	}
</style>
