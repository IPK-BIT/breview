<script>
	import { appstate } from '@/stores/appstate';
	import VariableDetails from './VariableDetails.svelte';
	import MethodDetails from './MethodDetails.svelte';
	import TraitDetails from './TraitDetails.svelte';
	import ScaleDetails from './ScaleDetails.svelte';
</script>

<section>
	{#if $appstate.selectionType === 'variable'}
		<VariableDetails bind:variable={$appstate.selection} />
	{:else if $appstate.selectionType === 'trait'}
		<TraitDetails bind:trait={$appstate.selection} />
	{:else if $appstate.selectionType === 'method'}
		<MethodDetails bind:method={$appstate.selection} />
	{:else if $appstate.selectionType === 'scale'}
		<ScaleDetails bind:scale={$appstate.selection} />
	{/if}
</section>

<style>
</style>
