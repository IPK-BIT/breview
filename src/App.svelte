<script>
	export let config;

	import { setConfig } from '@/stores/config';
	import Display from './components/Display.svelte';
	setConfig(config);
</script>

<main>
	<Display />
</main>

<style>
	:global(.debug-border) {
		border: 1px solid red;
	}
</style>
