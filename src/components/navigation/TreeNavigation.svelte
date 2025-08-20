<script>
	import { traitClasses, variables } from '@/stores/variables';
	import TraitclassItem from './TraitclassItem.svelte';
</script>

<div>
	{#each $traitClasses as traitClass}
		<TraitclassItem bind:traitClass />
	{/each}
</div>
