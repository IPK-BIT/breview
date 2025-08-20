<script>
	import { appstate } from '@/stores/appstate';
	import AdditionalInfo from './generic/AdditionalInfo.svelte';
	import ExternalReferences from './generic/ExternalReferences.svelte';
	import OntologyReference from './generic/OntologyReference.svelte';
	import ValidValues from './generic/ValidValues.svelte';

	export let scale = {};
</script>

<table>
	<tr>
		<th>Additional Info</th>
		<td>
			{#if scale.additionalInfo}
				<AdditionalInfo dict={scale.additionalInfo} />
			{/if}
		</td>
	</tr>

	<tr>
		<th>External References</th>
		<td>
			{#if scale.externalReferences}
				<ExternalReferences refs={scale.externalReferences} />
			{/if}
		</td>
	</tr>

	<tr>
		<th>Data Type</th>
		<td>
			{#if scale.dataType}
			{scale.dataType}
			{/if}
		</td>
	</tr>

	<tr>
		<th>Decimal Places</th>
		<td>
			{#if scale.decimalPlaces}
			{scale.decimalPlaces}
			{/if}
		</td>
	</tr>

	<tr>
		<th>Units</th>
		<td>
			{#if scale.units}
			{scale.units}
			{/if}
		</td>
	</tr>

	<tr>
		<th>Ontology Reference</th>
		<td>
			{#if scale.ontologyReference}
				<OntologyReference ontoRef={scale.ontologyReference} />
			{/if}
		</td>
	</tr>

	<tr>
		<th>Scale Identifier</th>
		<td>{scale.scaleDbId}</td>
	</tr>

	<tr>
		<th>Scale Name</th>
		<td>
			{#if scale.scaleName}
			{scale.scaleName}
			{/if}
		</td>
	</tr>

	<tr>
		<th>Scale PUI</th>
		<td>
			{#if scale.scalePUI}
			<a target="_blank" href={scale.scalePUI}>{scale.scalePUI}</a>
			{/if}
		</td>
	</tr>

	<tr>
		<th>Valid Values</th>
		<td>
			{#if scale.validValues}
				<ValidValues validValues={scale.validValues} />
			{/if}
		</td>
	</tr>
</table>

<style>
	table {
		width: 100%;
	}
	th {
		text-align: left;
		padding: 0.25rem;
	}
	td {
		text-align: left;
		padding: 0.25rem;
	}
	tr {
		background-color: white;
		color: black;
	}
</style>
