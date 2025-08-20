<script>
	export let validValues = {};
</script>

<table>
	<tr>
		<td>Minimum Value</td>
		<td>{validValues.min}</td>
	</tr>
	<tr>
		<td>Maximum Value</td>
		<td>{validValues.max}</td>
	</tr>
	<tr>
		<td>Categories</td>
		<td>
			{#if validValues.categories}
				<ul>
					{#each validValues.categories as category}
						<li>{category.value}: {category.label}</li>
					{/each}
				</ul>
			{/if}
		</td>
	</tr>
</table>
