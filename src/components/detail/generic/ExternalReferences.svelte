<script>
	export let refs = [];
</script>

<table>
	<tbody>
		{#each refs as ref}
			<tr>
				<td><a target="_blank" href={ref.referenceId}>{ref.referenceSource}</a></td>
			</tr>
		{/each}
	</tbody>
</table>
