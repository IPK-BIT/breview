<script>
	import { appstate } from '@/stores/appstate';
	import AdditionalInfo from './generic/AdditionalInfo.svelte';
	import StringArray from './generic/StringArray.svelte';
	import OntologyReference from './generic/OntologyReference.svelte';
	import ExternalReferences from './generic/ExternalReferences.svelte';

	export let trait = {};
</script>

<table>
	<tr>
		<th>Additional Info</th>
		<td>
			{#if trait.additionalInfo}
				<AdditionalInfo dict={trait.additionalInfo} />
			{/if}
		</td>
	</tr>

	<tr>
		<th>Alternative Abbreviations</th>
		<td>
			{#if trait.alternativeAbbreviations}
				<StringArray table={trait.alternativeAbbreviations} />
			{/if}
		</td>
	</tr>

	<tr>
		<th>Attribute</th>
		<td>
			{#if trait.attribute}
				{trait.attribute}
			{/if}
			{#if trait.attribute && trait.attributePUI}
				(
			{/if}
			{#if trait.attributePUI}
				<a target="_blank" href={trait.attributePUI}>{trait.attributePUI}</a>
			{/if}
			{#if trait.attribute && trait.attributePUI}
				)
			{/if}
		</td>
	</tr>

	<tr>
		<th>Entity</th>
		
		<td>
			{#if trait.entity}
				{trait.entity}
			{/if}
			{#if trait.entity && trait.entityPUI}
				(
			{/if}
			{#if trait.entityPUI}
				<a target="_blank" href={trait.entityPUI}>{trait.entityPUI}</a>
			{/if}
			{#if trait.entity && trait.entityPUI}
				)
			{/if}
		</td>
	</tr>

	<tr>
		<th>External References</th>
		<td>
			{#if trait.externalReferences}
				<ExternalReferences refs={trait.externalReferences} />
			{/if}
		</td>
	</tr>

	<tr>
		<th>Main Abbreviation</th>
		<td>
			{#if trait.mainAbbreviation}
				{trait.mainAbbreviation}
			{/if}
		</td>
	</tr>

	<tr>
		<th>Ontology Reference</th>
		<td>
			{#if trait.ontologyReference}
				<OntologyReference ontoRef={trait.ontologyReference} />
			{/if}
		</td></tr
	>

	<tr>
		<th>Status</th>
		<td>
			{#if trait.status}
				{trait.status}
			{/if}
		</td>
	</tr>

	<tr>
		<th>Synonyms</th>
		<td>
			{#if trait.synonyms}
				<StringArray table={trait.synonyms} />
			{/if}
		</td>
	</tr>

	<tr>
		<th>Trait Class</th>
		<td>
			{#if trait.traitClass}
				{trait.traitClass}
			{/if}
		</td>
	</tr>

	<tr>
		<th>Trait Description</th>
		<td>
			{#if trait.traitDescription}
				{trait.traitDescription}
			{/if}
		</td>
	</tr>

	<tr>
		<th>Trait Identifier</th>
		<td>{trait.traitDbId}</td>
	</tr>

	<tr>
		<th>Trait Name</th>
		<td>
			{#if trait.traitName}
				{trait.traitName}
			{/if}
		</td>
	</tr>

	<tr>
		<th>Trait PUI</th>
		<td>
			{#if trait.traitPUI}
			<a target="_blank" href={trait.traitPUI}>{trait.traitPUI}</a>
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
