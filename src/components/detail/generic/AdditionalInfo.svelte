<script>
	export let dict = {};
</script>

<table>
	<tbody>
		{#each Object.keys(dict) as key}
			<tr>
				<td>{key}</td>
				<td>{JSON.stringify(dict[key])}</td>
			</tr>
		{/each}
	</tbody>
</table>
