<script>
	import { appstate } from '@/stores/appstate';
	import AdditionalInfo from './generic/AdditionalInfo.svelte';
	import ExternalReferences from './generic/ExternalReferences.svelte';
	import StringArray from './generic/StringArray.svelte';
	import OntologyReference from './generic/OntologyReference.svelte';

	export let variable = {};
</script>

<section class="col">
	<div class="grid">
		<span>Trait:</span>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<u
			style="grid-column: 2; text-align: left"
			class="link"
			on:click={() => {
				$appstate.selection = variable.trait;
				$appstate.selectionType = 'trait';
			}}>{variable.trait.traitName ? variable.trait.traitName : variable.trait.traitDbId}</u
		>
	</div>
	<div class="grid">
		<span>Method:</span>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<u
			style="grid-column: 2; text-align: left"
			class="link"
			on:click={() => {
				$appstate.selection = variable.method;
				$appstate.selectionType = 'method';
			}}>{variable.method.methodName ? variable.method.methodName : variable.method.methodDbId}</u
		>
	</div>
	<div class="grid">
		<span>Scale:</span>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<u
			style="grid-column: 2; text-align: left"
			class="link"
			on:click={() => {
				$appstate.selection = variable.scale;
				$appstate.selectionType = 'scale';
			}}>{variable.scale.scaleName ? variable.scale.scaleName : variable.scale.scaleDbId}</u
		>
	</div>
</section>

<table>
	<tr>
		<th>Additional Info</th>
		<td>
			{#if variable.additionalInfo}
				<AdditionalInfo dict={variable.additionalInfo} />
			{/if}
		</td>
	</tr>

	<tr>
		<th> Common Crop Name </th>
		<td>
			{#if variable.commonCropName}
				{variable.commonCropName}
			{/if}
		</td>
	</tr>

	<tr>
		<th>Context of Use</th>
		<td>
			{#if variable.contextOfUse}
				<StringArray table={variable.contextOfUse} />
			{/if}
		</td>
	</tr>

	<tr>
		<th>Default Value</th>
		<td>
			{#if variable.defaultValue}
				{variable.defaultValue}
			{/if}
		</td>
	</tr>

	<tr>
		<th>Documentation</th>
		<td>
			{#if variable.documentationURL}
				<a target="_blank" href={variable.documentationURL}>{variable.documentationURL}</a>
			{/if}
		</td>
	</tr>

	<tr>
		<th>External References</th>
		<td>
			{#if variable.externalReferences}
				<ExternalReferences refs={variable.externalReferences} />
			{/if}
		</td>
	</tr>

	<tr>
		<th>Growth Stage</th>
		<td>
			{#if variable.growthStage}
				{variable.growthStage}
			{/if}
		</td>
	</tr>

	<tr>
		<th>Institution</th>
		<td>
			{#if variable.institution}
				{variable.institution}
			{/if}
		</td>
	</tr>

	<tr>
		<th>Language</th>
		<td>
			{#if variable.language}
				{variable.language}
			{/if}
		</td>
	</tr>

	<tr>
		<th>Ontology Reference</th>
		<td>
			{#if variable.ontologyReference}
				<OntologyReference ontoRef={variable.ontologyReference} />
			{/if}
		</td></tr
	>

	<tr>
		<th>Scientist</th>
		<td>
			{#if variable.scientist}
				{variable.scientist}
			{/if}
		</td>
	</tr>

	<tr>
		<th>Status</th>
		<td>
			{#if variable.status}
				{variable.status}
			{/if}
		</td>
	</tr>

	<tr>
		<th>Submission Timestamp</th>
		<td>
			{#if variable.submissionTimestamp}
				{new Date(variable.submissionTimestamp).toLocaleString()}
			{/if}
		</td>
	</tr>

	<tr>
		<th>Synonyms</th>
		<td>
			{#if variable.synonyms}
				<StringArray table={variable.synonyms} />
			{/if}
		</td>
	</tr>

	<tr>
		<th>Variable Identifier</th>
		<td>
			{variable.observationVariableDbId}
		</td>
	</tr>

	<tr>
		<th>Variable Name</th>
		<td>
			{#if variable.observationVariableName}
				{variable.observationVariableName}
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
	.col {
		display: flex;
		flex-direction: column;
		background: white;
		color: black;
		padding: 0.5rem;
		border: 1px solid #ccc;
		margin-bottom: 1em;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.link {
		color: blue;
		cursor: pointer;
	}
</style>
