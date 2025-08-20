<script>
	import { appstate } from '@/stores/appstate';
	import AdditionalInfo from './generic/AdditionalInfo.svelte';
	import ExternalReferences from './generic/ExternalReferences.svelte';
	import OntologyReference from './generic/OntologyReference.svelte';

	export let method = {};
</script>

<table>
	<tr>
		<th>Additional Info</th>
		<td>
			{#if method.additionalInfo}
				<AdditionalInfo dict={method.additionalInfo} />
			{/if}
		</td>
	</tr>

	<tr>
		<th>External References</th>
		<td>
			{#if method.externalReferences}
				<ExternalReferences refs={method.externalReferences} />
			{/if}
		</td>
	</tr>

	<tr>
		<th>Bibliographical Reference</th>
		<td>
			{#if method.bibliographicalReference}
			<a target="_blank" href={method.bibliographicalReference}>{method.bibliographicalReference}</a
			>
			{/if}
		</td>
	</tr>

	<tr>
		<th>Description</th>
		<td>
			{#if method.description}
				{method.description}
			{/if}
		</td>
	</tr>

	<tr>
		<th>Formula</th>
		<td>
			{#if method.formula}
				{method.formula}
			{/if}
		</td>
	</tr>

	<tr>
		<th>Method Class</th>
		<td>
			{#if method.methodClass}
			{method.methodClass}
			{/if}
		</td>
	</tr>

	<tr>
		<th>Method Identifier</th>
		<td>{method.methodDbId}</td>
	</tr>

	<tr>
		<th>Method Name</th>
		<td>
			{#if method.methodName}
				{method.methodName}
			{/if}
		</td>
	</tr>

	<tr>
		<th>Method PUI</th>
		<td>
			{#if method.methodPUI}
			<a target="_blank" href={method.methodPUI}>{method.methodPUI}</a>
			{/if}
		</td>
	</tr>

	<tr>
		<th>Ontology Reference</th>
		<td>
			{#if method.ontologyReference}
				<OntologyReference ontoRef={method.ontologyReference} />
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
