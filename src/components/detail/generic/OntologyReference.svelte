<script>
	// export let ontoRefs = [];
	export let ontoRef = {};
</script>

<table>
	<tbody>
		<tr>
			<td>Identifier</td>
			<td>{ontoRef.ontologyDbId}</td>
		</tr>
		<tr>
			<td>Name</td>
			<td>{ontoRef.ontologyName}</td>
		</tr>
		<tr>
			<td>Version</td>
			<td>{ontoRef.version}</td>
		</tr>
		<tr>
			<td>Documentation Links</td>
			<td>
				{#each ontoRef.documentationLinks as link}
					<a target="_blank" href={link}>{link}</a>
				{/each}
			</td>
		</tr>
	</tbody>
</table>
