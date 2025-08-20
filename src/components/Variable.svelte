<script>
	import { appstate } from '@/stores/appstate';
	import { variables } from '@/stores/variables';

	function nvl(a, b) {
		return a.length === 0 ? b : a;
	}
</script>

<section class="container">
	{#each nvl($appstate.selectedVariables, $variables) as variable}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<span
			class="badge"
			on:click={() => {
				$appstate.selection = variable;
				$appstate.selectionType = 'variable';
			}}>{variable.observationVariableDbId}</span
		>
	{/each}
</section>

<style>
	span.badge {
		background-color: lightgrey;
		color: black;
		padding: 0.125rem 0.25rem;
		border-radius: 0.25rem;
		font-size: smaller;
	}
	.container {
		flex-wrap: wrap;
		overflow-x: auto;
		display: flex;
		gap: 0.125rem;
		padding: 0.25rem;
	}
</style>
