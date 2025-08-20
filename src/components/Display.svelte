<script>
	import { getVariables } from '@/lib/brapi';
	import { config } from '@/stores/config';
	import { setVariables } from '@/stores/variables';
	import { onMount } from 'svelte';
	import TreeNavigation from '@/components/navigation/TreeNavigation.svelte';
	import Variable from './Variable.svelte';
	import Details from './detail/Details.svelte';

	onMount(async () => {
		setVariables(await getVariables(config.server));
	});
</script>

<section class="">
	<div class="leftcol">
		<div class="container">
			<TreeNavigation />
		</div>
		<div class="container">
			<Variable />
		</div>
	</div>
	<div class="rightcol">
		<Details />
	</div>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		grid-gap: 10px;
	}

	div.leftcol {
		display: grid;
		grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
		grid-gap: 10px;
		padding: 0.5em;
		height: fit-content;
		min-height: 100px;
		flex-direction: column;
	}

	div.container {
		background-color: #f0f0f0;
		border: 1px solid #ccc;
		border-radius: 0.5rem;
	}

	div.rightcol {
		grid-column: span 2;
		padding: 0.5em;
		background-color: #f0f0f0;
		border: 1px solid #ccc;
		border-radius: 0.5rem;
		height: fit-content;
		min-height: 200px;
	}
</style>
