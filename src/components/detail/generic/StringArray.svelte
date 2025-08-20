<script>
	export let table = [];
</script>

<table>
	<tbody>
		{#each table as item}
			<tr>
				<td>{item}</td>
			</tr>
		{/each}
	</tbody>
</table>
